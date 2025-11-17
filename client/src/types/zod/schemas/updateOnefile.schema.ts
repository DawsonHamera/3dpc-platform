import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { fileSelectObjectSchema as fileSelectObjectSchema } from './objects/fileSelect.schema';
import { fileIncludeObjectSchema as fileIncludeObjectSchema } from './objects/fileInclude.schema';
import { fileUpdateInputObjectSchema as fileUpdateInputObjectSchema } from './objects/fileUpdateInput.schema';
import { fileUncheckedUpdateInputObjectSchema as fileUncheckedUpdateInputObjectSchema } from './objects/fileUncheckedUpdateInput.schema';
import { fileWhereUniqueInputObjectSchema as fileWhereUniqueInputObjectSchema } from './objects/fileWhereUniqueInput.schema';

export const fileUpdateOneSchema: z.ZodType<Prisma.fileUpdateArgs> = z.object({ select: fileSelectObjectSchema.optional(), include: fileIncludeObjectSchema.optional(), data: z.union([fileUpdateInputObjectSchema, fileUncheckedUpdateInputObjectSchema]), where: fileWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.fileUpdateArgs>;

export const fileUpdateOneZodSchema = z.object({ select: fileSelectObjectSchema.optional(), include: fileIncludeObjectSchema.optional(), data: z.union([fileUpdateInputObjectSchema, fileUncheckedUpdateInputObjectSchema]), where: fileWhereUniqueInputObjectSchema }).strict();