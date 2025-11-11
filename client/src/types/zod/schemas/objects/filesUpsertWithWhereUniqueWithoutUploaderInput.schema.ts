import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { filesWhereUniqueInputObjectSchema as filesWhereUniqueInputObjectSchema } from './filesWhereUniqueInput.schema';
import { filesUpdateWithoutUploaderInputObjectSchema as filesUpdateWithoutUploaderInputObjectSchema } from './filesUpdateWithoutUploaderInput.schema';
import { filesUncheckedUpdateWithoutUploaderInputObjectSchema as filesUncheckedUpdateWithoutUploaderInputObjectSchema } from './filesUncheckedUpdateWithoutUploaderInput.schema';
import { filesCreateWithoutUploaderInputObjectSchema as filesCreateWithoutUploaderInputObjectSchema } from './filesCreateWithoutUploaderInput.schema';
import { filesUncheckedCreateWithoutUploaderInputObjectSchema as filesUncheckedCreateWithoutUploaderInputObjectSchema } from './filesUncheckedCreateWithoutUploaderInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => filesWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => filesUpdateWithoutUploaderInputObjectSchema), z.lazy(() => filesUncheckedUpdateWithoutUploaderInputObjectSchema)]),
  create: z.union([z.lazy(() => filesCreateWithoutUploaderInputObjectSchema), z.lazy(() => filesUncheckedCreateWithoutUploaderInputObjectSchema)])
}).strict();
export const filesUpsertWithWhereUniqueWithoutUploaderInputObjectSchema: z.ZodType<Prisma.filesUpsertWithWhereUniqueWithoutUploaderInput> = makeSchema() as unknown as z.ZodType<Prisma.filesUpsertWithWhereUniqueWithoutUploaderInput>;
export const filesUpsertWithWhereUniqueWithoutUploaderInputObjectZodSchema = makeSchema();
