import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { fileCreateManyInputObjectSchema as fileCreateManyInputObjectSchema } from './objects/fileCreateManyInput.schema';

export const fileCreateManySchema: z.ZodType<Prisma.fileCreateManyArgs> = z.object({ data: z.union([ fileCreateManyInputObjectSchema, z.array(fileCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.fileCreateManyArgs>;

export const fileCreateManyZodSchema = z.object({ data: z.union([ fileCreateManyInputObjectSchema, z.array(fileCreateManyInputObjectSchema) ]),  }).strict();