import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { printersScalarWhereInputObjectSchema as printersScalarWhereInputObjectSchema } from './printersScalarWhereInput.schema';
import { printersUpdateManyMutationInputObjectSchema as printersUpdateManyMutationInputObjectSchema } from './printersUpdateManyMutationInput.schema';
import { printersUncheckedUpdateManyWithoutFilesInputObjectSchema as printersUncheckedUpdateManyWithoutFilesInputObjectSchema } from './printersUncheckedUpdateManyWithoutFilesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => printersScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => printersUpdateManyMutationInputObjectSchema), z.lazy(() => printersUncheckedUpdateManyWithoutFilesInputObjectSchema)])
}).strict();
export const printersUpdateManyWithWhereWithoutFilesInputObjectSchema: z.ZodType<Prisma.printersUpdateManyWithWhereWithoutFilesInput> = makeSchema() as unknown as z.ZodType<Prisma.printersUpdateManyWithWhereWithoutFilesInput>;
export const printersUpdateManyWithWhereWithoutFilesInputObjectZodSchema = makeSchema();
