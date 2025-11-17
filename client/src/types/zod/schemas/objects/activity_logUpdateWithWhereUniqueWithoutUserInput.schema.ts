import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { activity_logWhereUniqueInputObjectSchema as activity_logWhereUniqueInputObjectSchema } from './activity_logWhereUniqueInput.schema';
import { activity_logUpdateWithoutUserInputObjectSchema as activity_logUpdateWithoutUserInputObjectSchema } from './activity_logUpdateWithoutUserInput.schema';
import { activity_logUncheckedUpdateWithoutUserInputObjectSchema as activity_logUncheckedUpdateWithoutUserInputObjectSchema } from './activity_logUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => activity_logWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => activity_logUpdateWithoutUserInputObjectSchema), z.lazy(() => activity_logUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const activity_logUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.activity_logUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.activity_logUpdateWithWhereUniqueWithoutUserInput>;
export const activity_logUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
