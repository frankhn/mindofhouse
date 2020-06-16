/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Fragment } from 'react';
import './Input.scss';

export interface InputProps {
  class?: string
  placeholder?: string
  value?: string
  changed?: any
  invalid?: boolean
  shouldValidate?: any
  touched?: boolean
  elementType: string
  elementConfig?: any
  label?: string
  disabled?: boolean
  focused?: any
  focusOut?: any
  clicked?: any
  fileUpload?: any
}

const input: React.SFC<InputProps> = (props: InputProps) => {
  console.log(props.value)
  const classes = [ props.class ];
  if (props.invalid && props.touched && props.shouldValidate) {
    classes.push('invalid');
  }
  let inputElement = null;
  switch (props.elementType) {
    case 'input':
      inputElement = (<input
        className={ `input__element ${ classes.join(' ') }` }
        { ...props.elementConfig }
        placeholder={ props.placeholder }
        onChange={ props.changed }
        disabled={props.disabled}
        onFocus={ props.focused }
        defaultValue={ props.value }
        name={props.class}
        onBlur={ props.focusOut }
      />);
      break;
    case 'button':
      inputElement = (<button
        className={ `button__element ${ props.class }` }
        onClick={ props.clicked }
      >{ props.value }</button>);
      break;

    case ('textarea'):
      inputElement = <textarea
        className={ `input__element ${ props.class }` } { ...props.elementConfig }
        defaultValue={ props.value }
        onChange={ props.changed }
        style={ { height: "auto" } }
      />;
      break;
    case ('select'):
      inputElement = (
        <select
          className={ `input__element ${ props.class }` }
          name={ props.elementConfig.name }
          onChange={ props.changed }>
          { props.elementConfig.options.map((option: any, i:any) => (
            <option key={ i } value={ option.value }> {
              option.displayValue
            }</option>
          )) }
        </select>);
      break;
    case 'file':
      inputElement = (
        <input
          type="file"
          style={{ padding: '.2rem .5rem', height: '2rem', fontSize:".7rem" }}
          className={ `input__element ${ classes.join(' ') }` }
          { ...props.elementConfig }
          placeholder={ props.placeholder }
          onChange={ props.fileUpload }
          onFocus={ props.focused }
          value={ props.value }
          onBlur={ props.focusOut }
          accept="image/png, image/jpeg"
        />
      );
      break;
    default:
      inputElement = <input
        className={ `input__element ${ props.class }` } { ...props.elementConfig }
        value={ props.value }
        onChange={ props.changed }
      />;
      break;
  }
  return (
    <Fragment>{ inputElement }</Fragment>
  );
};

export default input;
