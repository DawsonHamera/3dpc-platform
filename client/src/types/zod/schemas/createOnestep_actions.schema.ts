import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { step_actionsSelectObjectSchema as step_actionsSelectObjectSchema } from './objects/step_actionsSelect.schema';
import { step_actionsIncludeObjectSchema as step_actionsIncludeObjectSchema } from './objects/step_actionsInclude.schema';
import { step_actionsCreateInputObjectSchema as step_actionsCreateInputObjectSchema } from './objects/step_actionsCreateInput.schema';
import { step_actionsUncheckedCreateInputObjectSchema as step_actionsUncheckedCreateInputObjectSchema } from './objects/step_actionsUncheckedCreateInput.schema';

export const step_actionsCreateOneSchema: z.ZodType<Prisma.step_actionsCreateArgs> = z.object({ select: step_actionsSelectObjectSchema.optional(), include: step_actionsIncludeObjectSchema.optional(), data: z.union([step_actionsCreateInputObjectSchema, step_actionsUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.step_actionsCreateArgs>;

export const step_actionsCreateOneZodSchema = z.object({ select: step_actionsSelectObjectSchema.optional(), include: step_actionsIncludeObjectSchema.optional(), data: z.union([step_actionsCreateInputObjectSchema, step_actionsUncheckedCreateInputObjectSchema]) }).strict();