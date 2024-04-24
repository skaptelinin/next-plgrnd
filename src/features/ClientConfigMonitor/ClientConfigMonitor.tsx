'use client'
import type { FC } from 'react';

import { useConfig } from '@/shared';

import { ConfigMonitorUI } from '../_ConfigMonitorUI/ConfigMonitorUI';

export const ClientConfigMonitor: FC = () => {
  const config = useConfig();

  return (
    <ConfigMonitorUI componentType="Client" {...config} />
  );
};
