'use client'

import { useSearchParams } from 'next/navigation'
import {FC} from 'react';

import {TabsNav} from '@/components/Tab/TabsNav/TabsNav';
import {TabsBody} from '@/components/Tab/TabsBody/TabsBody';

export const Tab:FC = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get('tab');
  let activeTab = search || '2';

  return (
    <div>
      <TabsNav activeTab={activeTab} />

      <TabsBody activeTab={activeTab} />
    </div>
  )
}
