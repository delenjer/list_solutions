import React, {FC} from 'react';

type FormContentProps = {
  children: React.ReactNode
}

export const FormContent:FC<FormContentProps> = ({ children }) => (
  <div className="form__content">
    <h3 className="form__content-title">Обязаности</h3>

    <div className="form__holder">
      {children}
    </div>
  </div>
)
