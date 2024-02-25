

import { Link, LinkProps } from 'expo-router';
import { styled } from 'nativewind';
const StyledLink = styled(Link)

type LinkButtonProps = LinkProps<string> & {
    title: string
}

export function LinkButton({title, ...rest}: LinkButtonProps){
    return(
        <StyledLink className="text-slate-300 text-center text-base font-body" {...rest}>
         {title}
       </StyledLink>
    )
}