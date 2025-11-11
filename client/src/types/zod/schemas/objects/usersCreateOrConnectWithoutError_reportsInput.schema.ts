import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersWhereUniqueInputObjectSchema as usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema';
import { usersCreateWithoutError_reportsInputObjectSchema as usersCreateWithoutError_reportsInputObjectSchema } from './usersCreateWithoutError_reportsInput.schema';
import { usersUncheckedCreateWithoutError_reportsInputObjectSchema as usersUncheckedCreateWithoutError_reportsInputObjectSchema } from './usersUncheckedCreateWithoutError_reportsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => usersWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => usersCreateWithoutError_reportsInputObjectSchema), z.lazy(() => usersUncheckedCreateWithoutError_reportsInputObjectSchema)])
}).strict();
export const usersCreateOrConnectWithoutError_reportsInputObjectSchema: z.ZodType<Prisma.usersCreateOrConnectWithoutError_reportsInput> = makeSchema() as unknown as z.ZodType<Prisma.usersCreateOrConnectWithoutError_reportsInput>;
export const usersCreateOrConnectWithoutError_reportsInputObjectZodSchema = makeSchema();
