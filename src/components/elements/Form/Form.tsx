import React, { Fragment, Component } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button'
import './Form.scss'
import { Link } from 'react-router-dom';

interface IFormProps {
  fields: any
  onSubmit: any
  submitBtn?: any
  inputChange: any
  submitDisabled?: boolean
  loginLink?: any
  registerLink?: any
  forgotPasswordLink?: any
  btnValue?: string
}

export interface IFormState { }

class Form extends Component<IFormProps> {
  state: IFormState = {};

  render() {
    const FormElement = [];
    for (const key in this.props.fields) {
      FormElement.push({
        id: key,
        config: this.props.fields[ key ],
      });
    };
    let form = (
      <Fragment>
        <form onSubmit={ this.props.onSubmit }>
          <fieldset>
            { FormElement.map((element, i) => (
              <div className="form-group" key={ i }>
                <Input
                  class="form-group"
                  placeholder={ element.config.placeholder }
                  elementType={ element.config.elementType }
                  elementConfig={ element.config.elementConfig }
                  invalid={ !element.config.valid }
                  touched={ element.config.touched }
                  shouldValidate={ element.config.validation }
                  changed={ (event: any) => this.props.inputChange(event, element.id) }
                />
              </div>
            )) }
            <div className="links">
              {
                this.props.submitBtn !== undefined
                  ? <Button
                    class={ `btn ${ this.props.submitBtn.class_name }` }
                    clicked={ this.props.onSubmit }
                    disabled={ this.props.submitDisabled }
                    value={ 
                      this.props.btnValue !== null 
                      ? this.props.btnValue 
                      :this.props.submitBtn.name } />
                  : null
              }
              {
                this.props.loginLink !== undefined
                  ? <Link
                    className="f-link"
                    to="/login">{ this.props.loginLink.name }</Link>
                  : this.props.registerLink !== undefined
                    ? <Link
                    className="f-link"
                    to="/register">{ this.props.registerLink.name }</Link>
                    : null
              }
            </div>
          </fieldset>
        </form>
      </Fragment>
    );

    return (
      <Fragment>
        { form }
      </Fragment>
    );
  }
}

export default Form;
