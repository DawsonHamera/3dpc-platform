import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { attendancesUpdateManyMutationInputObjectSchema as attendancesUpdateManyMutationInputObjectSchema } from './objects/attendancesUpdateManyMutationInput.schema';
import { attendancesWhereInputObjectSchema as attendancesWhereInputObjectSchema } from './objects/attendancesWhereInput.schema';

export const attendancesUpdateManySchema: z.ZodType<Prisma.attendancesUpdateManyArgs> = z.object({ data: attendancesUpdateManyMutationInputObjectSchema, where: attendancesWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.attendancesUpdateManyArgs>;

export const attendancesUpdateManyZodSchema = z.object({ data: attendancesUpdateManyMutationInputObjectSchema, where: attendancesWhereInputObjectSchema.optional() }).strict();