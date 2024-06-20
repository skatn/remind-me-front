import dayjs from 'dayjs';

export const convertHistoryToColor = (count: number) => {
  if (count > 4) return 'bg-highlight-1';
  else if (count > 3) return 'bg-highlight-2';
  else if (count > 2) return 'bg-highlight-3';
  else if (count > 1) return 'bg-highlight-4';
  else return 'bg-highlight-5';
};

export const dateToString = (
  date: Date,
  format: string = 'YYYY-MM-DDTHH:mm:ss',
) => {
  return dayjs(date).format(format);
};

export const stringToDate = (
  date: string,
  format: string = 'YYYY-MM-DDTHH:mm:ss',
) => {
  return dayjs(date, format).toDate();
};
