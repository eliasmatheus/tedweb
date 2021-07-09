import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  background: white;
  height: 125px;
  display: flex;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
  justify-content: space-between;
  cursor: pointer;

  div {
    font-family: Inter;
    font-size: 20px;
    letter-spacing: 0px;
    font-style: normal;
    display: flex;
    padding-left: 10px;
    padding-right: 10px;
    cursor: pointer;
    height: 100%;
    /* background: coral; */

    div {
      /* background: red; */
      display: flex;
      align-items: center;

      /* background: red; */
      &:hover {
        background: #ededed;
        transition: 0.2s;
      }
    }
  }
  button {
    background: #ff0000;
    border: 0px;
    color: white;
    /* margin: 10px; */
    padding: 12px 21px 12px 21px;
    width: 189px;
    height: 46px;
    border-radius: 22px;
    font-size: 20px;
  }
`;
