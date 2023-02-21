import { en } from "./locale/en";
import { es } from "./locale/es";
import { mi } from "./locale/mi";

export type Locale = typeof en | typeof es | typeof mi;

export type Component = keyof Locale;

export type ComponentKeys<Key extends Component> = keyof Locale[Key];
