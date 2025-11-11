import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { filesSelectObjectSchema as filesSelectObjectSchema } from './objects/filesSelect.schema';
import { filesIncludeObjectSchema as filesIncludeObjectSchema } from './objects/filesInclude.schema';
import { filesWhereUniqueInputObjectSchema as filesWhereUniqueInputObjectSchema } from './objects/filesWhereUniqueInput.schema';
import { filesCreateInputObjectSchema as filesCreateInputObjectSchema } from './objects/filesCreateInput.schema';
import { filesUncheckedCreateInputObjectSchema as filesUncheckedCreateInputObjectSchema } from './objects/filesUncheckedCreateInput.schema';
import { filesUpdateInputObjectSchema as filesUpdateInputObjectSchema } from './objects/filesUpdateInput.schema';
import { filesUncheckedUpdateInputObjectSchema as filesUncheckedUpdateInputObjectSchema } from './objects/filesUncheckedUpdateInput.schema';

export const filesUpsertOneSchema: z.ZodType<Prisma.filesUpsertArgs> = z.object({ select: filesSelectObjectSchema.optional(), include: filesIncludeObjectSchema.optional(), where: filesWhereUniqueInputObjectSchema, create: z.union([ filesCreateInputObjectSchema, filesUncheckedCreateInputObjectSchema ]), update: z.union([ filesUpdateInputObjectSchema, filesUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.filesUpsertArgs>;

export const filesUpsertOneZodSchema = z.object({ select: filesSelectObjectSchema.optional(), include: filesIncludeObjectSchema.optional(), where: filesWhereUniqueInputObjectSchema, create: z.union([ filesCreateInputObjectSchema, filesUncheckedCreateInputObjectSchema ]), update: z.union([ filesUpdateInputObjectSchema, filesUncheckedUpdateInputObjectSchema ]) }).strict();