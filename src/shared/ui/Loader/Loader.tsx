import { type FC } from 'react';

export const Loader: FC<{ title: string }> = ({ title }) => (
  <h3>
    Page {title} is loading...
  </h3>
);
