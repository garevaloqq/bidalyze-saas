import type { Metadata } from "next";
import { detectLocaleSSR } from "./detectLocaleSSR";
import { loadMessages } from "./loadMessages";

/**
 * Genera metadata para una página dado su namespace en el JSON
 */
export async function generatePageMetadata(namespace: string): Promise<Metadata> {
    const locale = await detectLocaleSSR();
    const messages = await loadMessages(locale);
    const pageMsgs = messages[namespace];

    return {
        title: pageMsgs?.meta_title || "Default Title",
        description: pageMsgs?.meta_description || "Default Description",
    };
}
