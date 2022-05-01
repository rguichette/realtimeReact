import styled from "styled-components";

const controlsStyle = styled.div `

.controls_container{
background-color: cadetblue;
display: flex;
flex-direction: row;
width: 100%;
justify-content: center;
align-items: center;
align-content: center;
padding-top: 5px;
padding-bottom: 5px;
/* display: flex;

flex-wrap: wrap;
flex-direction: row;
justify-content: center; */
}

.icon_container{


   
    /* background-color:yellow; */
    /* display: inline-block; */
    display: flex;
    align-content: center;
    /* align-items: center; */
    justify-content: center;
    margin-left: 1rem;
    margin-right: 1rem;
    
}

.icon{
    /* font-size: 20px; */
    padding: 8px;
    width: 20px;
    height: 20px;
     border-radius: 50%;
}

.start_call{
background-color: green;

}
.in_call{
    background-color: red;
}

`

export default controlsStyle