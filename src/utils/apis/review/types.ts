import * as z from "zod";

export const reviewSchema = z.object({
  rating: z.string().min(1, { message: "Rating is required" }),
  komentar: z.string().min(1, { message: "Komentar is required" }),
});

export type ReviewType = z.infer<typeof reviewSchema>;
