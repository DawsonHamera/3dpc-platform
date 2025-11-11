import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { process_instancesWhereInputObjectSchema as process_instancesWhereInputObjectSchema } from './objects/process_instancesWhereInput.schema';

export const process_instancesDeleteManySchema: z.ZodType<Prisma.process_instancesDeleteManyArgs> = z.object({ where: process_instancesWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.process_instancesDeleteManyArgs>;

export const process_instancesDeleteManyZodSchema = z.object({ where: process_instancesWhereInputObjectSchema.optional() }).strict();