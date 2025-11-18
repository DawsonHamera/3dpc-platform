import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { point_logCreateManyInputObjectSchema as point_logCreateManyInputObjectSchema } from './objects/point_logCreateManyInput.schema';

export const point_logCreateManySchema: z.ZodType<Prisma.point_logCreateManyArgs> = z.object({ data: z.union([ point_logCreateManyInputObjectSchema, z.array(point_logCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.point_logCreateManyArgs>;

export const point_logCreateManyZodSchema = z.object({ data: z.union([ point_logCreateManyInputObjectSchema, z.array(point_logCreateManyInputObjectSchema) ]),  }).strict();