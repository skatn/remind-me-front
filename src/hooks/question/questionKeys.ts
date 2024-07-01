const questionKeys = {
  list: (subjectId: number) => ['questions', subjectId] as const,
};

export default questionKeys;
