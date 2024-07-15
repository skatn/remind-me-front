const questionKeys = {
  list: (subjectId: number) => ['questions', subjectId] as const,
  listWithSize: (subjectId: number, size: number) =>
    [...questionKeys.list(subjectId), size] as const,
  one: (questionId: number) => [`question-${questionId}`] as const,
};

export default questionKeys;
