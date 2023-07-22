'use client';

import React, { useCallback, useState } from 'react';
import useSWR from 'swr'

import Home from './Home'
import { useRouter, useParams } from 'next/navigation'
import ApiUrls from '@/modules/common/constants/ApiUrls';

function HomeContainer() {

  const { push, } = useRouter()
  const { quizId } = useParams()

  const [ fetchQuestions, setFetchQuestions ] = useState(false);

  const { data, isLoading } = useSWR(fetchQuestions ? ApiUrls.quiz(quizId) : null);

  if(data) {
    let questionId = data.questions.allIds[0] // Get First Question of Active Quiz
    push(`/quizzes/${quizId}/questions/${questionId}`)
  }

  const onStart = useCallback(() => {
    setFetchQuestions(true);
  }, [])

  return (
    <Home 
      ctaText = 'Start'
      showCtaLoading={isLoading}
      quizLabel='Quiz'
      onStart={onStart}
    />
  )
}

export default HomeContainer