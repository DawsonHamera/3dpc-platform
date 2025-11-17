import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { activity_logWhereUniqueInputObjectSchema as activity_logWhereUniqueInputObjectSchema } from './activity_logWhereUniqueInput.schema';
import { activity_logUpdateWithoutUserInputObjectSchema as activity_logUpdateWithoutUserInputObjectSchema } from './activity_logUpdateWithoutUserInput.schema';
import { activity_logUncheckedUpdateWithoutUserInputObjectSchema as activity_logUncheckedUpdateWithoutUserInputObjectSchema } from './activity_logUncheckedUpdateWithoutUserInput.schema';
import { activity_logCreateWithoutUserInputObjectSchema as activity_logCreateWithoutUserInputObjectSchema } from './activity_logCreateWithoutUserInput.schema';
import { activity_logUncheckedCreateWithoutUserInputObjectSchema as activity_logUncheckedCreateWithoutUserInputObjectSchema } from './activity_logUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => activity_logWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => activity_logUpdateWithoutUserInputObjectSchema), z.lazy(() => activity_logUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => activity_logCreateWithoutUserInputObjectSchema), z.lazy(() => activity_logUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const activity_logUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.activity_logUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.activity_logUpsertWithWhereUniqueWithoutUserInput>;
export const activity_logUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
