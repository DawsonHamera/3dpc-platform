import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { printersScalarWhereInputObjectSchema as printersScalarWhereInputObjectSchema } from './printersScalarWhereInput.schema';
import { printersUpdateManyMutationInputObjectSchema as printersUpdateManyMutationInputObjectSchema } from './printersUpdateManyMutationInput.schema';
import { printersUncheckedUpdateManyWithoutProcess_templatesInputObjectSchema as printersUncheckedUpdateManyWithoutProcess_templatesInputObjectSchema } from './printersUncheckedUpdateManyWithoutProcess_templatesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => printersScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => printersUpdateManyMutationInputObjectSchema), z.lazy(() => printersUncheckedUpdateManyWithoutProcess_templatesInputObjectSchema)])
}).strict();
export const printersUpdateManyWithWhereWithoutProcess_templatesInputObjectSchema: z.ZodType<Prisma.printersUpdateManyWithWhereWithoutProcess_templatesInput> = makeSchema() as unknown as z.ZodType<Prisma.printersUpdateManyWithWhereWithoutProcess_templatesInput>;
export const printersUpdateManyWithWhereWithoutProcess_templatesInputObjectZodSchema = makeSchema();
