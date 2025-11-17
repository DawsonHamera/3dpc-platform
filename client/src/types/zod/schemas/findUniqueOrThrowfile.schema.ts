import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { fileSelectObjectSchema as fileSelectObjectSchema } from './objects/fileSelect.schema';
import { fileIncludeObjectSchema as fileIncludeObjectSchema } from './objects/fileInclude.schema';
import { fileWhereUniqueInputObjectSchema as fileWhereUniqueInputObjectSchema } from './objects/fileWhereUniqueInput.schema';

export const fileFindUniqueOrThrowSchema: z.ZodType<Prisma.fileFindUniqueOrThrowArgs> = z.object({ select: fileSelectObjectSchema.optional(), include: fileIncludeObjectSchema.optional(), where: fileWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.fileFindUniqueOrThrowArgs>;

export const fileFindUniqueOrThrowZodSchema = z.object({ select: fileSelectObjectSchema.optional(), include: fileIncludeObjectSchema.optional(), where: fileWhereUniqueInputObjectSchema }).strict();