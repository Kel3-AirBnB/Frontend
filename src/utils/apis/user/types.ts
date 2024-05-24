import * as z from "zod";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

export const userSchema = z
  .object({
    nama: z.string().min(1, { message: "Enter your name" }),
    email: z.string().email("Enter a valid email").min(1, { message: "Enter email" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters" }).optional().or(z.literal("")),
    repeat_password: z.string().min(6, { message: "Repeat Password must be at least 6 characters" }).optional().or(z.literal("")),
    tanggal_lahir: z.string().min(1, { message: "Enter your birth date" }),
    foto: z
      .any()
      .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, "Max image size is 5MB")
      .refine((files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type), "Only .jpg, .jpeg, .png formats are supported")
      .optional()
      .or(z.literal("")),
  })
  .refine((data) => data.password === data.repeat_password, {
    message: "Password do not match",
    path: ["repeat_password"],
  });

export type IUserType = z.infer<typeof userSchema>;

export type UserType = {
  id: number;
  nama: string;
  email: string;
  tanggal_lahir: string;
  foto: string;
};
