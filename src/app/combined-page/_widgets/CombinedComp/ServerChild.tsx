import { sleep, suspendable } from '@/shared';

export const ServerChild = suspendable(async () => {
  await sleep(13_000);

  return (
    <h2>I&apos;m nested child</h2>
  );
});
