import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { step_triggersSelectObjectSchema as step_triggersSelectObjectSchema } from './objects/step_triggersSelect.schema';
import { step_triggersIncludeObjectSchema as step_triggersIncludeObjectSchema } from './objects/step_triggersInclude.schema';
import { step_triggersWhereUniqueInputObjectSchema as step_triggersWhereUniqueInputObjectSchema } from './objects/step_triggersWhereUniqueInput.schema';

export const step_triggersFindUniqueOrThrowSchema: z.ZodType<Prisma.step_triggersFindUniqueOrThrowArgs> = z.object({ select: step_triggersSelectObjectSchema.optional(), include: step_triggersIncludeObjectSchema.optional(), where: step_triggersWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.step_triggersFindUniqueOrThrowArgs>;

export const step_triggersFindUniqueOrThrowZodSchema = z.object({ select: step_triggersSelectObjectSchema.optional(), include: step_triggersIncludeObjectSchema.optional(), where: step_triggersWhereUniqueInputObjectSchema }).strict();