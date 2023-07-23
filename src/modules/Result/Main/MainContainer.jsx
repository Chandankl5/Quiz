'use client';

import React, { useCallback } from 'react';
import useSWR from 'swr'
import Main from './Main'
import ApiUrls from '@/modules/common/constants/ApiUrls';
import { useParams, useRouter } from 'next/navigation';

function MainContainer() {

  const { quizId } = useParams();
  const { push } = useRouter()

  const { data, isLoading } = useSWR(ApiUrls.result(quizId));

  const { score, correctChoiceCount, incorrectChoiceCount } = data || {};

  const onStart = useCallback(() => {
    // Go Back to Quiz Home Page To start again
    push('/quizzes/1')
  }, [])

  if(isLoading) {
    return 'Loading..'
  }

  return (
    <Main 
      score={score}
      correctCount={correctChoiceCount}
      incorrectCount={incorrectChoiceCount}use
      onStart={onStart}
    />
  )
}

export default MainContainer