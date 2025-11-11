import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { process_templatesSelectObjectSchema as process_templatesSelectObjectSchema } from './objects/process_templatesSelect.schema';
import { process_templatesIncludeObjectSchema as process_templatesIncludeObjectSchema } from './objects/process_templatesInclude.schema';
import { process_templatesWhereUniqueInputObjectSchema as process_templatesWhereUniqueInputObjectSchema } from './objects/process_templatesWhereUniqueInput.schema';

export const process_templatesDeleteOneSchema: z.ZodType<Prisma.process_templatesDeleteArgs> = z.object({ select: process_templatesSelectObjectSchema.optional(), include: process_templatesIncludeObjectSchema.optional(), where: process_templatesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.process_templatesDeleteArgs>;

export const process_templatesDeleteOneZodSchema = z.object({ select: process_templatesSelectObjectSchema.optional(), include: process_templatesIncludeObjectSchema.optional(), where: process_templatesWhereUniqueInputObjectSchema }).strict();