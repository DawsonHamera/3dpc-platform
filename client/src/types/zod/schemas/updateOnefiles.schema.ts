import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { filesSelectObjectSchema as filesSelectObjectSchema } from './objects/filesSelect.schema';
import { filesIncludeObjectSchema as filesIncludeObjectSchema } from './objects/filesInclude.schema';
import { filesUpdateInputObjectSchema as filesUpdateInputObjectSchema } from './objects/filesUpdateInput.schema';
import { filesUncheckedUpdateInputObjectSchema as filesUncheckedUpdateInputObjectSchema } from './objects/filesUncheckedUpdateInput.schema';
import { filesWhereUniqueInputObjectSchema as filesWhereUniqueInputObjectSchema } from './objects/filesWhereUniqueInput.schema';

export const filesUpdateOneSchema: z.ZodType<Prisma.filesUpdateArgs> = z.object({ select: filesSelectObjectSchema.optional(), include: filesIncludeObjectSchema.optional(), data: z.union([filesUpdateInputObjectSchema, filesUncheckedUpdateInputObjectSchema]), where: filesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.filesUpdateArgs>;

export const filesUpdateOneZodSchema = z.object({ select: filesSelectObjectSchema.optional(), include: filesIncludeObjectSchema.optional(), data: z.union([filesUpdateInputObjectSchema, filesUncheckedUpdateInputObjectSchema]), where: filesWhereUniqueInputObjectSchema }).strict();