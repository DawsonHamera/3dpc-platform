import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { attendanceUpdateManyMutationInputObjectSchema as attendanceUpdateManyMutationInputObjectSchema } from './objects/attendanceUpdateManyMutationInput.schema';
import { attendanceWhereInputObjectSchema as attendanceWhereInputObjectSchema } from './objects/attendanceWhereInput.schema';

export const attendanceUpdateManySchema: z.ZodType<Prisma.attendanceUpdateManyArgs> = z.object({ data: attendanceUpdateManyMutationInputObjectSchema, where: attendanceWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.attendanceUpdateManyArgs>;

export const attendanceUpdateManyZodSchema = z.object({ data: attendanceUpdateManyMutationInputObjectSchema, where: attendanceWhereInputObjectSchema.optional() }).strict();