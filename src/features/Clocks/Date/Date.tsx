import { type FC } from 'react';

import dayjs from 'dayjs';

export const Date: FC<{ date: number }> = ({ date }) => (
  <time>{dayjs(date).format()}</time>
);
