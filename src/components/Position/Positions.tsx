import React, {useState, useReducer} from 'react';
import {v4 as uuidv4} from 'uuid';

import {PositionsList} from '@/components/Position/PositionsList/PositionsList';
import {Button} from '@/components/Button/Button';
import {Form} from '@/components/Form/Form';
import {Action, reducer} from '@/components/Position/reducer';
import {PositionsContext, PositionsDispatchContext} from '@/components/Position/PositionsContext/PositionsContext';
import {data} from '@/utils/mock/mock';

export const Positions = () => {
  const [state, dispatch] = useReducer(reducer, data);
  const [itemId, setItemId] = useState('');

  const handleButton = () => {
    let uuid = uuidv4();

    dispatch({
      type: 'add',
      id: uuid
    });
  }

  const handleItemClick = (id:string) => setItemId(id);

  return (
    <div className="container">
      <PositionsContext.Provider value={state}>
        <PositionsDispatchContext.Provider value={dispatch as React.Dispatch<Action> | null}>
          <div className="position-list-container">
            <PositionsList handleItemClick={handleItemClick} />

            <div className="position-list-container__action">
              <Button
                type="button"
                name="create"
                btnClass="button position-list-container__action-btn"
                btnText="Создать новую должность"
                handle={handleButton}
              />
            </div>
          </div>

          <div className="form-container">
            <Form itemId={itemId} />
          </div>
        </PositionsDispatchContext.Provider>
      </PositionsContext.Provider>
    </div>
  )
}
