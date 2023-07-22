const ApiUrls =  {
  quiz(quizId)  { return `/api/quizzes/${quizId}`},
  questions(quizId, questionId) { return `/api/quizzes/${quizId}/questions/${questionId}` }
}

export default ApiUrls;