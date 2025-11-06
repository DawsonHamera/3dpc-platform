import { createCrudApi } from '../baseApi'
import { Model, CreateModelData } from '../../types'

export const modelsApi = createCrudApi<Model, CreateModelData>({
    reducerPath: 'models',
    tagType: 'Model',
    endpoint: 'models'
})

export const {
    useGetAllQuery: useGetModelsQuery, 
    useGetOneQuery: useGetModelQuery, 
    useCreateMutation: useAddModelMutation,
    useUpdateMutation: useUpdateModelMutation,
    useDeleteMutation: useRemoveModelMutation
} = modelsApi

export type { Model, CreateModelData, MaterialSlot } from '../../types'
