const ApiUrls =  {
  quiz(quizId)  { return `/api/quizzes/${quizId}`},
  questions(quizId, questionId) { return `/api/quizzes/${quizId}/questions/${questionId}` },
  result(quizId) { return `/api/quizzes/${quizId}/result`}
}

export default ApiUrls;