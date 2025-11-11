import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instancesWhereUniqueInputObjectSchema as process_instancesWhereUniqueInputObjectSchema } from './process_instancesWhereUniqueInput.schema';
import { process_instancesUpdateWithoutUsersInputObjectSchema as process_instancesUpdateWithoutUsersInputObjectSchema } from './process_instancesUpdateWithoutUsersInput.schema';
import { process_instancesUncheckedUpdateWithoutUsersInputObjectSchema as process_instancesUncheckedUpdateWithoutUsersInputObjectSchema } from './process_instancesUncheckedUpdateWithoutUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => process_instancesWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => process_instancesUpdateWithoutUsersInputObjectSchema), z.lazy(() => process_instancesUncheckedUpdateWithoutUsersInputObjectSchema)])
}).strict();
export const process_instancesUpdateWithWhereUniqueWithoutUsersInputObjectSchema: z.ZodType<Prisma.process_instancesUpdateWithWhereUniqueWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.process_instancesUpdateWithWhereUniqueWithoutUsersInput>;
export const process_instancesUpdateWithWhereUniqueWithoutUsersInputObjectZodSchema = makeSchema();
