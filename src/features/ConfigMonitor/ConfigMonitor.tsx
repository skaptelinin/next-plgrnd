'use client'
import type { FC } from 'react';

import { useConfig } from '@/shared';

export const ConfigMonitor: FC = () => {
    const { lang, theme } = useConfig();

    return (
        <div>
            <p>
                <strong>Language:</strong>
                {' '}
                <code>{lang}</code>
            </p>
            <p>
                <strong>Theme:</strong>
                {' '}
                <code>{theme}</code>
            </p>
        </div>
    );
};
