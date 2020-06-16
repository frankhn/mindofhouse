import ValidateInput from "./ValidateInput";

export default (state: any, event:any, inputIdentifier: string, formName: string) => {
    const updatedForm = {
      ...state[formName],
      [inputIdentifier]: {
        ...state[formName][inputIdentifier],
        value: event.target.value,
        valid: ValidateInput(event.target.value,
          state[formName][inputIdentifier].validation),
        touched: true,
      },
    };
    const updatedFormElement = {
      ...updatedForm[inputIdentifier],
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = ValidateInput(
      updatedFormElement.value, updatedFormElement.validation,
    );
  
    let formIsValid = true;
    for (const key in updatedForm) {
      if (inputIdentifier) {
        formIsValid = updatedForm[key].valid && formIsValid;
      }
    }
    return { updatedForm, formIsValid };
  };
  