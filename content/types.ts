import { en } from "./locale/en";
import { es } from "./locale/es";

export type Locale = typeof en | typeof es;

export type Component = keyof Locale;

export type ComponentKeys<Key extends Component> = keyof Locale[Key];
