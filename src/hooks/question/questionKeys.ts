const questionKeys = {
  all: ['questions'] as const,
  list: (subjectId: number) =>
    [...questionKeys.all, 'list', subjectId] as const,
  one: (questionId: number) => [...questionKeys.all, questionId] as const,
};

export default questionKeys;
