import {ChangeEvent, FC} from 'react';

type CheckBoxProps = {
  name: string,
  checkboxClass: string,
  handle: (event:ChangeEvent<HTMLInputElement>) => void,
  value: any,
  checked?: boolean,
}

export const CheckBox:FC<Partial<CheckBoxProps>> = ({ checkboxClass, value, name, handle, checked }) => {

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (handle) {
      handle(e);
    }
  }

  return (
    <label className={`checkbox ${checkboxClass}`}>
      <input
        checked={checked}
        className="checkbox__input"
        value={value}
        type="checkbox"
        name={name}
        onChange={(e) => handleChange(e)}
      />

      <span className="checkbox__checkmark"></span>
    </label>
  )
}
