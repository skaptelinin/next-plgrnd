import { sleep, Suspendable } from '@/shared';
import { Client } from '@/widgets/CombinedComp/Client';
import { ServerChild } from '@/widgets/CombinedComp/ServerChild';

export const Server = async () => {
    await sleep(1_000);

    return (
        <div>
            I am big server component
            <Client initCount={10}>
                <Suspendable>
                    <ServerChild />
                </Suspendable>
            </Client>
        </div>
    )
}
