import { Startup as SanityStartup } from "@/sanity/types/sanity.types";
import { Author } from "./author";
export type Startup = Omit<SanityStartup, "author"> & { author?: Author };
