import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { activity_logScalarWhereInputObjectSchema as activity_logScalarWhereInputObjectSchema } from './activity_logScalarWhereInput.schema';
import { activity_logUpdateManyMutationInputObjectSchema as activity_logUpdateManyMutationInputObjectSchema } from './activity_logUpdateManyMutationInput.schema';
import { activity_logUncheckedUpdateManyWithoutUserInputObjectSchema as activity_logUncheckedUpdateManyWithoutUserInputObjectSchema } from './activity_logUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => activity_logScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => activity_logUpdateManyMutationInputObjectSchema), z.lazy(() => activity_logUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const activity_logUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.activity_logUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.activity_logUpdateManyWithWhereWithoutUserInput>;
export const activity_logUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
