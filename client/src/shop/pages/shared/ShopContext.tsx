import { IonToast } from "@ionic/react";
import {
    createContext,
    useContext,
    useState,
    ReactNode,
    Dispatch,
    SetStateAction,
    useEffect,
} from "react";

type ShopContextType = {
    addItemToCart: ({
        productId,
        variantId,
        quantity,
    }: {
        productId: number;
        variantId: number;
        quantity: number;
    }) => Promise<boolean>;

    updateCartItemQuantity: ({
        productId,
        variantId,
        quantity,
    }: {
        productId: number;
        variantId: number;
        quantity: number;
    }) => void;

    emptyCart: () => void;

    cart: any[];

    setToast: Dispatch<SetStateAction<{
        message: string;
        color: string;
        duration: number;
    }>>;

    viewMode: 'admin' | 'user';
    setViewMode: Dispatch<SetStateAction<'admin' | 'user'>>;
};

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<any[]>(() => {
        try {
            return JSON.parse(localStorage.getItem("cart") || "[]");
        } catch (error) {
            return [];
        }
    });

    const [toast, setToast] = useState<{
        message: string;
        color: string;
        duration: number;
    }>({
        message: "",
        color: "",
        duration: 1000,
    });

    const [viewMode, setViewMode] = useState<'admin' | 'user'>('user');

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addItemToCart = async ({
        productId,
        variantId,
        quantity,
    }: {
        productId: number;
        variantId: number;
        quantity: number;
    }) => {
        setCart((prev) => {
            const existingItem = prev.find(
                (item) =>
                    item.productId === productId && item.variantId === variantId
            );

            if (existingItem) {
                return prev.map((item) =>
                    item.productId === productId && item.variantId === variantId
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }

            return [...prev, { productId, variantId, quantity }];
        });
        return true;
    };

    const updateCartItemQuantity = ({
        productId,
        variantId,
        quantity,
    }: {
        productId: number;
        variantId: number;
        quantity: number;
    }) => {
        setCart((prev) => {
            return prev
                .map((item) =>
                    item.productId === productId && item.variantId === variantId
                        ? { ...item, quantity: quantity }
                        : item
                )
                .filter((item) => item.quantity > 0);
        });
    };

    const emptyCart = () => {
        setCart([]);
    };

    return (
        <ShopContext.Provider
            value={{
                addItemToCart,
                updateCartItemQuantity,
                emptyCart,
                cart,
                setToast,
                setViewMode,
                viewMode,
            }}
        >
            {children}
            <IonToast
                isOpen={toast.message !== ""}
                message={toast.message}
                duration={toast.duration}
                color={toast.color}
                onDidDismiss={() =>
                    setToast({ message: "", color: "", duration: 1000 })
                }
            />
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
