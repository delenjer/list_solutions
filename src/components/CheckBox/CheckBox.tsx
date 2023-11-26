import {ChangeEvent, FC} from 'react';

type CheckBoxProps = {
  name: string,
  checkboxClass: string,
  handle: (event:ChangeEvent<HTMLInputElement>) => void,
  checked?: boolean,
}

export const CheckBox:FC<Partial<CheckBoxProps>> = ({ checkboxClass, name, handle, checked }) => {

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
        type="checkbox"
        name={name}
        onChange={(e) => handleChange(e)}
      />

      <span className="checkbox__checkmark"></span>
    </label>
  )
}
