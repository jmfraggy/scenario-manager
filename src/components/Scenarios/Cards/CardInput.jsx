import React, { useState } from 'react';

const CardInput = ({
  label,
  value,
  isNumeric,
  handleChange,
  handleReset,
  hasChanged,
  parent,
  name,
  dt
}) => {

  const [inputValue, setInputValue] = useState(value);

  const onChange = event => {
    const regex = /^[0-9\b]+$/;
    if (isNumeric) {
      if (event.target.value === '' || regex.test(event.target.value)) {
        setInputValue(event.target.value);
      }
    } else {
      setInputValue(event.target.value);
    }
  }

  return (
    <div className={hasChanged ? "card-input card-input-changed" : "card-input"}>
      <div className="card-input-header">
        <label>{label}</label>
      </div>
      <div className="card-input-content">
        <input
          type="text"
          data-numeric={true}
          data-parent={parent}
          data-name={name}
          data-dt={dt}
          value={inputValue}
          onChange={onChange}
          onBlur={handleChange}
        />
      </div>
      <div
        className="card-input-changed-reset-button"
        onClick={handleReset}
        data-parent={parent}
        data-name={name}
        data-dt={dt}
      ></div>
    </div>
  );
}

export default CardInput;