import styled from 'styled-components'




/* ${(props)=>console.log("hello ---", props.style?.background) as any} ;  */

const VidStyles = styled.div`
background:${({style})=>style?.background ? style.background : "black"} ;
width: ${({style})=> style?.width };
height: ${({style}) => style?.height ? style.height +"px" : style?.width as number * .5625 + "px"} ; 

/* 
${({style}) =>{
    if(style?.height)
    return style.height;
        console.log("height: ", style?.width as number * .5625 )
        return style?.width as number * .5625 
        
        }}; */

border-radius: ${({style})=> style?.borderRadius };
overflow: hidden;
 
.video_container{

display: flex;
position: relative;
width:100%;
height: 100%;

}
#controls{
    background: red;
    position: absolute;
    bottom: 0;
    width: 100%;
}


#localVideo{

width: 100%;
height: 100%;
object-fit: fill;
background: black;
} 
`
export default VidStyles;
