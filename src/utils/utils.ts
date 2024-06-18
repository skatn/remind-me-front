export const convertHistoryToColor = (history: number) => {
  if (history > 4) return 'bg-highlight-5';
  else if (history > 3) return 'bg-highlight-4';
  else if (history > 2) return 'bg-highlight-3';
  else if (history > 1) return 'bg-highlight-2';
  else return 'bg-highlight-1';
};
