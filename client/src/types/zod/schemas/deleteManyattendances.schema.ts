import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { attendancesWhereInputObjectSchema as attendancesWhereInputObjectSchema } from './objects/attendancesWhereInput.schema';

export const attendancesDeleteManySchema: z.ZodType<Prisma.attendancesDeleteManyArgs> = z.object({ where: attendancesWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.attendancesDeleteManyArgs>;

export const attendancesDeleteManyZodSchema = z.object({ where: attendancesWhereInputObjectSchema.optional() }).strict();