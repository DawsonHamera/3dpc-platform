import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { filesWhereUniqueInputObjectSchema as filesWhereUniqueInputObjectSchema } from './filesWhereUniqueInput.schema';
import { filesUpdateWithoutUploaderInputObjectSchema as filesUpdateWithoutUploaderInputObjectSchema } from './filesUpdateWithoutUploaderInput.schema';
import { filesUncheckedUpdateWithoutUploaderInputObjectSchema as filesUncheckedUpdateWithoutUploaderInputObjectSchema } from './filesUncheckedUpdateWithoutUploaderInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => filesWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => filesUpdateWithoutUploaderInputObjectSchema), z.lazy(() => filesUncheckedUpdateWithoutUploaderInputObjectSchema)])
}).strict();
export const filesUpdateWithWhereUniqueWithoutUploaderInputObjectSchema: z.ZodType<Prisma.filesUpdateWithWhereUniqueWithoutUploaderInput> = makeSchema() as unknown as z.ZodType<Prisma.filesUpdateWithWhereUniqueWithoutUploaderInput>;
export const filesUpdateWithWhereUniqueWithoutUploaderInputObjectZodSchema = makeSchema();
