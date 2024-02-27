
import {useState} from "react"
import {View, Text, ScrollView, Alert, Linking} from 'react-native';
import { useNavigation } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view"
import { styled } from 'nativewind'

import {useCartStore, ProductCartProps} from "../app/stores/cart-store"

import {Header } from "../components/header" 
import {Product} from "../components/product"
import {Button} from "../components/button"
import { fromatCurrency } from './../utils/functions/format-currency'; 
import { Input } from './../components/input';
import { LinkButton } from './../components/link-button';

const PHONE_NUMBER = "5591985288101"



const StyledView = styled(View)
const StyledText = styled(Text)

export default function Cart(){
    const [address, setAddress] = useState("")
    const cartStore = useCartStore()
    const navigation = useNavigation()


    const total = fromatCurrency(cartStore.products.reduce(
      (total, product) => total + product.price * product.quantity, 0
    ))

    function handleProductRemove(product: ProductCartProps){
       Alert.alert("Remover",`Deseja remover ${product.title} do carrinho`, [
        {
          text:"Cancelar", 
        },
        { 
          text:"Remover",
          onPress: () => cartStore.remove(product.id)
        },
       ])
    }
     /// verificar se o usuario inseriu 0 endereço de entrega
    function handleOrder(){
      if(address.trim().length === 0){
        return Alert.alert("Pedido ", "Informe o endereço de entrega")
      }

      // recuperar informações do pedido
      const products = cartStore.products
      .map((product) => `\n ${product.quantity} ${product.title}`)
      .join("")

      const message = `📄 NOVO PEDIDO 
      \n🏠 Entregar em: ${address} 
      \n🍔 ${products} 
      \n💰 Valor Total: ${total}` 

      // enviar msg para o whatsApp
      Linking.openURL(`http://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=${message}`)

      cartStore.clearCarrinho()
      ///voltar para a tela anterio
      navigation.goBack()

    }

    return (
    <StyledView className="flex-1 pt-10">
        <Header  title="Seu carrinho"></Header>
     <KeyboardAwareScrollView>
        <ScrollView>
        <StyledView className="p-5 flex-1">
        {cartStore.products.length > 0 ?(
       <StyledView className="border-b-2 border-slate-700"> 
         {cartStore.products.map((product) => (
           <Product key={product.id} data={product} onPress={() => handleProductRemove(product)}/>
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

    <Input  placeholder="Informe o endereço de entrega"
      onChangeText={setAddress}/>

    </StyledView>


    <StyledView className="p-2 gap-5"> 
    <Button onPress={handleOrder}>
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

 

