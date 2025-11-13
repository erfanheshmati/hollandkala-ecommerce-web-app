// Central i18n configuration (root-level)
export const i18n = {
  locales: [
    { code: 'fa', name: 'فارسی', icon: '🇮🇷' },
    { code: 'en', name: 'English', icon: '🇬🇧' },
  ],
  defaultLocale: 'fa',
} as const;

export const getDirection = (locale: string) =>
  locale === 'fa' ? 'rtl' : 'ltr';

export type I18nConfig = typeof i18n;
export type Locale = I18nConfig['locales'][number];

// next-intl expects these simple exports
export const locales = i18n.locales.map(
  (l) => l.code
) as readonly string[] as readonly ['fa', 'en'];
export type AppLocale = (typeof locales)[number];
export const defaultLocale: AppLocale = i18n.defaultLocale as AppLocale;

// Optional: human labels
export const localeLabels: Record<AppLocale, string> = Object.fromEntries(
  i18n.locales.map((l) => [l.code, l.name])
) as Record<AppLocale, string>;

// Optional: map route patterns to localized pathnames (keep empty if not needed yet)
export const pathnames = {} as const;
