'use client';

import React, { useMemo } from 'react';
import useSWR from 'swr';

import Home from './Home'
import ApiUrls from '@/modules/common/constants/ApiUrls';
import { useParams } from 'next/navigation';

function HomeContainer() {

  const { quizId, questionId } =  useParams()

  const { data, isLoading } = useSWR(ApiUrls.quiz(quizId));

  const activeQuestion = data?.questions?.byIds[questionId];

  const activeQuestionIndex = useMemo(() => {
    let activeQuestionIndex = data?.questions?.allIds.findIndex((id) => id == questionId);

    return activeQuestionIndex + 1;
  }, [data, questionId])
  
  const totalQuestions = data?.questions?.allIds.length;

  const progressPercent = activeQuestionIndex > 0 ? (activeQuestionIndex / totalQuestions) * 100 : 0; 

  if(isLoading) {
    return 'Loading..'
  }

  return (
    <Home 
      questionLabel={activeQuestion?.label}
      questionIndex={activeQuestionIndex}
      totalQuestions={totalQuestions}
      progressPercent={progressPercent}
    />
  )
}

export default HomeContainer