
import {ProductProps} from "./../../utils/data/products"

import {create} from "zustand"
import {createJSONStorage, persist} from "zustand/middleware"

import AsyncStorage from "@react-native-async-storage/async-storage"

import * as cartInMemory from "./helpers/cart-in-memory"

export type ProductCardProps = ProductProps & {
    quantity: number
}

type StateProps = {
    products: ProductCardProps[]
    add: (product: ProductProps) => void
    remove: (productId: string) => void
    clearCarrinho: () => void 
}

export const useCartStore = create(
    persist<StateProps>((set) =>({
    products:[],

    add: (product: ProductProps) => 
     set((state) => ({
       products: cartInMemory.add(state.products, product)
     })),

     remove: (productId: string) =>
     set((state) => ({
        products: cartInMemory.remove(state.products, productId),
     })),

     clearCarrinho: () => set(() => ({products: []})),

    }), 
    {
       name:"delivery-rn:cart",
       storage: createJSONStorage(() => AsyncStorage), 

    }
    
  )
)