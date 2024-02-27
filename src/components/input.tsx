import { TextInput, TextInputProps} from "react-native"

import { styled } from 'nativewind'

const StyledTextInput = styled(TextInput)

export function Input({...rest}: TextInputProps){
    return <StyledTextInput 
    multiline
    textAlignVertical="top"
    placeholderTextColor="#FFF" 
    className="h-32 bg-slate-800 rounded-md px-4 py-3 font-body text-sm text-white"
    {...rest} />
}