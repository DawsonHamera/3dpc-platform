import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { point_logWhereUniqueInputObjectSchema as point_logWhereUniqueInputObjectSchema } from './point_logWhereUniqueInput.schema';
import { point_logCreateWithoutUserInputObjectSchema as point_logCreateWithoutUserInputObjectSchema } from './point_logCreateWithoutUserInput.schema';
import { point_logUncheckedCreateWithoutUserInputObjectSchema as point_logUncheckedCreateWithoutUserInputObjectSchema } from './point_logUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => point_logWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => point_logCreateWithoutUserInputObjectSchema), z.lazy(() => point_logUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const point_logCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.point_logCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.point_logCreateOrConnectWithoutUserInput>;
export const point_logCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
