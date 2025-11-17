import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { fileScalarWhereInputObjectSchema as fileScalarWhereInputObjectSchema } from './fileScalarWhereInput.schema';
import { fileUpdateManyMutationInputObjectSchema as fileUpdateManyMutationInputObjectSchema } from './fileUpdateManyMutationInput.schema';
import { fileUncheckedUpdateManyWithoutUploaderInputObjectSchema as fileUncheckedUpdateManyWithoutUploaderInputObjectSchema } from './fileUncheckedUpdateManyWithoutUploaderInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => fileScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => fileUpdateManyMutationInputObjectSchema), z.lazy(() => fileUncheckedUpdateManyWithoutUploaderInputObjectSchema)])
}).strict();
export const fileUpdateManyWithWhereWithoutUploaderInputObjectSchema: z.ZodType<Prisma.fileUpdateManyWithWhereWithoutUploaderInput> = makeSchema() as unknown as z.ZodType<Prisma.fileUpdateManyWithWhereWithoutUploaderInput>;
export const fileUpdateManyWithWhereWithoutUploaderInputObjectZodSchema = makeSchema();
