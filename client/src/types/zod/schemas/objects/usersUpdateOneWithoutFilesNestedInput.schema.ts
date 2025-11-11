import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersCreateWithoutFilesInputObjectSchema as usersCreateWithoutFilesInputObjectSchema } from './usersCreateWithoutFilesInput.schema';
import { usersUncheckedCreateWithoutFilesInputObjectSchema as usersUncheckedCreateWithoutFilesInputObjectSchema } from './usersUncheckedCreateWithoutFilesInput.schema';
import { usersCreateOrConnectWithoutFilesInputObjectSchema as usersCreateOrConnectWithoutFilesInputObjectSchema } from './usersCreateOrConnectWithoutFilesInput.schema';
import { usersUpsertWithoutFilesInputObjectSchema as usersUpsertWithoutFilesInputObjectSchema } from './usersUpsertWithoutFilesInput.schema';
import { usersWhereInputObjectSchema as usersWhereInputObjectSchema } from './usersWhereInput.schema';
import { usersWhereUniqueInputObjectSchema as usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema';
import { usersUpdateToOneWithWhereWithoutFilesInputObjectSchema as usersUpdateToOneWithWhereWithoutFilesInputObjectSchema } from './usersUpdateToOneWithWhereWithoutFilesInput.schema';
import { usersUpdateWithoutFilesInputObjectSchema as usersUpdateWithoutFilesInputObjectSchema } from './usersUpdateWithoutFilesInput.schema';
import { usersUncheckedUpdateWithoutFilesInputObjectSchema as usersUncheckedUpdateWithoutFilesInputObjectSchema } from './usersUncheckedUpdateWithoutFilesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => usersCreateWithoutFilesInputObjectSchema), z.lazy(() => usersUncheckedCreateWithoutFilesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutFilesInputObjectSchema).optional(),
  upsert: z.lazy(() => usersUpsertWithoutFilesInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => usersWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => usersWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => usersWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => usersUpdateToOneWithWhereWithoutFilesInputObjectSchema), z.lazy(() => usersUpdateWithoutFilesInputObjectSchema), z.lazy(() => usersUncheckedUpdateWithoutFilesInputObjectSchema)]).optional()
}).strict();
export const usersUpdateOneWithoutFilesNestedInputObjectSchema: z.ZodType<Prisma.usersUpdateOneWithoutFilesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.usersUpdateOneWithoutFilesNestedInput>;
export const usersUpdateOneWithoutFilesNestedInputObjectZodSchema = makeSchema();
