import {ChangeEvent, FC} from 'react';

type FieldTextProps = {
  type: string,
  name: string,
  placeholder: string,
  inputClass: string,
  handle: (event:ChangeEvent<HTMLInputElement>) => void,
  value: string,
}

export const FieldText:FC<Partial<FieldTextProps>> = (
{
  type,
  name,
  placeholder,
  inputClass,
  handle,
  value,
}) => {

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (handle) {
      handle(e);
    }
  }

  return (
    <input
      value={value}
      type={type}
      name={name}
      placeholder={placeholder}
      className={`input ${inputClass}`}
      onChange={(e) => handleChange(e)}
    />
  )
}
