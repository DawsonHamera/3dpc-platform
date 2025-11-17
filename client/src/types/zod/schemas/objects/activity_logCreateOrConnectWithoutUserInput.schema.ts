import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { activity_logWhereUniqueInputObjectSchema as activity_logWhereUniqueInputObjectSchema } from './activity_logWhereUniqueInput.schema';
import { activity_logCreateWithoutUserInputObjectSchema as activity_logCreateWithoutUserInputObjectSchema } from './activity_logCreateWithoutUserInput.schema';
import { activity_logUncheckedCreateWithoutUserInputObjectSchema as activity_logUncheckedCreateWithoutUserInputObjectSchema } from './activity_logUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => activity_logWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => activity_logCreateWithoutUserInputObjectSchema), z.lazy(() => activity_logUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const activity_logCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.activity_logCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.activity_logCreateOrConnectWithoutUserInput>;
export const activity_logCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
