// app/providers.tsx
'use client';
import { NextIntlClientProvider } from 'next-intl';

interface ProvidersProps {
    children: React.ReactNode;
    locale: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    messages: Record<string, any>;
}

export default function Providers({ children, locale, messages }: ProvidersProps) {
    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
        </NextIntlClientProvider>
    );
}
