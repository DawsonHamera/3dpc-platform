import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { fileSelectObjectSchema as fileSelectObjectSchema } from './objects/fileSelect.schema';
import { fileIncludeObjectSchema as fileIncludeObjectSchema } from './objects/fileInclude.schema';
import { fileCreateInputObjectSchema as fileCreateInputObjectSchema } from './objects/fileCreateInput.schema';
import { fileUncheckedCreateInputObjectSchema as fileUncheckedCreateInputObjectSchema } from './objects/fileUncheckedCreateInput.schema';

export const fileCreateOneSchema: z.ZodType<Prisma.fileCreateArgs> = z.object({ select: fileSelectObjectSchema.optional(), include: fileIncludeObjectSchema.optional(), data: z.union([fileCreateInputObjectSchema, fileUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.fileCreateArgs>;

export const fileCreateOneZodSchema = z.object({ select: fileSelectObjectSchema.optional(), include: fileIncludeObjectSchema.optional(), data: z.union([fileCreateInputObjectSchema, fileUncheckedCreateInputObjectSchema]) }).strict();