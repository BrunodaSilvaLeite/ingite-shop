import { createContext, useState, ReactNode } from 'react';

export interface Product {
    id: string;
    name: string;
    imageUrl: string;
    price: string | number;
    description: string
    defaultPriceId: string
}

type CartState = {
    items: Product[];
    total: number;
};

interface CartContextProps {
    addItem: (item: Product) => void;
    cart: CartState;
    removeItem: (idItem: string) => void;
}

interface CartContextProviderProps {
    children: ReactNode;
}

const initialCartState: CartState = {
    items: [],
    total: 0,
};

export const CartContext = createContext({} as CartContextProps);

export function CartProvider({ children }: CartContextProviderProps) {
    const [cart, setCart] = useState<CartState>(initialCartState);

    // Adiciona um item ao carrinho
    const addItem = (item: Product) => {

        let numericPrice: number;

        if (typeof item.price === 'string') {
            // Remove "R$" e transforma a vírgula em ponto
            numericPrice = Number(item.price.replace("R$", "").replace(",", ".").trim());
        } else {
            // Se já for um número, apenas usa o valor diretamente
            numericPrice = item.price;
        }

        const updatedItem = { ...item, price: numericPrice };

        setCart((prevCart) => ({
            items: [...prevCart.items, updatedItem],
            total: prevCart.total + numericPrice, // Garantindo que o total é ajustado com a quantidade
        }));
    };

    // Remove um item do carrinho
    const removeItem = (itemId: string) => {
        setCart((prevCart) => {
            // Encontra o índice do item com o id correspondente
            const itemIndex = prevCart.items.findIndex((item) => item.id === itemId);

            // Se o item foi encontrado, cria uma cópia do array removendo apenas esse item
            const updatedItems = [...prevCart.items];
            if (itemIndex !== -1) {
                const removedItem = updatedItems.splice(itemIndex, 1)[0]; // Remove o item encontrado

                // Aqui acessamos o preço e a quantidade do item removido
                const updatedTotal = prevCart.total - (typeof removedItem.price === 'number' ? removedItem.price : 0);

                return { items: updatedItems, total: updatedTotal };
            }

            return prevCart; // Retorna o carrinho sem alterações se o item não for encontrado
        });
    };

    // Limpa o carrinho
    const clearCart = () => {
        setCart(initialCartState);
    };

    return (
        <CartContext.Provider value={{ addItem, cart, removeItem }}>
            {children}
        </CartContext.Provider>
    );
}
