import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { activity_logsWhereUniqueInputObjectSchema as activity_logsWhereUniqueInputObjectSchema } from './activity_logsWhereUniqueInput.schema';
import { activity_logsCreateWithoutUserInputObjectSchema as activity_logsCreateWithoutUserInputObjectSchema } from './activity_logsCreateWithoutUserInput.schema';
import { activity_logsUncheckedCreateWithoutUserInputObjectSchema as activity_logsUncheckedCreateWithoutUserInputObjectSchema } from './activity_logsUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => activity_logsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => activity_logsCreateWithoutUserInputObjectSchema), z.lazy(() => activity_logsUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const activity_logsCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.activity_logsCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.activity_logsCreateOrConnectWithoutUserInput>;
export const activity_logsCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
