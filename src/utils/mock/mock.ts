import {CheckboxListItem, DataDto} from '@/models/models';
import {v4 as uuidv4} from 'uuid';

export const data:DataDto[] = [
  {
    id: uuidv4(),
    name: 'Новобранец',
    info: 'от 10 lvl',
    price: '$50',
  },
  {
    id: uuidv4(),
    name: 'Рядовой',
    info: '5 заданий',
    price: '$80',
  },
];

export const checkboxList:CheckboxListItem[] = [
  {
    id: uuidv4(),
    title: 'Торговля',
    list: [
      { isCheck: true, label: 'Продавать продукт', name: 'product' },
      { isCheck: false, label: 'Выставлять цены', name: 'price' },
      { isCheck: false, label: 'Смотреть аналитику', name: 'analytics' },
    ]
  },
  {
    id: uuidv4(),
    title: 'Разборки',
    list: [
      { isCheck: false, label: 'Дуель', name: 'info' },
      { isCheck: false, label: 'Выставлять претензии', name: 'claim' },
    ]
  },
  {
    id: uuidv4(),
    title: 'Производство',
    list: [
      { isCheck: false, label: 'Закупать сырье', name: 'raw' },
      { isCheck: false, label: 'Назначать рабочих', name: 'employee' },
    ]
  },
  {
    id: uuidv4(),
    title: 'Управление',
    list: [
      { isCheck: false, label: 'Назначать должности', name: 'position' },
      { isCheck: true, label: 'Выгонять из банды', name: 'outcast' },
    ]
  }
];
