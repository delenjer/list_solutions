import React, {Dispatch, FC, SetStateAction} from 'react';

import {SortableItem, SortableKnob} from 'react-easy-sort';
import {CustomKnob} from '@/components/Position/PositionItem/CustomKnob';
import {DataDto} from '@/models/models';

type PositionItemProps = {
  item: DataDto,
  handleItemClick: (id: string) => void;
  activeItemId: string;
  setActiveItemId: Dispatch<SetStateAction<string>>;
}

export const PositionItem:FC<PositionItemProps> = ({ item, handleItemClick, setActiveItemId, activeItemId }) => {

  const handleClick = (id:string) => {
    setActiveItemId((prevId: string) => (prevId === id ? '' : id));

    handleItemClick(id);
  }

  return (
    <SortableItem>
      <button
        type="button"
        className={`position-list__item ${activeItemId === item.id ? 'position-list__item--active' : ''}`}
        onClick={() => handleClick(item.id)}
      >
        <div className="position-list__wrap">
          <div
          >
            <SortableKnob>
              <CustomKnob />
            </SortableKnob>
          </div>

          <div className="position-list__content">
            {item.name}

            <p className="position-list__info">
              {item.info}
            </p>
          </div>
        </div>

        <p className="position-list__price">
          <span className="position-list__total">
            {item.price}
          </span>

          / час
        </p>
      </button>
    </SortableItem>
  )
}
