import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { error_reportsCreateManyInputObjectSchema as error_reportsCreateManyInputObjectSchema } from './objects/error_reportsCreateManyInput.schema';

export const error_reportsCreateManySchema: z.ZodType<Prisma.error_reportsCreateManyArgs> = z.object({ data: z.union([ error_reportsCreateManyInputObjectSchema, z.array(error_reportsCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.error_reportsCreateManyArgs>;

export const error_reportsCreateManyZodSchema = z.object({ data: z.union([ error_reportsCreateManyInputObjectSchema, z.array(error_reportsCreateManyInputObjectSchema) ]),  }).strict();