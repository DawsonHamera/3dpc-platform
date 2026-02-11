import {
    Section,
    useCreateSectionMutation,
    useDeleteSectionMutation,
    useUpdateSectionMutation,
} from "../../../../shared/features";
import { useShop } from "../../shared";

export function useProductSections(sections: Section[]) {

    const { setToast } = useShop();

    const [updateSection] = useUpdateSectionMutation();
    const [deleteSection] = useDeleteSectionMutation();
    const [createSection] = useCreateSectionMutation();

    const addProduct = (
        sectionId: number,
        productId: number,
        variantId: number,
    ) => {
        const section = sections.find((s) => s.id === sectionId);

        if (!section) return;

        if (
            section.items.find(
                (item) =>
                    item.product_id === productId &&
                    item.variant_id === variantId,
            )
        ) {
            setToast({
                message: "Product variant already exists in section",
                color: "warning",
                duration: 2000,
            });
            return;
        }

        const updatedItems = [
            ...section.items,
            { product_id: productId, variant_id: variantId },
        ];

        updateSection({
            id: sectionId,
            data: { items: updatedItems },
        });
    };

    const removeProduct = (
        sectionId: number,
        productId: number,
        variantId: number,
    ) => {
        const section = sections.find((s) => s.id === sectionId);

        if (!section) return;

        const updatedItems = section.items.filter(
            (item) =>
                !(
                    item.product_id === productId &&
                    item.variant_id === variantId
                ),
        );

        updateSection({
            id: sectionId,
            data: { items: updatedItems },
        });
    };

    const addSection = () => {
        createSection({ name: "New Section", items: [] });
    };
    const removeSection = (sectionId: number) => {
        deleteSection(sectionId);
    };

    const updateSectionType = (sectionId: number, newType: string) => {
        updateSection({
            id: sectionId,
            data: { type: newType },
        });
    }

    const renameSection = (sectionId: number, name: string) => {
        updateSection({
            id: sectionId,
            data: { name },
        });
    };

    return {
        addProduct,
        removeProduct,
        addSection,
        removeSection,
        renameSection,
        updateSectionType,
    };
}
