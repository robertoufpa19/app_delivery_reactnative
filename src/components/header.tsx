
import React from 'react'
import {View, Image, Text, TouchableOpacity} from 'react-native'

import { withExpoSnack } from 'nativewind';

import { styled } from 'nativewind';

import {Feather} from "@expo/vector-icons"
import colors from "tailwindcss/colors"

const StyledView = styled(View)
const StyledImage = styled(Image)
const StyledText = styled(Text)
const StyledTouchableOpacity = styled(TouchableOpacity)


type HeaderProps ={
  title: string
  cartQuantityItems?: number
}

export  function Header({title, cartQuantityItems = 0}: HeaderProps){
  return(
    <StyledView  className= "flex-row items-center border-b-2 border-slate-700 pb-5 mx-5">
       
       <StyledView className ="flex-1">
           <StyledImage source = {require("../assets/logo.png")} className ="h-6 w-32" />
            <StyledText className ="text-white text-xl font-heading mt-2">
             {title}
            </StyledText>   
       </StyledView>

   { 
   
   cartQuantityItems > 0 &&(
   
   <StyledTouchableOpacity className = "relative" activeOpacity = {0.5}>
     <StyledView className= "bg-lime-300 w-4 h-4 rounded-full items-center justify-center top-2 z-10 -right-3">
       <StyledText className ="text-slate-900 font-bold text-xs">{cartQuantityItems}</StyledText>
      </StyledView>  
      
      <Feather name= "shopping-bag" color={colors.white} size={24} />

    </StyledTouchableOpacity>
    )}

    </StyledView>
  )

}

export default withExpoSnack(Header);