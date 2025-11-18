import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { point_logScalarWhereInputObjectSchema as point_logScalarWhereInputObjectSchema } from './point_logScalarWhereInput.schema';
import { point_logUpdateManyMutationInputObjectSchema as point_logUpdateManyMutationInputObjectSchema } from './point_logUpdateManyMutationInput.schema';
import { point_logUncheckedUpdateManyWithoutUserInputObjectSchema as point_logUncheckedUpdateManyWithoutUserInputObjectSchema } from './point_logUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => point_logScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => point_logUpdateManyMutationInputObjectSchema), z.lazy(() => point_logUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const point_logUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.point_logUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.point_logUpdateManyWithWhereWithoutUserInput>;
export const point_logUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
