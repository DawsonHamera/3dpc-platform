import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { process_templatesSelectObjectSchema as process_templatesSelectObjectSchema } from './objects/process_templatesSelect.schema';
import { process_templatesIncludeObjectSchema as process_templatesIncludeObjectSchema } from './objects/process_templatesInclude.schema';
import { process_templatesUpdateInputObjectSchema as process_templatesUpdateInputObjectSchema } from './objects/process_templatesUpdateInput.schema';
import { process_templatesUncheckedUpdateInputObjectSchema as process_templatesUncheckedUpdateInputObjectSchema } from './objects/process_templatesUncheckedUpdateInput.schema';
import { process_templatesWhereUniqueInputObjectSchema as process_templatesWhereUniqueInputObjectSchema } from './objects/process_templatesWhereUniqueInput.schema';

export const process_templatesUpdateOneSchema: z.ZodType<Prisma.process_templatesUpdateArgs> = z.object({ select: process_templatesSelectObjectSchema.optional(), include: process_templatesIncludeObjectSchema.optional(), data: z.union([process_templatesUpdateInputObjectSchema, process_templatesUncheckedUpdateInputObjectSchema]), where: process_templatesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.process_templatesUpdateArgs>;

export const process_templatesUpdateOneZodSchema = z.object({ select: process_templatesSelectObjectSchema.optional(), include: process_templatesIncludeObjectSchema.optional(), data: z.union([process_templatesUpdateInputObjectSchema, process_templatesUncheckedUpdateInputObjectSchema]), where: process_templatesWhereUniqueInputObjectSchema }).strict();