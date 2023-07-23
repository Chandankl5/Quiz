'use client';

import React, { useCallback, useMemo, useState } from 'react';
import useSWR from 'swr';

import Form from './Form'
import api from '@/modules/common/utils/api';
import ApiUrls from '@/modules/common/constants/ApiUrls';
import { useParams, useRouter } from 'next/navigation';

function FormContainer() {

  const [ selectedOptions , setSelectedOptions ] = useState([]);
  const [ isSubmitApiLoading, setIsSubmitApiLoading ] = useState(false);

  const { quizId, questionId } = useParams();
  const { push } = useRouter();

  const { data } = useSWR(ApiUrls.quiz(quizId));

  const activeQuestion = data?.questions?.byIds?.[questionId];

  const nextQuestionId = useMemo(() => {
    let currentQuestionIndex = data?.questions?.allIds.findIndex((id) => id == questionId);

    if(currentQuestionIndex > -1) {
      return data?.questions?.allIds?.[currentQuestionIndex + 1]
    }

  }, [questionId, data])

  const questionStartTime = useMemo(() => Date.now(), []);

  const onSubmit = useCallback((e) => {
    e.stopPropagation();
    e.preventDefault();

    setIsSubmitApiLoading(true);

    const questionEndTime = Date.now();
    const timeTaken = (questionEndTime - questionStartTime) / 1000 // convert to sec.
    const payload = {
      selectedOptions,
      timeTaken
    }

    // Submit User Selected options
    api.post(ApiUrls.questions(quizId, questionId), payload).then(() => {
      setIsSubmitApiLoading(false);

      // Navigate to next question on Submit API success
      push(`/quizzes/${quizId}/questions/${nextQuestionId}`)

    })
  }, [questionId, quizId, nextQuestionId, selectedOptions])

  const onOptionClick = useCallback((e) => {
    // / Taking target node Id or parent node Id since event is delegated and click can happen anywhere inside option node.
    let selectedId = e.target.id || e.target.parentNode?.id; 

    // If option is already selected, unselect it
    if(selectedOptions.includes(selectedId)) {
      setSelectedOptions((options) => options.filter(option => option !== selectedId))
    }
    else {
      setSelectedOptions((options) => [...options, selectedId])
    }
  
  }, [selectedOptions])

  return (
    <Form
      options={activeQuestion?.options}
      selectedOptions={selectedOptions}
      onSubmit={onSubmit}
      onOptionClick={onOptionClick}
      showCtaLoading={isSubmitApiLoading}
    />
  )
}

export default FormContainer