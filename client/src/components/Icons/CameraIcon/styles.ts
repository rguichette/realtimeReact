import styled from "styled-components";
import commonSizes from "../../../utils/commonSizes"

let Style = styled.div`

background:green;
border-radius: 50%;
display:flex ;
width: ${commonSizes.videoMainIcons}px;
height: ${commonSizes.videoMainIcons}px;
justify-content: center ;
align-items:center ;
overflow: hidden ;

div{
    background: orange ;
    display:flex ;
    width: 100%;
    height: 100%;
    justify-content:center ;
    align-items:center ;
    font-size: ${commonSizes.iconFont}px
}

/* display:block ; */

`



export default Style;