import { Suspense } from 'react';

import { type SFC } from '../types';

export const suspendable = <T extends {}>(
  Child: SFC<T>,
  hasSuspenseWrapper = true,
): SFC<T> => {
  const Suspendable = (props: T) => (
    hasSuspenseWrapper ? (
      <Suspense fallback={<p>Loading...</p>}>
        {<Child {...props} />}
      </Suspense>
    ) : (
      <Child {...props} />
    )
  );

  return Suspendable;
};
