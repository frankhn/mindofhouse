import React from 'react';
import './Button.scss';


export interface buttonProps {
  class?: string
  clicked?: any
  value: string
  key?:any
  type?: any
  focusOut?:any
  disabled?: boolean
}

const button = (props:buttonProps) => (
        <button
        key={props.key}
        className={props.class}
        onClick={props.clicked}
        type={props.type}
        onBlur={props.focusOut}
        disabled={props.disabled}>
            {props.value}
        </button>
);

export default button;
