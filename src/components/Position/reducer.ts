import {DataDto} from '@/models/models';
import arrayMove from 'array-move';

export interface Action {
  type: string;
  [key: string]: any;
}

export const reducer = (state:DataDto[], action:Action) => {
  switch (action.type) {
    case 'add': {
      return [
        ...state,
        {
          id: action.id,
          name: '',
          info: '20 заданий',
          price: '$100',
        }
      ]
    }

    case 'sorted': {
      const { oldIndex, newIndex } = action;

      return arrayMove([...state], oldIndex, newIndex);
    }

    case 'edit': {
      const { val, itemId } = action;

      return [...state].map(item => {
        if (item.id === itemId) {
          return {
            ...item,
            name: val,
          }
        }

        return item;
      });
    }
  }

  throw Error('Unknown action: ' + action.type);
}
