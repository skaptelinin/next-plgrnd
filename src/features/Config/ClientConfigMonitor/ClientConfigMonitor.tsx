'use client'
import type { FC } from 'react';

import { ConfigMonitorUI } from '../_ConfigMonitorUI/ConfigMonitorUI';
import { useConfig } from '../ServerConfigProvider';

export const ClientConfigMonitor: FC = () => {
  const config = useConfig();

  return (
    <ConfigMonitorUI componentType="Client" {...config} />
  );
};
