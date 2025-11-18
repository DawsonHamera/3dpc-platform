import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { recycling_logWhereUniqueInputObjectSchema as recycling_logWhereUniqueInputObjectSchema } from './recycling_logWhereUniqueInput.schema';
import { recycling_logUpdateWithoutCreated_byInputObjectSchema as recycling_logUpdateWithoutCreated_byInputObjectSchema } from './recycling_logUpdateWithoutCreated_byInput.schema';
import { recycling_logUncheckedUpdateWithoutCreated_byInputObjectSchema as recycling_logUncheckedUpdateWithoutCreated_byInputObjectSchema } from './recycling_logUncheckedUpdateWithoutCreated_byInput.schema';
import { recycling_logCreateWithoutCreated_byInputObjectSchema as recycling_logCreateWithoutCreated_byInputObjectSchema } from './recycling_logCreateWithoutCreated_byInput.schema';
import { recycling_logUncheckedCreateWithoutCreated_byInputObjectSchema as recycling_logUncheckedCreateWithoutCreated_byInputObjectSchema } from './recycling_logUncheckedCreateWithoutCreated_byInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => recycling_logWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => recycling_logUpdateWithoutCreated_byInputObjectSchema), z.lazy(() => recycling_logUncheckedUpdateWithoutCreated_byInputObjectSchema)]),
  create: z.union([z.lazy(() => recycling_logCreateWithoutCreated_byInputObjectSchema), z.lazy(() => recycling_logUncheckedCreateWithoutCreated_byInputObjectSchema)])
}).strict();
export const recycling_logUpsertWithWhereUniqueWithoutCreated_byInputObjectSchema: z.ZodType<Prisma.recycling_logUpsertWithWhereUniqueWithoutCreated_byInput> = makeSchema() as unknown as z.ZodType<Prisma.recycling_logUpsertWithWhereUniqueWithoutCreated_byInput>;
export const recycling_logUpsertWithWhereUniqueWithoutCreated_byInputObjectZodSchema = makeSchema();
