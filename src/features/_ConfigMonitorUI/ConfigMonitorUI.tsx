import { type FC } from 'react';

import { type Config, PropertyRow } from '@/shared';

export const ConfigMonitorUI: FC<Config & { componentType: 'Server' | 'Client' }> = ({
  componentType,
  lang,
  theme,
}) => (
  <div>
    <h3>
      {componentType} config monitor
    </h3>
    <PropertyRow label="Language" value={lang}/>
    <PropertyRow label="Theme" value={theme}/>
  </div>
);
