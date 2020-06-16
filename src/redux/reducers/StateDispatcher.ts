import updateObject from '../../helpers/utils/UpdateObject';


export const loadingState = (state:any) => updateObject(state, {
    loading: true
})

export const updateState = (state:any, objectName:string, payload:any) => updateObject(state, {
    loading: false,
    [objectName]: {...payload}
})
