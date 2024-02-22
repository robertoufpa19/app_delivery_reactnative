
import React from 'react'
import {Text, Pressable, PressableProps} from "react-native"
import { withExpoSnack } from 'nativewind';
import { styled } from 'nativewind';

import {clsx} from "clsx"

const StyledText = styled(Text)
const StyledPressable = styled(Pressable)

 type CategoryProps = PressableProps & {
    title: string
    isSelected?: boolean
 }

 export function CategoryButton({title, isSelected, ...rest} : CategoryProps){

     return(
        <StyledPressable className = {clsx("bg-slate-800 px-4 justify-center rounded-md h-10",
           isSelected && "border-2 border-lime-300"
        )}
         {...rest} >
            <StyledText className = "text-slate-100 font-subtitle text-sm">{title}</StyledText>
        </StyledPressable>
     )
 }

 
export default withExpoSnack(CategoryButton);