import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { process_templatesSelectObjectSchema as process_templatesSelectObjectSchema } from './objects/process_templatesSelect.schema';
import { process_templatesIncludeObjectSchema as process_templatesIncludeObjectSchema } from './objects/process_templatesInclude.schema';
import { process_templatesWhereUniqueInputObjectSchema as process_templatesWhereUniqueInputObjectSchema } from './objects/process_templatesWhereUniqueInput.schema';
import { process_templatesCreateInputObjectSchema as process_templatesCreateInputObjectSchema } from './objects/process_templatesCreateInput.schema';
import { process_templatesUncheckedCreateInputObjectSchema as process_templatesUncheckedCreateInputObjectSchema } from './objects/process_templatesUncheckedCreateInput.schema';
import { process_templatesUpdateInputObjectSchema as process_templatesUpdateInputObjectSchema } from './objects/process_templatesUpdateInput.schema';
import { process_templatesUncheckedUpdateInputObjectSchema as process_templatesUncheckedUpdateInputObjectSchema } from './objects/process_templatesUncheckedUpdateInput.schema';

export const process_templatesUpsertOneSchema: z.ZodType<Prisma.process_templatesUpsertArgs> = z.object({ select: process_templatesSelectObjectSchema.optional(), include: process_templatesIncludeObjectSchema.optional(), where: process_templatesWhereUniqueInputObjectSchema, create: z.union([ process_templatesCreateInputObjectSchema, process_templatesUncheckedCreateInputObjectSchema ]), update: z.union([ process_templatesUpdateInputObjectSchema, process_templatesUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.process_templatesUpsertArgs>;

export const process_templatesUpsertOneZodSchema = z.object({ select: process_templatesSelectObjectSchema.optional(), include: process_templatesIncludeObjectSchema.optional(), where: process_templatesWhereUniqueInputObjectSchema, create: z.union([ process_templatesCreateInputObjectSchema, process_templatesUncheckedCreateInputObjectSchema ]), update: z.union([ process_templatesUpdateInputObjectSchema, process_templatesUncheckedUpdateInputObjectSchema ]) }).strict();