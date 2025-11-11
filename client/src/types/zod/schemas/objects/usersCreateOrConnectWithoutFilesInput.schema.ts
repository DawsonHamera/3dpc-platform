import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersWhereUniqueInputObjectSchema as usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema';
import { usersCreateWithoutFilesInputObjectSchema as usersCreateWithoutFilesInputObjectSchema } from './usersCreateWithoutFilesInput.schema';
import { usersUncheckedCreateWithoutFilesInputObjectSchema as usersUncheckedCreateWithoutFilesInputObjectSchema } from './usersUncheckedCreateWithoutFilesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => usersWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => usersCreateWithoutFilesInputObjectSchema), z.lazy(() => usersUncheckedCreateWithoutFilesInputObjectSchema)])
}).strict();
export const usersCreateOrConnectWithoutFilesInputObjectSchema: z.ZodType<Prisma.usersCreateOrConnectWithoutFilesInput> = makeSchema() as unknown as z.ZodType<Prisma.usersCreateOrConnectWithoutFilesInput>;
export const usersCreateOrConnectWithoutFilesInputObjectZodSchema = makeSchema();
