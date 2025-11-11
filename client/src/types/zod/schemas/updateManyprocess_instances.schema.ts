import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { process_instancesUpdateManyMutationInputObjectSchema as process_instancesUpdateManyMutationInputObjectSchema } from './objects/process_instancesUpdateManyMutationInput.schema';
import { process_instancesWhereInputObjectSchema as process_instancesWhereInputObjectSchema } from './objects/process_instancesWhereInput.schema';

export const process_instancesUpdateManySchema: z.ZodType<Prisma.process_instancesUpdateManyArgs> = z.object({ data: process_instancesUpdateManyMutationInputObjectSchema, where: process_instancesWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.process_instancesUpdateManyArgs>;

export const process_instancesUpdateManyZodSchema = z.object({ data: process_instancesUpdateManyMutationInputObjectSchema, where: process_instancesWhereInputObjectSchema.optional() }).strict();