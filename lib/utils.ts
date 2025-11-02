import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const PERSIAN_DIGITS = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

export function toPersianDigits(value?: string | number | null) {
  if (value === undefined || value === null) return undefined;
  return value
    .toString()
    .replace(/\d/g, (digit) => PERSIAN_DIGITS[Number(digit)] ?? digit);
}
