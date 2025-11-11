import { createCrudApi } from '../baseApi'
import { Material, CreateMaterialData } from '../../types'

export const materialsApi = createCrudApi<Material, CreateMaterialData>({
    reducerPath: 'materials',
    tagType: 'Material',
    endpoint: 'materials'
})

export const { 
    useGetAllQuery: useGetMaterialsQuery, 
    useGetOneQuery: useGetMaterialQuery, 
    useCreateMutation: useAddMaterialMutation,
    useUpdateMutation: useUpdateMaterialMutation,
    useDeleteMutation: useRemoveMaterialMutation 
} = materialsApi

export type { Material, CreateMaterialData } from '../../types'
