import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { step_triggersIncludeObjectSchema as step_triggersIncludeObjectSchema } from './objects/step_triggersInclude.schema';
import { step_triggersOrderByWithRelationInputObjectSchema as step_triggersOrderByWithRelationInputObjectSchema } from './objects/step_triggersOrderByWithRelationInput.schema';
import { step_triggersWhereInputObjectSchema as step_triggersWhereInputObjectSchema } from './objects/step_triggersWhereInput.schema';
import { step_triggersWhereUniqueInputObjectSchema as step_triggersWhereUniqueInputObjectSchema } from './objects/step_triggersWhereUniqueInput.schema';
import { StepTriggersScalarFieldEnumSchema } from './enums/StepTriggersScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const step_triggersFindFirstOrThrowSelectSchema: z.ZodType<Prisma.step_triggersSelect> = z.object({
    id: z.boolean().optional(),
    step_action_id: z.boolean().optional(),
    trigger_order: z.boolean().optional(),
    trigger_type: z.boolean().optional(),
    trigger_config: z.boolean().optional(),
    condition_rules: z.boolean().optional(),
    is_enabled: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    step_actions: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.step_triggersSelect>;

export const step_triggersFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    step_action_id: z.boolean().optional(),
    trigger_order: z.boolean().optional(),
    trigger_type: z.boolean().optional(),
    trigger_config: z.boolean().optional(),
    condition_rules: z.boolean().optional(),
    is_enabled: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    step_actions: z.boolean().optional()
  }).strict();

export const step_triggersFindFirstOrThrowSchema: z.ZodType<Prisma.step_triggersFindFirstOrThrowArgs> = z.object({ select: step_triggersFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => step_triggersIncludeObjectSchema.optional()), orderBy: z.union([step_triggersOrderByWithRelationInputObjectSchema, step_triggersOrderByWithRelationInputObjectSchema.array()]).optional(), where: step_triggersWhereInputObjectSchema.optional(), cursor: step_triggersWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([StepTriggersScalarFieldEnumSchema, StepTriggersScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.step_triggersFindFirstOrThrowArgs>;

export const step_triggersFindFirstOrThrowZodSchema = z.object({ select: step_triggersFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => step_triggersIncludeObjectSchema.optional()), orderBy: z.union([step_triggersOrderByWithRelationInputObjectSchema, step_triggersOrderByWithRelationInputObjectSchema.array()]).optional(), where: step_triggersWhereInputObjectSchema.optional(), cursor: step_triggersWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([StepTriggersScalarFieldEnumSchema, StepTriggersScalarFieldEnumSchema.array()]).optional() }).strict();