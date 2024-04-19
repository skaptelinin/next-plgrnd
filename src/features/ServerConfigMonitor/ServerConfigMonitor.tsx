import { getCachedConfig, PropertyRow, sleep } from '@/shared';

export const ServerConfigMonitor = async () => {
    await sleep(2_000);
    const { lang, theme } = await getCachedConfig();

    return (
        <div>
            <h3>
                Server config monitor
            </h3>
            <PropertyRow label="Language" value={lang} />
            <PropertyRow label="Theme" value={theme} />
        </div>
    );
};
