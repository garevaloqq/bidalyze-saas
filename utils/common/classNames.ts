import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combina clases utilizando clsx y twMerge (Tailwind)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
