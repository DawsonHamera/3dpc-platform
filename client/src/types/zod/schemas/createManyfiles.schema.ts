import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { filesCreateManyInputObjectSchema as filesCreateManyInputObjectSchema } from './objects/filesCreateManyInput.schema';

export const filesCreateManySchema: z.ZodType<Prisma.filesCreateManyArgs> = z.object({ data: z.union([ filesCreateManyInputObjectSchema, z.array(filesCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.filesCreateManyArgs>;

export const filesCreateManyZodSchema = z.object({ data: z.union([ filesCreateManyInputObjectSchema, z.array(filesCreateManyInputObjectSchema) ]),  }).strict();