import { sleep, suspendable } from '@/shared';

const SChild = async () => {
  await sleep(13_000);

  return (
    <h2>I'm nested child</h2>
  );
};

export const ServerChild = suspendable(SChild);
