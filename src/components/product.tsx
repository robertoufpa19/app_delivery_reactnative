import React from 'react'
import {forwardRef} from 'react'
import {
     View,
    TouchableOpacity ,
    TouchableOpacityProps,
    Image,
    ImageProps,
    Text} from 'react-native';
import { styled } from 'nativewind';
import { withExpoSnack } from 'nativewind';

const StyledImage = styled(Image)
const StyledTouchableOpacity = styled(TouchableOpacity)
const StyledView = styled(View)
const StyledText = styled(Text)

type ProductDataProps ={
    title: string
    description: string
    thumbnail: ImageProps
}
type ProductProps = TouchableOpacityProps & {
    data: ProductDataProps
}

export const Product= forwardRef<TouchableOpacity, ProductProps>(({data, ...rest}, 
     ref ) => {
    return(
        <StyledTouchableOpacity 
        ref={ref} 
        classname ="w-full flex-row items-center pb-4" {...rest}>
         <StyledImage source={data.thumbnail} className="w-20 h-20 rounded-md"/>
            <StyledView className="flex-1 ml-3">
              <StyledText  className="text-slate-100 font-subtitle text-base flex-1">
                {data.title}
                </StyledText>
              <StyledText className="text-slate-400 font-subtitle text-base flex-1">
                {data.description}
                </StyledText>
            </StyledView>
        </StyledTouchableOpacity>
    )
})
export default withExpoSnack(Product); 