import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { process_templatesWhereInputObjectSchema as process_templatesWhereInputObjectSchema } from './objects/process_templatesWhereInput.schema';

export const process_templatesDeleteManySchema: z.ZodType<Prisma.process_templatesDeleteManyArgs> = z.object({ where: process_templatesWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.process_templatesDeleteManyArgs>;

export const process_templatesDeleteManyZodSchema = z.object({ where: process_templatesWhereInputObjectSchema.optional() }).strict();