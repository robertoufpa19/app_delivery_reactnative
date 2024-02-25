
import React from 'react'
import {useState, useRef} from 'react'
import {Text, View, FlatList, SectionList} from 'react-native'
import {CATEGORIES, MENU} from "../utils/data/products"
import { withExpoSnack } from 'nativewind'
import { styled } from 'nativewind'
import { Header } from "../components/header"
import { CategoryButton } from './../components/category-button'
import { Product } from './../components/product'
import {Link} from "expo-router"
import {useCartStore} from "./../app/stores/cart-store"

const StyledSectionList = styled(SectionList)
const StyledFlatList = styled(FlatList)
const StyledView = styled(View)
const StyledText = styled(Text)


export default function Home(){

  const [category, setCategory] = useState(CATEGORIES[0])
  const sectionListRef = useRef<StyledSectionList>(null)
  const cartStore = useCartStore();

  const cartQuantityItems = cartStore.products.reduce((total, product) => total + product.quantity, 0)

  function handleCategorySelect(selectedCategory: string){
    setCategory(selectedCategory) 
    
    const sectionIndex = CATEGORIES.findIndex((category) => category === selectedCategory)

    if(sectionListRef.current){
      sectionListRef.current.scrollToLocation({
        animated: true,
        sectionIndex,
        itemIndex:0,
      })
    }

  }

  return(
    <StyledView className = "flex-1 pt-10">
      
     <Header title ="Faça seu pedido" cartQuantityItems={cartQuantityItems}/>

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

     <StyledSectionList 
     ref={sectionListRef} 
     sections={MENU}
     keyExtractor={(item) =>item.id}
     stickySectionHeadersEnabled={false}
     renderItem={({item})=>(
     <Link href={`/product/${item.id}`} asChild>
     <Product data={item}/>
     </Link>
     )}
     

     renderSectionHeader={({section:{title}}) =>( 
      <StyledText className ="text-xl text-white font-heading mt-8 mb-3">
        {title}
      </StyledText>)} 

      className="flex-1 p-5"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: 100}}
     
     />
     
    </StyledView>
  )

}

export default withExpoSnack(Home);