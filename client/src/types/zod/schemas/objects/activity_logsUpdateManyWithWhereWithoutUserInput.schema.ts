import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { activity_logsScalarWhereInputObjectSchema as activity_logsScalarWhereInputObjectSchema } from './activity_logsScalarWhereInput.schema';
import { activity_logsUpdateManyMutationInputObjectSchema as activity_logsUpdateManyMutationInputObjectSchema } from './activity_logsUpdateManyMutationInput.schema';
import { activity_logsUncheckedUpdateManyWithoutUserInputObjectSchema as activity_logsUncheckedUpdateManyWithoutUserInputObjectSchema } from './activity_logsUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => activity_logsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => activity_logsUpdateManyMutationInputObjectSchema), z.lazy(() => activity_logsUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const activity_logsUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.activity_logsUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.activity_logsUpdateManyWithWhereWithoutUserInput>;
export const activity_logsUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
