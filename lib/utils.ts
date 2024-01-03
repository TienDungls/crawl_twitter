import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { parse, format } from "date-fns";
import viLocale from "date-fns/locale/vi";
import * as moment from "moment-timezone";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
