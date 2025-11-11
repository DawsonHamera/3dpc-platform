import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { activity_logsWhereUniqueInputObjectSchema as activity_logsWhereUniqueInputObjectSchema } from './activity_logsWhereUniqueInput.schema';
import { activity_logsUpdateWithoutUserInputObjectSchema as activity_logsUpdateWithoutUserInputObjectSchema } from './activity_logsUpdateWithoutUserInput.schema';
import { activity_logsUncheckedUpdateWithoutUserInputObjectSchema as activity_logsUncheckedUpdateWithoutUserInputObjectSchema } from './activity_logsUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => activity_logsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => activity_logsUpdateWithoutUserInputObjectSchema), z.lazy(() => activity_logsUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const activity_logsUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.activity_logsUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.activity_logsUpdateWithWhereUniqueWithoutUserInput>;
export const activity_logsUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
