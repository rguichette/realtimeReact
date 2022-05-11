import styled from "styled-components";

let CallerIdStyle = styled.div`
  position: absolute;
  width: 100%;
  background: salmon;
  height: 100%;
  z-index: 3;

  display: flex;

  .main_wrapper {
    background: oldlace;
    width: 100%;

    & #exit {
      /* margin-right:auto ; */
      background: paleturquoise;
    }

    .center_wrapper {
      height: 100%;
      width: 50%;
      background-color: orange;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0 20px;
      margin: 0 auto;

      input {
        width: 60%;
        height: 30px;
        /* margin: 0 20px ; */
      }

      .btn_wrapper {
        margin-top: 10rem;
        button {
          margin-top: 30px;
          margin-left: 1rem;
          margin-right: 1rem;
          width: 90px;
          height: 30px;
        }
      }
    }
  }
  .center_wrapper {
    /* display:flex ; */
  }

  #closed {
    /* display: none ; */
    background: yellow;
  }
`;

export default CallerIdStyle;
