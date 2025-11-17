import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { attendanceCreateManyInputObjectSchema as attendanceCreateManyInputObjectSchema } from './objects/attendanceCreateManyInput.schema';

export const attendanceCreateManySchema: z.ZodType<Prisma.attendanceCreateManyArgs> = z.object({ data: z.union([ attendanceCreateManyInputObjectSchema, z.array(attendanceCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.attendanceCreateManyArgs>;

export const attendanceCreateManyZodSchema = z.object({ data: z.union([ attendanceCreateManyInputObjectSchema, z.array(attendanceCreateManyInputObjectSchema) ]),  }).strict();