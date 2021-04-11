import { DateTime } from 'luxon';

export const format = date => {
  return DateTime.fromJSDate(date).toFormat('yyyy-MM-dd HH:mm:ss');
};
