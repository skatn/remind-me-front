const subjectKeys = {
  notification: (subjectId: number) =>
    ['subject notification', subjectId] as const,
};

export default subjectKeys;
