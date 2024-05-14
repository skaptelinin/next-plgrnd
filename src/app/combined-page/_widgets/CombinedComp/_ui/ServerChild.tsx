import { suspendable } from '@/shared/ui/suspendable';
import { sleep } from '@/shared/utils/sleep';

export const ServerChild = suspendable(async () => {
  await sleep(13_000);

  return (
    <h2>I&apos;m nested child</h2>
  );
}, false);
