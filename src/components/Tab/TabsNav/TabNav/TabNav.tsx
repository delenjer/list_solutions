import Link from 'next/link';
import {TabNavDto} from '@/models/models';
import {FC} from 'react';

type TabNavProps = {
  tabNav: TabNavDto,
  activeTab: string,
}

export const TabNav:FC<TabNavProps> = ({ tabNav, activeTab }) => (
  (
    <Link
      href={{
        pathname: '/',
        query: { tab: tabNav.id },
      }}
      className={activeTab === tabNav.id ? 'tab active-tab' : 'tab'}
    >
      {tabNav.name}
    </Link>
  )
)
