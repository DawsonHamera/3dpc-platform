import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { stepsSelectObjectSchema as stepsSelectObjectSchema } from './objects/stepsSelect.schema';
import { stepsIncludeObjectSchema as stepsIncludeObjectSchema } from './objects/stepsInclude.schema';
import { stepsWhereUniqueInputObjectSchema as stepsWhereUniqueInputObjectSchema } from './objects/stepsWhereUniqueInput.schema';

export const stepsFindUniqueOrThrowSchema: z.ZodType<Prisma.stepsFindUniqueOrThrowArgs> = z.object({ select: stepsSelectObjectSchema.optional(), include: stepsIncludeObjectSchema.optional(), where: stepsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.stepsFindUniqueOrThrowArgs>;

export const stepsFindUniqueOrThrowZodSchema = z.object({ select: stepsSelectObjectSchema.optional(), include: stepsIncludeObjectSchema.optional(), where: stepsWhereUniqueInputObjectSchema }).strict();