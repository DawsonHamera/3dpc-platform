import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { point_logsCreateManyInputObjectSchema as point_logsCreateManyInputObjectSchema } from './objects/point_logsCreateManyInput.schema';

export const point_logsCreateManySchema: z.ZodType<Prisma.point_logsCreateManyArgs> = z.object({ data: z.union([ point_logsCreateManyInputObjectSchema, z.array(point_logsCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.point_logsCreateManyArgs>;

export const point_logsCreateManyZodSchema = z.object({ data: z.union([ point_logsCreateManyInputObjectSchema, z.array(point_logsCreateManyInputObjectSchema) ]),  }).strict();