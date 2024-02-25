
import React from 'react'
import {ActivityIndicator, View} from "react-native";
import colors from "tailwindcss/colors"

import { withExpoSnack } from 'nativewind';
import { styled } from 'nativewind';

const StyledView = styled(View)

export function Loading(){
    return(
      <StyledView  className="flex-1 items-center justify-center bg-slate-900">
     < ActivityIndicator color={colors.white} />
      </StyledView>
    )
}

export default withExpoSnack(Loading); 