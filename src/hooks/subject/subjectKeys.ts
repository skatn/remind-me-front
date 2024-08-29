const subjectKeys = {
  all: ['subjects'] as const,
  one: (subjectId: number) => [...subjectKeys.all, subjectId] as const,
  list: () => [...subjectKeys.all, 'list'] as const,
  notification: (subjectId: number) =>
    ['subject notification', subjectId] as const,
  recentList: () => [...subjectKeys.all, 'recent list'] as const,
};

export default subjectKeys;
