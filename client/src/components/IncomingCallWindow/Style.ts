import styled from "styled-components";


let IncomingStyle = styled.div`
background-color: green ;
position:absolute ;
top:0;
width:100% ;
height: 100%;
display:flex ;
justify-content:center ;
align-items: center ;
z-index:1 ;

.items_container{
    background: orange ;
    height: 400px;
    width: 350px;
    display:flex;
    justify-content:space-between ;
    align-items:center ;
    flex-direction:column ;
    border-radius:10px ;

        #phone_icon{
            width: 50px;
            height: 50px;
            color: white;
            
        }
    
        .btn_container{
            margin: 45px;
        }

}


`


export default IncomingStyle;