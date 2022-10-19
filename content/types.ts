import { en } from "./locale/en";
import { es } from "./locale/es";

export type Locale = typeof en | typeof es;

export type Page = keyof Locale;

export type PageKeys<Key extends Page> = keyof Locale[Key];
