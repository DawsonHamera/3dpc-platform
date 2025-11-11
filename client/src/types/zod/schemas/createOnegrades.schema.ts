import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { gradesSelectObjectSchema as gradesSelectObjectSchema } from './objects/gradesSelect.schema';
import { gradesIncludeObjectSchema as gradesIncludeObjectSchema } from './objects/gradesInclude.schema';
import { gradesCreateInputObjectSchema as gradesCreateInputObjectSchema } from './objects/gradesCreateInput.schema';
import { gradesUncheckedCreateInputObjectSchema as gradesUncheckedCreateInputObjectSchema } from './objects/gradesUncheckedCreateInput.schema';

export const gradesCreateOneSchema: z.ZodType<Prisma.gradesCreateArgs> = z.object({ select: gradesSelectObjectSchema.optional(), include: gradesIncludeObjectSchema.optional(), data: z.union([gradesCreateInputObjectSchema, gradesUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.gradesCreateArgs>;

export const gradesCreateOneZodSchema = z.object({ select: gradesSelectObjectSchema.optional(), include: gradesIncludeObjectSchema.optional(), data: z.union([gradesCreateInputObjectSchema, gradesUncheckedCreateInputObjectSchema]) }).strict();