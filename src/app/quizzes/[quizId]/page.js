"use client"

import { Home } from '@/modules/Quiz/components/Home'
import api from '@/modules/common/utils/api'
import { SWRConfig } from 'swr'

export default function Quiz() {
  return (
    <div className='p-quizz'>
      <SWRConfig value={{ fetcher: api.get()}}>
        <Home />
      </SWRConfig>
    </div>
  )
}
