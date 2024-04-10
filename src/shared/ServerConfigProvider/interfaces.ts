export type Theme = 'light' | 'dark' | 'system';
export type Lang = 'ru' | 'en';

export interface Config {
    theme: Theme;
    lang: Lang;
}
