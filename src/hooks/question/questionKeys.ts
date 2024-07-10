const questionKeys = {
  list: (subjectId: number) => ['questions', subjectId] as const,
  one: (questionId: number) => [`question-${questionId}`] as const,
};

export default questionKeys;
