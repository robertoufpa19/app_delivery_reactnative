
import {ReactNode} from "react"
import {TouchableOpacity, TouchableOpacityProps } from 'react-native'

import {Text} from 'react-native'

import { styled } from 'nativewind';

const StyledText = styled(Text)
const StyledTouchableOpacity = styled(TouchableOpacity)

type ButtonProps = TouchableOpacityProps & {
    children: ReactNode
}


type ButtonTextProps ={
    children: ReactNode
}

type ButtonIconProps ={
    children: ReactNode
}

function Button({children, ...rest}: ButtonProps){
    return( 
        <StyledTouchableOpacity className="h-12 bg-lime-400 rounded-md items-center justify-center flex-row"
            activeOpacity={0.7}
            {...rest}>
            {children}
        </StyledTouchableOpacity>
    ) 

}


function ButtonText({children}: ButtonTextProps){
    return(
        <StyledText className="text-black font-heading text-base mx-2">{children}</StyledText>
    )
}

function ButtonIcon({children}: ButtonIconProps){
    return children
}

Button.Text = ButtonText
Button.Icon = ButtonIcon

export {Button}