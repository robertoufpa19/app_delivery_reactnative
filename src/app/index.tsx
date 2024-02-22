
import React from 'react'
import {useState} from "react"
import {View, FlatList} from 'react-native'
import {CATEGORIES} from "../utils/data/products"

import { withExpoSnack } from 'nativewind';

import { styled } from 'nativewind';

import { Header } from "../components/header";
import { CategoryButton } from './../components/category-button';


const StyledFlatList = styled(FlatList)
const StyledView = styled(View)


export default function Home(){

  const [category, setCategory] = useState(CATEGORIES[0])

  function handleCategorySelect(selectedCategory: string){
    console.log(selectedCategory)
    setCategory(selectedCategory)
  }

  return(
    <StyledView className = "flex-1 pt-8">
      
     <Header title ="Faça seu pedido" cartQuantityItems={4}/>

     <StyledFlatList
       data={CATEGORIES}
       keyExtractor={(item) => item}
       renderItem={({item}) => 
        <CategoryButton title={item} isSelected={item === category}
         onPress={() => handleCategorySelect(item)}/>}
       horizontal
       className = "max-h-10 mt-5"
       showsHorizontalScrollIndicator ={false}
       contentContainerStyle={{gap: 12, paddingHorizontal: 20}}
     />
     
    </StyledView>
  )

}

export default withExpoSnack(Home);