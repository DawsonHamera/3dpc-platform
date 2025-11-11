import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { step_actionsIncludeObjectSchema as step_actionsIncludeObjectSchema } from './objects/step_actionsInclude.schema';
import { step_actionsOrderByWithRelationInputObjectSchema as step_actionsOrderByWithRelationInputObjectSchema } from './objects/step_actionsOrderByWithRelationInput.schema';
import { step_actionsWhereInputObjectSchema as step_actionsWhereInputObjectSchema } from './objects/step_actionsWhereInput.schema';
import { step_actionsWhereUniqueInputObjectSchema as step_actionsWhereUniqueInputObjectSchema } from './objects/step_actionsWhereUniqueInput.schema';
import { StepActionsScalarFieldEnumSchema } from './enums/StepActionsScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const step_actionsFindFirstSelectSchema: z.ZodType<Prisma.step_actionsSelect> = z.object({
    id: z.boolean().optional(),
    step_id: z.boolean().optional(),
    action_order: z.boolean().optional(),
    label: z.boolean().optional(),
    action_type: z.boolean().optional(),
    action_config: z.boolean().optional(),
    button_style: z.boolean().optional(),
    icon: z.boolean().optional(),
    is_enabled: z.boolean().optional(),
    confirmation_message: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    steps: z.boolean().optional(),
    step_triggers: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.step_actionsSelect>;

export const step_actionsFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    step_id: z.boolean().optional(),
    action_order: z.boolean().optional(),
    label: z.boolean().optional(),
    action_type: z.boolean().optional(),
    action_config: z.boolean().optional(),
    button_style: z.boolean().optional(),
    icon: z.boolean().optional(),
    is_enabled: z.boolean().optional(),
    confirmation_message: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    steps: z.boolean().optional(),
    step_triggers: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const step_actionsFindFirstSchema: z.ZodType<Prisma.step_actionsFindFirstArgs> = z.object({ select: step_actionsFindFirstSelectSchema.optional(), include: z.lazy(() => step_actionsIncludeObjectSchema.optional()), orderBy: z.union([step_actionsOrderByWithRelationInputObjectSchema, step_actionsOrderByWithRelationInputObjectSchema.array()]).optional(), where: step_actionsWhereInputObjectSchema.optional(), cursor: step_actionsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([StepActionsScalarFieldEnumSchema, StepActionsScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.step_actionsFindFirstArgs>;

export const step_actionsFindFirstZodSchema = z.object({ select: step_actionsFindFirstSelectSchema.optional(), include: z.lazy(() => step_actionsIncludeObjectSchema.optional()), orderBy: z.union([step_actionsOrderByWithRelationInputObjectSchema, step_actionsOrderByWithRelationInputObjectSchema.array()]).optional(), where: step_actionsWhereInputObjectSchema.optional(), cursor: step_actionsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([StepActionsScalarFieldEnumSchema, StepActionsScalarFieldEnumSchema.array()]).optional() }).strict();