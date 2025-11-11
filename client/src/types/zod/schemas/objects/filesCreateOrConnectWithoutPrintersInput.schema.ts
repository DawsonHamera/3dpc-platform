import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { filesWhereUniqueInputObjectSchema as filesWhereUniqueInputObjectSchema } from './filesWhereUniqueInput.schema';
import { filesCreateWithoutPrintersInputObjectSchema as filesCreateWithoutPrintersInputObjectSchema } from './filesCreateWithoutPrintersInput.schema';
import { filesUncheckedCreateWithoutPrintersInputObjectSchema as filesUncheckedCreateWithoutPrintersInputObjectSchema } from './filesUncheckedCreateWithoutPrintersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => filesWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => filesCreateWithoutPrintersInputObjectSchema), z.lazy(() => filesUncheckedCreateWithoutPrintersInputObjectSchema)])
}).strict();
export const filesCreateOrConnectWithoutPrintersInputObjectSchema: z.ZodType<Prisma.filesCreateOrConnectWithoutPrintersInput> = makeSchema() as unknown as z.ZodType<Prisma.filesCreateOrConnectWithoutPrintersInput>;
export const filesCreateOrConnectWithoutPrintersInputObjectZodSchema = makeSchema();
