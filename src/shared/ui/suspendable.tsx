import { Suspense } from 'react';
import { type SFC } from '../types';

export const suspendable = <T extends {}>(Child: SFC<T>): SFC<T> => (props: T) => (
  <Suspense fallback={<p>Loading...</p>}>
    {<Child {...props} />}
  </Suspense>
);
