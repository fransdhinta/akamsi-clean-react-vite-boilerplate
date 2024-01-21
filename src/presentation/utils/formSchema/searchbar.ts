import { z } from "zod";

export const searchSchema = z.object({
    searchValue: z.string(),
})

export type SearchSchema = z.infer<typeof searchSchema>