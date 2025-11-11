import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instancesWhereUniqueInputObjectSchema as process_instancesWhereUniqueInputObjectSchema } from './process_instancesWhereUniqueInput.schema';
import { process_instancesUpdateWithoutUsersInputObjectSchema as process_instancesUpdateWithoutUsersInputObjectSchema } from './process_instancesUpdateWithoutUsersInput.schema';
import { process_instancesUncheckedUpdateWithoutUsersInputObjectSchema as process_instancesUncheckedUpdateWithoutUsersInputObjectSchema } from './process_instancesUncheckedUpdateWithoutUsersInput.schema';
import { process_instancesCreateWithoutUsersInputObjectSchema as process_instancesCreateWithoutUsersInputObjectSchema } from './process_instancesCreateWithoutUsersInput.schema';
import { process_instancesUncheckedCreateWithoutUsersInputObjectSchema as process_instancesUncheckedCreateWithoutUsersInputObjectSchema } from './process_instancesUncheckedCreateWithoutUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => process_instancesWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => process_instancesUpdateWithoutUsersInputObjectSchema), z.lazy(() => process_instancesUncheckedUpdateWithoutUsersInputObjectSchema)]),
  create: z.union([z.lazy(() => process_instancesCreateWithoutUsersInputObjectSchema), z.lazy(() => process_instancesUncheckedCreateWithoutUsersInputObjectSchema)])
}).strict();
export const process_instancesUpsertWithWhereUniqueWithoutUsersInputObjectSchema: z.ZodType<Prisma.process_instancesUpsertWithWhereUniqueWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.process_instancesUpsertWithWhereUniqueWithoutUsersInput>;
export const process_instancesUpsertWithWhereUniqueWithoutUsersInputObjectZodSchema = makeSchema();
