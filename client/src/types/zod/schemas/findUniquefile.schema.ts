import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { fileSelectObjectSchema as fileSelectObjectSchema } from './objects/fileSelect.schema';
import { fileIncludeObjectSchema as fileIncludeObjectSchema } from './objects/fileInclude.schema';
import { fileWhereUniqueInputObjectSchema as fileWhereUniqueInputObjectSchema } from './objects/fileWhereUniqueInput.schema';

export const fileFindUniqueSchema: z.ZodType<Prisma.fileFindUniqueArgs> = z.object({ select: fileSelectObjectSchema.optional(), include: fileIncludeObjectSchema.optional(), where: fileWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.fileFindUniqueArgs>;

export const fileFindUniqueZodSchema = z.object({ select: fileSelectObjectSchema.optional(), include: fileIncludeObjectSchema.optional(), where: fileWhereUniqueInputObjectSchema }).strict();