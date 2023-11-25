import {TabBodyDto} from '@/models/models';
import {Hierarchy} from '@/components/Hierarchy/Hierarchy';
import {Positions} from '@/components/Position/Positions';
import {PersonnelList} from '@/components/PersonnelList/PersonnelList';
import {Sets} from '@/components/Sets/Sets';
import {FC} from 'react';

const tabsBody:TabBodyDto[] = [
  {
    id: '1',
    component: <Hierarchy />
  },
  {
    id: '2',
    component: <Positions />
  },
  {
    id: '3',
    component: <PersonnelList />
  },
  {
    id: '4',
    component: <Sets />
  },
];

type TabsBodyProps = {
  activeTab: string,
}

export const TabsBody:FC<TabsBodyProps> = ({ activeTab }) => {
  const activeTabBody = tabsBody.find(tabBody => tabBody.id === activeTab);

  return (
    <div className="tab-body">
      {activeTabBody?.component}
    </div>
  )
}
