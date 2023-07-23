'use client'

import { SWRConfig } from "swr";
import api from '@/modules/common/utils/api';
import Main from "@/modules/Result/Main/MainContainer";

export default function Quiz(c) {
 
  return (
    <div>
    <SWRConfig value={{fetcher: api.get(), revalidateOnMount: true}}>
      <Main />
      </SWRConfig>
    </div>
  )
}
