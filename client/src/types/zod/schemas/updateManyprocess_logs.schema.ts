import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { process_logsUpdateManyMutationInputObjectSchema as process_logsUpdateManyMutationInputObjectSchema } from './objects/process_logsUpdateManyMutationInput.schema';
import { process_logsWhereInputObjectSchema as process_logsWhereInputObjectSchema } from './objects/process_logsWhereInput.schema';

export const process_logsUpdateManySchema: z.ZodType<Prisma.process_logsUpdateManyArgs> = z.object({ data: process_logsUpdateManyMutationInputObjectSchema, where: process_logsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.process_logsUpdateManyArgs>;

export const process_logsUpdateManyZodSchema = z.object({ data: process_logsUpdateManyMutationInputObjectSchema, where: process_logsWhereInputObjectSchema.optional() }).strict();