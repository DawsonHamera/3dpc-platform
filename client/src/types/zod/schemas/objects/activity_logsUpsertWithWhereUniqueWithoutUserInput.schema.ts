import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { activity_logsWhereUniqueInputObjectSchema as activity_logsWhereUniqueInputObjectSchema } from './activity_logsWhereUniqueInput.schema';
import { activity_logsUpdateWithoutUserInputObjectSchema as activity_logsUpdateWithoutUserInputObjectSchema } from './activity_logsUpdateWithoutUserInput.schema';
import { activity_logsUncheckedUpdateWithoutUserInputObjectSchema as activity_logsUncheckedUpdateWithoutUserInputObjectSchema } from './activity_logsUncheckedUpdateWithoutUserInput.schema';
import { activity_logsCreateWithoutUserInputObjectSchema as activity_logsCreateWithoutUserInputObjectSchema } from './activity_logsCreateWithoutUserInput.schema';
import { activity_logsUncheckedCreateWithoutUserInputObjectSchema as activity_logsUncheckedCreateWithoutUserInputObjectSchema } from './activity_logsUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => activity_logsWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => activity_logsUpdateWithoutUserInputObjectSchema), z.lazy(() => activity_logsUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => activity_logsCreateWithoutUserInputObjectSchema), z.lazy(() => activity_logsUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const activity_logsUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.activity_logsUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.activity_logsUpsertWithWhereUniqueWithoutUserInput>;
export const activity_logsUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
