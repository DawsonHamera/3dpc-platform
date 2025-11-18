import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { recycling_logScalarWhereInputObjectSchema as recycling_logScalarWhereInputObjectSchema } from './recycling_logScalarWhereInput.schema';
import { recycling_logUpdateManyMutationInputObjectSchema as recycling_logUpdateManyMutationInputObjectSchema } from './recycling_logUpdateManyMutationInput.schema';
import { recycling_logUncheckedUpdateManyWithoutCreated_byInputObjectSchema as recycling_logUncheckedUpdateManyWithoutCreated_byInputObjectSchema } from './recycling_logUncheckedUpdateManyWithoutCreated_byInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => recycling_logScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => recycling_logUpdateManyMutationInputObjectSchema), z.lazy(() => recycling_logUncheckedUpdateManyWithoutCreated_byInputObjectSchema)])
}).strict();
export const recycling_logUpdateManyWithWhereWithoutCreated_byInputObjectSchema: z.ZodType<Prisma.recycling_logUpdateManyWithWhereWithoutCreated_byInput> = makeSchema() as unknown as z.ZodType<Prisma.recycling_logUpdateManyWithWhereWithoutCreated_byInput>;
export const recycling_logUpdateManyWithWhereWithoutCreated_byInputObjectZodSchema = makeSchema();
