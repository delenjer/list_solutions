import React, {FC, useContext, useEffect} from 'react';

import {FieldText} from '@/components/FieldText/FieldText';
import {Button} from '@/components/Button/Button';
import {Controller, useForm} from 'react-hook-form';
import {PositionsContext, PositionsDispatchContext} from '@/components/Position/PositionsContext/PositionsContext';
import {CheckBox} from '@/components/CheckBox/CheckBox';
import {checkboxList} from '@/utils/mock/mock';
import {FormContent} from '@/components/Form/FormContent/FormContent';

type FormProps = {
  itemId: string,
}

type FormData = {
  textField: string,
  checkProduct: Record<string, boolean>;
}

export const Form:FC<FormProps> = ({ itemId }) => {
  const state = useContext(PositionsContext);
  const dispatch = useContext(PositionsDispatchContext);

  const { handleSubmit, control, setValue, reset } = useForm<FormData>({
    defaultValues: {
      textField: '',
      checkProduct: checkboxList.reduce((acc: { [x: string]: any; }, category: { list: any[]; }) => {
        category.list.forEach((item) => {
          acc[item.name] = item.isCheck;
        });
        return acc;
      }, {} as Record<string, boolean>),
    },
  });

  useEffect(() => {
    const targetVal = state.reduce((acc, item) => {
      if (item.id === itemId) {
        acc = item.name
      }

      return acc;
    }, '');

    setValue('textField', targetVal);
  }, [itemId]);

  const onSubmit = (data:FormData) => {

    if (dispatch) {
      dispatch({
        type: 'edit',
        val: data.textField,
        itemId,
      });
    }

    reset();
  }

  return (
    <form action="#" className="form" onSubmit={handleSubmit(onSubmit)}>
      <label className="form__input-holder">
        <span className="form__title">Название</span>

        <Controller
          name="textField"
          control={control}
          render={(
            { field: { onChange, value, name } }) => (
            <FieldText
              value={value}
              type="text"
              name={name}
              placeholder="Название"
              handle={onChange}
            />
          )}
        />
      </label>

      <FormContent>
        <div className="form__col">
          {
            [...checkboxList].splice(0, 2).map((item:any) => (
              <div key={item.id} className="form__row">
                <h5 className="form__min-title">{ item.title }</h5>

                {
                  item.list.map((item:any) => (
                    <div key={item.label} className="form__checkbox-container">
                      <Controller
                        name={`checkProduct.${item.name}`}
                        control={control}
                        render={(
                          { field: { onChange, value, name } }) => (
                          <CheckBox
                            name={name}
                            handle={onChange}
                            checked={value}
                          />
                        )}
                      />

                      <span className="form__checkbox-container-label">
                          {item.label}
                        </span>
                    </div>
                  ))
                }
              </div>
            ))
          }
        </div>

        <div className="form__col">
          {
            [...checkboxList].splice(2, 4).map((item:any) => (
              <div key={item.id} className="form__row">
                <h5 className="form__min-title">{ item.title }</h5>

                {
                  item.list.map((item:any) => (
                    <div key={item.label} className="form__checkbox-container">
                      <Controller
                        name={`checkProduct.${item.name}`}
                        control={control}
                        render={(
                          { field: { onChange, value, name } }) => (
                          <CheckBox
                            name={name}
                            handle={onChange}
                            checked={value}
                          />
                        )}
                      />

                      <span className="form__checkbox-container-label">
                          {item.label}
                        </span>
                    </div>
                  ))
                }
              </div>
            ))
          }
        </div>
      </FormContent>

      <Button
        type="submit"
        name="create"
        btnClass="button"
        btnText="Сохранить"
      />
    </form>
  )
}
