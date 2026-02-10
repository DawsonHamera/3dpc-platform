import { useState } from "react";
import {
    Product,
    useDeleteProductMutation,
    useGetProductsQuery,
} from "../../../../shared/features";

interface DeleteAlert {
    isOpen: boolean;
    product: Product | null;
}

export const useProductManagement = () => {
    const { data: products, isLoading } = useGetProductsQuery();
    const [deleteProduct] = useDeleteProductMutation();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState<Product | null>(null);
    const [deleteAlert, setDeleteAlert] = useState<DeleteAlert>({
        isOpen: false,
        product: null,
    });

    const handleCreateProduct = () => {
        setEditingProduct(null);
        setIsModalOpen(true);
    };

    const handleEditProduct = (product: Product) => {
        setEditingProduct(product);
        setIsModalOpen(true);
    };

    const handleDeleteProduct = async () => {
        if (deleteAlert.product) {
            try {
                await deleteProduct(deleteAlert.product.id).unwrap();
                setDeleteAlert({ isOpen: false, product: null });
            } catch (error) {
                console.error("Failed to delete product:", error);
            }
        }
    };

    const openDeleteAlert = (product: Product) => {
        setDeleteAlert({ isOpen: true, product });
    };

    const closeDeleteAlert = () => {
        setDeleteAlert({ isOpen: false, product: null });
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return {
        // State
        products,
        isLoading,
        isModalOpen,
        editingProduct,
        deleteAlert,
        // Handlers
        handleCreateProduct,
        handleEditProduct,
        handleDeleteProduct,
        openDeleteAlert,
        closeDeleteAlert,
        closeModal,
    };
};
