
import {View, Text, ScrollView} from 'react-native';
import { Feather } from '@expo/vector-icons';
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view"
import { styled } from 'nativewind'

import {useCartStore} from "../app/stores/cart-store"

import {Header } from "../components/header" 
import {Product} from "../components/product"
import {Button} from "../components/button"
import { fromatCurrency } from './../utils/functions/format-currency'; 
import { Input } from './../components/input';
import { LinkButton } from './../components/link-button';



const StyledView = styled(View)
const StyledText = styled(Text)

export default function Cart(){

    const cartStore = useCartStore()
    const total = fromatCurrency(cartStore.products.reduce(
      (total, product) => total + product.price * product.quantity, 0
    ))


    return (
    <StyledView className="flex-1 pt-10">
        <Header  title="Seu carrinho"></Header>
     <KeyboardAwareScrollView>
        <ScrollView>
        <StyledView className="p-5 flex-1">
        {cartStore.products.length > 0 ?(
       <StyledView className="border-b-2 border-slate-700"> 
         {cartStore.products.map((product) => (
           <Product key={product.id} data={product}/>
         ))}
       </StyledView>
    ) : (
     <StyledText className="font-body text-slate-400 text-center my-8">
        Seu carrinho está vazio
     </StyledText>
     )}

    <StyledView className="flex-row gap-2 items-center mt-5 mb-4">
      <StyledText className="text-white text-xl font-subtitle">Total:</StyledText>
      <StyledText className="text-lime-400 text-2xl font-heading">{total}</StyledText>
    </StyledView>

    <Input  placeholder="Informe o endereço de entrega"/>
    </StyledView>


    <StyledView className="p-2 gap-5"> 
    <Button>
      <Button.Text>Enviar Pedido</Button.Text>
      <Button.Icon>
        <Feather name="arrow-right-circle"size={20}/>
      </Button.Icon>
    </Button>

  <LinkButton title="Voltar" href="/"></LinkButton> 
</StyledView>   

    </ScrollView>
    </KeyboardAwareScrollView>

    </StyledView> 
    )
} 

 

