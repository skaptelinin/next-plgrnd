import { ReactNode, Suspense, type FC } from 'react';

export const Suspendable: FC<{ children: ReactNode }> = ({ children }) => (
    <Suspense fallback={<span>Loading...</span>}>
        {children}
    </Suspense>
);
