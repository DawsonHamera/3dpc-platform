import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instance_stepsWhereUniqueInputObjectSchema as process_instance_stepsWhereUniqueInputObjectSchema } from './process_instance_stepsWhereUniqueInput.schema';
import { process_instance_stepsUpdateWithoutUsersInputObjectSchema as process_instance_stepsUpdateWithoutUsersInputObjectSchema } from './process_instance_stepsUpdateWithoutUsersInput.schema';
import { process_instance_stepsUncheckedUpdateWithoutUsersInputObjectSchema as process_instance_stepsUncheckedUpdateWithoutUsersInputObjectSchema } from './process_instance_stepsUncheckedUpdateWithoutUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => process_instance_stepsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => process_instance_stepsUpdateWithoutUsersInputObjectSchema), z.lazy(() => process_instance_stepsUncheckedUpdateWithoutUsersInputObjectSchema)])
}).strict();
export const process_instance_stepsUpdateWithWhereUniqueWithoutUsersInputObjectSchema: z.ZodType<Prisma.process_instance_stepsUpdateWithWhereUniqueWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.process_instance_stepsUpdateWithWhereUniqueWithoutUsersInput>;
export const process_instance_stepsUpdateWithWhereUniqueWithoutUsersInputObjectZodSchema = makeSchema();
