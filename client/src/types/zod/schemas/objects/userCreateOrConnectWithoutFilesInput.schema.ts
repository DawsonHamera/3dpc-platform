import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { userWhereUniqueInputObjectSchema as userWhereUniqueInputObjectSchema } from './userWhereUniqueInput.schema';
import { userCreateWithoutFilesInputObjectSchema as userCreateWithoutFilesInputObjectSchema } from './userCreateWithoutFilesInput.schema';
import { userUncheckedCreateWithoutFilesInputObjectSchema as userUncheckedCreateWithoutFilesInputObjectSchema } from './userUncheckedCreateWithoutFilesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => userWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => userCreateWithoutFilesInputObjectSchema), z.lazy(() => userUncheckedCreateWithoutFilesInputObjectSchema)])
}).strict();
export const userCreateOrConnectWithoutFilesInputObjectSchema: z.ZodType<Prisma.userCreateOrConnectWithoutFilesInput> = makeSchema() as unknown as z.ZodType<Prisma.userCreateOrConnectWithoutFilesInput>;
export const userCreateOrConnectWithoutFilesInputObjectZodSchema = makeSchema();
