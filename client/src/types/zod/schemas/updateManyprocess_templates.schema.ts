import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { process_templatesUpdateManyMutationInputObjectSchema as process_templatesUpdateManyMutationInputObjectSchema } from './objects/process_templatesUpdateManyMutationInput.schema';
import { process_templatesWhereInputObjectSchema as process_templatesWhereInputObjectSchema } from './objects/process_templatesWhereInput.schema';

export const process_templatesUpdateManySchema: z.ZodType<Prisma.process_templatesUpdateManyArgs> = z.object({ data: process_templatesUpdateManyMutationInputObjectSchema, where: process_templatesWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.process_templatesUpdateManyArgs>;

export const process_templatesUpdateManyZodSchema = z.object({ data: process_templatesUpdateManyMutationInputObjectSchema, where: process_templatesWhereInputObjectSchema.optional() }).strict();