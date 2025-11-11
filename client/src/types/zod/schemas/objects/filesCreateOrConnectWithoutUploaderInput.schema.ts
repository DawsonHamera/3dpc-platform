import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { filesWhereUniqueInputObjectSchema as filesWhereUniqueInputObjectSchema } from './filesWhereUniqueInput.schema';
import { filesCreateWithoutUploaderInputObjectSchema as filesCreateWithoutUploaderInputObjectSchema } from './filesCreateWithoutUploaderInput.schema';
import { filesUncheckedCreateWithoutUploaderInputObjectSchema as filesUncheckedCreateWithoutUploaderInputObjectSchema } from './filesUncheckedCreateWithoutUploaderInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => filesWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => filesCreateWithoutUploaderInputObjectSchema), z.lazy(() => filesUncheckedCreateWithoutUploaderInputObjectSchema)])
}).strict();
export const filesCreateOrConnectWithoutUploaderInputObjectSchema: z.ZodType<Prisma.filesCreateOrConnectWithoutUploaderInput> = makeSchema() as unknown as z.ZodType<Prisma.filesCreateOrConnectWithoutUploaderInput>;
export const filesCreateOrConnectWithoutUploaderInputObjectZodSchema = makeSchema();
