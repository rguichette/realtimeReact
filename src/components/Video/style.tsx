import styled from 'styled-components'

const VidStyles = styled.div`
background-color: aqua;
.video_container{

display: flex;
position: relative;
width: 720px;


}
#controls{
background: red;
position: absolute;
bottom: 0;
width: 100%;
}

#localVideo{
height: 405px;
width: 720px;

background: black;
min-height: 225px;
}
`
export default VidStyles;
