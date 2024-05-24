import * as z from "zod";

export const registerSchema = z.object({
  nama: z.string().min(1, { message: "Nama is required" }),
  email: z.string().email({ message: "Enter a valid email" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  repeat_password: z.string().min(6, { message: "Repeat Password must be at least 6 characters" }),
  tanggal_lahir: z.string().min(1, { message: "Tanggal Lahir is required" }),
  foto: z.instanceof(File).nullable(),
});

export type RegisterType = z.infer<typeof registerSchema>;
