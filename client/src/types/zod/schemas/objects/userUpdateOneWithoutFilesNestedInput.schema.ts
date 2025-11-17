import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { userCreateWithoutFilesInputObjectSchema as userCreateWithoutFilesInputObjectSchema } from './userCreateWithoutFilesInput.schema';
import { userUncheckedCreateWithoutFilesInputObjectSchema as userUncheckedCreateWithoutFilesInputObjectSchema } from './userUncheckedCreateWithoutFilesInput.schema';
import { userCreateOrConnectWithoutFilesInputObjectSchema as userCreateOrConnectWithoutFilesInputObjectSchema } from './userCreateOrConnectWithoutFilesInput.schema';
import { userUpsertWithoutFilesInputObjectSchema as userUpsertWithoutFilesInputObjectSchema } from './userUpsertWithoutFilesInput.schema';
import { userWhereInputObjectSchema as userWhereInputObjectSchema } from './userWhereInput.schema';
import { userWhereUniqueInputObjectSchema as userWhereUniqueInputObjectSchema } from './userWhereUniqueInput.schema';
import { userUpdateToOneWithWhereWithoutFilesInputObjectSchema as userUpdateToOneWithWhereWithoutFilesInputObjectSchema } from './userUpdateToOneWithWhereWithoutFilesInput.schema';
import { userUpdateWithoutFilesInputObjectSchema as userUpdateWithoutFilesInputObjectSchema } from './userUpdateWithoutFilesInput.schema';
import { userUncheckedUpdateWithoutFilesInputObjectSchema as userUncheckedUpdateWithoutFilesInputObjectSchema } from './userUncheckedUpdateWithoutFilesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => userCreateWithoutFilesInputObjectSchema), z.lazy(() => userUncheckedCreateWithoutFilesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => userCreateOrConnectWithoutFilesInputObjectSchema).optional(),
  upsert: z.lazy(() => userUpsertWithoutFilesInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => userWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => userWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => userWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => userUpdateToOneWithWhereWithoutFilesInputObjectSchema), z.lazy(() => userUpdateWithoutFilesInputObjectSchema), z.lazy(() => userUncheckedUpdateWithoutFilesInputObjectSchema)]).optional()
}).strict();
export const userUpdateOneWithoutFilesNestedInputObjectSchema: z.ZodType<Prisma.userUpdateOneWithoutFilesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.userUpdateOneWithoutFilesNestedInput>;
export const userUpdateOneWithoutFilesNestedInputObjectZodSchema = makeSchema();
