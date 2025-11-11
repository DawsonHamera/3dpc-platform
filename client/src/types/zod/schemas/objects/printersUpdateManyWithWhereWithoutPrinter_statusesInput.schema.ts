import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { printersScalarWhereInputObjectSchema as printersScalarWhereInputObjectSchema } from './printersScalarWhereInput.schema';
import { printersUpdateManyMutationInputObjectSchema as printersUpdateManyMutationInputObjectSchema } from './printersUpdateManyMutationInput.schema';
import { printersUncheckedUpdateManyWithoutPrinter_statusesInputObjectSchema as printersUncheckedUpdateManyWithoutPrinter_statusesInputObjectSchema } from './printersUncheckedUpdateManyWithoutPrinter_statusesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => printersScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => printersUpdateManyMutationInputObjectSchema), z.lazy(() => printersUncheckedUpdateManyWithoutPrinter_statusesInputObjectSchema)])
}).strict();
export const printersUpdateManyWithWhereWithoutPrinter_statusesInputObjectSchema: z.ZodType<Prisma.printersUpdateManyWithWhereWithoutPrinter_statusesInput> = makeSchema() as unknown as z.ZodType<Prisma.printersUpdateManyWithWhereWithoutPrinter_statusesInput>;
export const printersUpdateManyWithWhereWithoutPrinter_statusesInputObjectZodSchema = makeSchema();
