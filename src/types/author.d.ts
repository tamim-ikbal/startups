import { Author as SanityAuthor } from "@/sanity/types/sanity.types";

export type Author = Omit<SanityAuthor, "_rev,_type">;
