import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { attendancesCreateManyInputObjectSchema as attendancesCreateManyInputObjectSchema } from './objects/attendancesCreateManyInput.schema';

export const attendancesCreateManySchema: z.ZodType<Prisma.attendancesCreateManyArgs> = z.object({ data: z.union([ attendancesCreateManyInputObjectSchema, z.array(attendancesCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.attendancesCreateManyArgs>;

export const attendancesCreateManyZodSchema = z.object({ data: z.union([ attendancesCreateManyInputObjectSchema, z.array(attendancesCreateManyInputObjectSchema) ]),  }).strict();