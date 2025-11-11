import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { filesSelectObjectSchema as filesSelectObjectSchema } from './objects/filesSelect.schema';
import { filesIncludeObjectSchema as filesIncludeObjectSchema } from './objects/filesInclude.schema';
import { filesCreateInputObjectSchema as filesCreateInputObjectSchema } from './objects/filesCreateInput.schema';
import { filesUncheckedCreateInputObjectSchema as filesUncheckedCreateInputObjectSchema } from './objects/filesUncheckedCreateInput.schema';

export const filesCreateOneSchema: z.ZodType<Prisma.filesCreateArgs> = z.object({ select: filesSelectObjectSchema.optional(), include: filesIncludeObjectSchema.optional(), data: z.union([filesCreateInputObjectSchema, filesUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.filesCreateArgs>;

export const filesCreateOneZodSchema = z.object({ select: filesSelectObjectSchema.optional(), include: filesIncludeObjectSchema.optional(), data: z.union([filesCreateInputObjectSchema, filesUncheckedCreateInputObjectSchema]) }).strict();