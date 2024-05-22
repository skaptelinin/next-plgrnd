import { type FC } from 'react';

import { ClientClocks } from './ClientClocks/ClientClocks';
import { Date } from './Date/Date';

export const Clocks: FC<{
  init: number;
  type: 'client' | 'server';
}> = ({ init, type }) => ({
  client: <ClientClocks init={init} />,
  server: <p>Server clocks: <Date date={init} /></p>
}[type]);
