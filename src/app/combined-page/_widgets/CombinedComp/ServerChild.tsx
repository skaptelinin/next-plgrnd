import { sleep, suspendable } from '@/shared';

export const ServerChild = suspendable(async () => {
  await sleep(13_000);

  return (
    <h2>I'm nested child</h2>
  );
});
