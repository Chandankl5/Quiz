'use client'

import { SWRConfig } from "swr";
import { Home } from '@/modules/Questions/components/Home'
import api from '@/modules/common/utils/api';

export default function Quiz(c) {
 
  return (
    <div>
    <SWRConfig value={{fetcher: api.get(), revalidateOnMount: true}}>
      <Home />
      </SWRConfig>
    </div>
  )
}
