import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from "react";
import { useAddItemToCartMutation } from "../../features/crud/shop/shopApi";

type ActiveOrder = {
    productId: number | null;
    quantity: number;
    quality?: string;
    customOptions?: Array<any>;
};

type ShopContextType = {
    activeOrder: ActiveOrder;
    setActiveOrder: Dispatch<SetStateAction<ActiveOrder>>;
    saveActiveOrder: () => void;
    customOptions: any[];
    setCustomOptions: Dispatch<SetStateAction<any[]>>;
};

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider = ({ children }: { children: ReactNode }) => {
    // const [shopData, setShopData] = useState<ShopData>();
    const [activeOrder, setActiveOrder] = useState<ActiveOrder>({
        productId: null,
        quantity: 1,
    });

    const [addItemToCart, { isLoading: isCreatingOrder }] = useAddItemToCartMutation();

    const [customOptions, setCustomOptions] = useState<any[]>([]);
    const saveActiveOrder = () => {
        // Logic to add the current item to the cart
        console.log("Item added to cart", activeOrder, customOptions);
        addItemToCart({ ...activeOrder, customOptions });
        setActiveOrder({ productId: null, quantity: 1 });
        setCustomOptions([]);
    };

    return (
        <ShopContext.Provider value={{ activeOrder, setActiveOrder, saveActiveOrder, customOptions, setCustomOptions }}>
            {children}
        </ShopContext.Provider>
    );
};

export const useShop = () => {
    const context = useContext(ShopContext);
    if (!context) {
        throw new Error("useShop must be used within a ShopProvider");
    }
    return context;
};