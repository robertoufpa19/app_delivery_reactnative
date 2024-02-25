
import React from 'react'
import {View, Image, Text} from 'react-native'
import { styled } from 'nativewind';
import { withExpoSnack } from 'nativewind';
import {Feather} from "@expo/vector-icons"
import { useLocalSearchParams, useNavigation } from 'expo-router';
import {PRODUCTS} from "../../utils/data/products"
import { fromatCurrency } from './../../utils/functions/format-currency';
import {Button} from "./../../components/button"
import { LinkButton } from './../../components/link-button';
import {useCartStore} from "../stores/cart-store"


const StyledView = styled(View)
const StyledImage = styled(Image)
const StyledText = styled(Text)

export default function Product(){
    const cartStore = useCartStore()
    const navigation = useNavigation()
    const { id } = useLocalSearchParams()
    const product = PRODUCTS.filter((item) => item.id === id)[0] 

   function handleAddToCart(){
      cartStore.add(product)
      navigation.goBack()
   }


    return( 
    <StyledView className="flex-1"> 
    <StyledImage source={product.cover} className="w-full h-52"
    resizeMode="cover"
    />

   <StyledView className="p-5 mt-8 flex-1">
    <StyledText className="text-lime-400 text-2xl font-heading my-2">
       { fromatCurrency(product.price)}
    </StyledText>

    <StyledText className="text-slate-400 font-body text-base leading-6 mb-6">
       {product.description}
    </StyledText>

    {product.ingredients.map((ingredient) => (
       <StyledText key={ingredient}className="text-slate-400 font-body text-base leading-6" >
       {"\u2022"} {ingredient}
      </StyledText> 
    ))}

   </StyledView>
   <StyledView className="p-5 pb-8 gap-5">
      <Button onPress={handleAddToCart}>
          <Button.Icon>
             <Feather name="plus-circle" size={20}/>
          </Button.Icon>
          <Button.Text>Adicionar ao carrinho</Button.Text>
      </Button>

    <LinkButton title="Voltar" href="/"></LinkButton>

   </StyledView> 

    </StyledView>

    )
}

export default withExpoSnack(Product);

