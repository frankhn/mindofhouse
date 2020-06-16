export const convert_obj_to_array = (obj:any) => {
    let result: any[] = []
    Object.keys(obj).map(key => {
        result.push(obj[key])
    })
    return result
}