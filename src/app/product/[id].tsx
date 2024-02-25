
import React from 'react'
import {View, Image, Text} from 'react-native'
import { styled } from 'nativewind';

import {Feather} from "@expo/vector-icons"
import { useLocalSearchParams } from 'expo-router';
import {PRODUCTS} from "../../utils/data/products"
import { fromatCurrency } from './../../utils/functions/format-currency';
import {Button} from "./../../components/button"


const StyledView = styled(View)
const StyledImage = styled(Image)
const StyledText = styled(Text)

export default function Product(){
    const {id} = useLocalSearchParams()

    const product = PRODUCTS.filter((item) => item.id === id)[0] 

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
      <Button>
          <Button.Icon>
             <Feather name="plus-circle" size={20}/>
          </Button.Icon>
          <Button.Text>Adicionar a sacola</Button.Text>
      </Button>
   </StyledView> 

    </StyledView>

    )
}
