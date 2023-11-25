import React, {FC, memo} from 'react';

type ButtonProps = {
  type: 'button' | 'submit' | 'reset' | undefined,
  name: string,
  btnClass: string,
  handle: (event?:React.MouseEvent<HTMLButtonElement>) => void,
  btnText: string,
}

export const Button: FC<Partial<ButtonProps>> = memo(({type, name, btnClass, handle, btnText}) => {

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (handle) {
      handle(e);
    }
  }

  return (
    <button
      type={type}
      name={name}
      className={btnClass}
      onClick={(e) => handleClick(e)}
    >
      {btnText}
    </button>
  )
});

Button.displayName = 'Button';
