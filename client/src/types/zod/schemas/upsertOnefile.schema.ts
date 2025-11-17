import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { fileSelectObjectSchema as fileSelectObjectSchema } from './objects/fileSelect.schema';
import { fileIncludeObjectSchema as fileIncludeObjectSchema } from './objects/fileInclude.schema';
import { fileWhereUniqueInputObjectSchema as fileWhereUniqueInputObjectSchema } from './objects/fileWhereUniqueInput.schema';
import { fileCreateInputObjectSchema as fileCreateInputObjectSchema } from './objects/fileCreateInput.schema';
import { fileUncheckedCreateInputObjectSchema as fileUncheckedCreateInputObjectSchema } from './objects/fileUncheckedCreateInput.schema';
import { fileUpdateInputObjectSchema as fileUpdateInputObjectSchema } from './objects/fileUpdateInput.schema';
import { fileUncheckedUpdateInputObjectSchema as fileUncheckedUpdateInputObjectSchema } from './objects/fileUncheckedUpdateInput.schema';

export const fileUpsertOneSchema: z.ZodType<Prisma.fileUpsertArgs> = z.object({ select: fileSelectObjectSchema.optional(), include: fileIncludeObjectSchema.optional(), where: fileWhereUniqueInputObjectSchema, create: z.union([ fileCreateInputObjectSchema, fileUncheckedCreateInputObjectSchema ]), update: z.union([ fileUpdateInputObjectSchema, fileUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.fileUpsertArgs>;

export const fileUpsertOneZodSchema = z.object({ select: fileSelectObjectSchema.optional(), include: fileIncludeObjectSchema.optional(), where: fileWhereUniqueInputObjectSchema, create: z.union([ fileCreateInputObjectSchema, fileUncheckedCreateInputObjectSchema ]), update: z.union([ fileUpdateInputObjectSchema, fileUncheckedUpdateInputObjectSchema ]) }).strict();