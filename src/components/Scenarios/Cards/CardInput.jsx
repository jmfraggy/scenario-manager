import React from 'react';

const CardInput = ({
  label,
  value,
  handleChange,
  handleReset,
  hasChanged,
  parent,
  name,
  dt
}) => {
  return (
    <div className={hasChanged ? "card-input card-input-changed" : "card-input"}>
      <div className="card-input-header">
        <label>{label}</label>
      </div>
      <div className="card-input-content">
        <input
          type="text"
          data-parent={parent}
          data-name={name}
          data-dt={dt}
          defaultValue={value}
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