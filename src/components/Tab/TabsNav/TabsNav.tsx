import {FC} from 'react';

import {TabNav} from '@/components/Tab/TabsNav/TabNav/TabNav';
import {TabNavDto} from '@/models/models';

const tabsNav:TabNavDto[] = [
  {
    id: '1',
    name: 'Иерархия',
  },
  {
    id: '2',
    name: 'Должности',
  },
  {
    id: '3',
    name: 'Список персонала',
  },
  {
    id: '4',
    name: 'Наборы экипировки',
  },
];

type TabsNavProps = {
  activeTab: string,
}

export const TabsNav:FC<TabsNavProps> = ({ activeTab }) => (
  <div className="tab-nav">
    {
      tabsNav.map(tabNav => (
        <TabNav
          key={tabNav.id}
          tabNav={tabNav}
          activeTab={activeTab}
        />
      ))
    }
  </div>
)
