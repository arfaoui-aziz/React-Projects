import React, { useRef, useImperativeHandle } from "react";

import classes from "./InputField.module.css";

const InputField = React.forwardRef(
  ({ onBlur, onChange, value, type, id, label, isValid }, ref) => {
    const inputRef = useRef();
    useImperativeHandle(inputRef, () => {
      return { focus: activate };
    });
    const activate = () => {
      inputRef.current.focus();
    };

    return (
      <div className={`${classes.control} ${!isValid && classes.invalid}`}>
        <label htmlFor={id}>{label}</label>
        <input
          ref={inputRef}
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
    );
  }
);

export default InputField;
