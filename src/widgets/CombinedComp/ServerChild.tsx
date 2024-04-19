import { sleep } from '@/shared';

export const ServerChild = async () => {
    await sleep(13_000);

    return (
        <h2>I'm nested child</h2>
    )
}
