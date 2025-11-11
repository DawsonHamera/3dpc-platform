import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { process_templatesSelectObjectSchema as process_templatesSelectObjectSchema } from './objects/process_templatesSelect.schema';
import { process_templatesIncludeObjectSchema as process_templatesIncludeObjectSchema } from './objects/process_templatesInclude.schema';
import { process_templatesCreateInputObjectSchema as process_templatesCreateInputObjectSchema } from './objects/process_templatesCreateInput.schema';
import { process_templatesUncheckedCreateInputObjectSchema as process_templatesUncheckedCreateInputObjectSchema } from './objects/process_templatesUncheckedCreateInput.schema';

export const process_templatesCreateOneSchema: z.ZodType<Prisma.process_templatesCreateArgs> = z.object({ select: process_templatesSelectObjectSchema.optional(), include: process_templatesIncludeObjectSchema.optional(), data: z.union([process_templatesCreateInputObjectSchema, process_templatesUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.process_templatesCreateArgs>;

export const process_templatesCreateOneZodSchema = z.object({ select: process_templatesSelectObjectSchema.optional(), include: process_templatesIncludeObjectSchema.optional(), data: z.union([process_templatesCreateInputObjectSchema, process_templatesUncheckedCreateInputObjectSchema]) }).strict();