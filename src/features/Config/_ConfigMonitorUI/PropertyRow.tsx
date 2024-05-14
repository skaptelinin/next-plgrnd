import type { FC } from 'react';

export const PropertyRow: FC<{ label: string, value: string }> = ({
    label, value,
}) => (
    <p>
        <strong>{label}:</strong>
        {' '}
        <code>{value}</code>
    </p>
);
