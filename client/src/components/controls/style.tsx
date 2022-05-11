import styled from "styled-components";

let Style = styled.div`
  /* background: purple; */
  width: 100%;
  /* height: 100%; */
  position: absolute;

  .container {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    /* positiopn: absolute; */
  }
  section {
    background: yellow;
    display: block;
    width: 100%;
    border: 1px solid black;
    flex: 1;
  }
  #controls {
    background: hotpink;
    flex: 5;
    justify-content: center;
    align-items: center;
    text-align: center;
    display: flex;
    .icons {
      justify-content: space-around;
      align-items: center;
      text-align: center;
      display: flex;
      width: 240px;
    }
  }

  .screens {
    display: flex;
    flex-direction: row;
  }

  #copy_icon {
    background: red;
    margin-left: 5px;
    height: 100%;
    width: 25px;
  }
`;

export default Style;
