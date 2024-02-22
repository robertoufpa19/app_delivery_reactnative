
import React from 'react'
import { SafeAreaView } from "react-native"
import {Slot} from "expo-router"

import {
    useFonts,
    Inter_400Regular,
    Inter_600Medium,
    Inter_600SemiBold,
    Inter_700Bold
  } from "@expo-google-fonts/inter"

  import {Loading} from "../components/loading"


  import { withExpoSnack } from 'nativewind';
  import { styled } from 'nativewind';

const StyledSafeAreaView = styled(SafeAreaView)

export default function Layout(){

    const [fontsLoader] = useFonts({
        Inter_400Regular,
        Inter_600Medium,
        Inter_600SemiBold,
        Inter_700Bold
    })

    if(fontsLoader){
        return <Loading/>
    }

    return(
        <StyledSafeAreaView  className = "flex-1 bg-slate-900" >
          <Slot/>
        </StyledSafeAreaView>
    )
}

export default withExpoSnack(Layout);