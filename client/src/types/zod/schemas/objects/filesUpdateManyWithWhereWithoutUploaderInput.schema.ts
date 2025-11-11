import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { filesScalarWhereInputObjectSchema as filesScalarWhereInputObjectSchema } from './filesScalarWhereInput.schema';
import { filesUpdateManyMutationInputObjectSchema as filesUpdateManyMutationInputObjectSchema } from './filesUpdateManyMutationInput.schema';
import { filesUncheckedUpdateManyWithoutUploaderInputObjectSchema as filesUncheckedUpdateManyWithoutUploaderInputObjectSchema } from './filesUncheckedUpdateManyWithoutUploaderInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => filesScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => filesUpdateManyMutationInputObjectSchema), z.lazy(() => filesUncheckedUpdateManyWithoutUploaderInputObjectSchema)])
}).strict();
export const filesUpdateManyWithWhereWithoutUploaderInputObjectSchema: z.ZodType<Prisma.filesUpdateManyWithWhereWithoutUploaderInput> = makeSchema() as unknown as z.ZodType<Prisma.filesUpdateManyWithWhereWithoutUploaderInput>;
export const filesUpdateManyWithWhereWithoutUploaderInputObjectZodSchema = makeSchema();
