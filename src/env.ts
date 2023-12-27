import { z } from 'zod';
import dotenv from 'dotenv';
dotenv.config();

const envSchema = z.object({
  PORT: z.string().optional(),
});

export const envVariables = envSchema.parse(process.env);
