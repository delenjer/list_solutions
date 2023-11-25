import React, {FC, useContext, useState} from 'react';

import SortableList from 'react-easy-sort';
import {PositionItem} from '@/components/Position/PositionItem/PositionItem';
import {DataDto} from '@/models/models';
import {PositionsContext, PositionsDispatchContext} from '@/components/Position/PositionsContext/PositionsContext';

type PositionsListProps = {
  handleItemClick: (id: string) => void;
};

export const PositionsList:FC<PositionsListProps> = ({ handleItemClick }) => {
  const [activeItemId, setActiveItemId] = useState<string>('');
  const state = useContext(PositionsContext);
  const dispatch = useContext(PositionsDispatchContext);

  const onSortEnd = (oldIndex: number, newIndex: number) => {
    if (dispatch) {
      dispatch({type: 'sorted', oldIndex, newIndex,});
    }
  };

  return (
    <div className="position-list">
      <SortableList
        onSortEnd={onSortEnd}
        className="sortable-list"
        draggedItemClassName="dragged"
      >
        {state.map((item) => (
          <PositionItem
            key={item.id}
            item={item}
            handleItemClick={handleItemClick}
            setActiveItemId={setActiveItemId}
            activeItemId={activeItemId}
          />
        ))}
      </SortableList>
    </div>
  );
}
