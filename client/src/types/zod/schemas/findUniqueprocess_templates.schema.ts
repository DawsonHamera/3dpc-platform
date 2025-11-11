import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { process_templatesSelectObjectSchema as process_templatesSelectObjectSchema } from './objects/process_templatesSelect.schema';
import { process_templatesIncludeObjectSchema as process_templatesIncludeObjectSchema } from './objects/process_templatesInclude.schema';
import { process_templatesWhereUniqueInputObjectSchema as process_templatesWhereUniqueInputObjectSchema } from './objects/process_templatesWhereUniqueInput.schema';

export const process_templatesFindUniqueSchema: z.ZodType<Prisma.process_templatesFindUniqueArgs> = z.object({ select: process_templatesSelectObjectSchema.optional(), include: process_templatesIncludeObjectSchema.optional(), where: process_templatesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.process_templatesFindUniqueArgs>;

export const process_templatesFindUniqueZodSchema = z.object({ select: process_templatesSelectObjectSchema.optional(), include: process_templatesIncludeObjectSchema.optional(), where: process_templatesWhereUniqueInputObjectSchema }).strict();