import styled from "styled-components";

const Header = styled.div`
    background: #fff;
    height: 120px;
    display: flex;
    justify-content: center;
`
const DivSearch = styled.div`
    margin-top: 33px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 500px;
    height: 50px;
    background: #F5FAFE;
    border-radius: 6px; 
`
const Input = styled.input`
    background: #F5FAFE;
    outline: none;
    border: none;
    padding-left: 25px;
    font-family: Mulish;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 15px;
    text-transform: capitalize;
`
const ButtonSearch = styled.button`
    width: 65px;
    height: 50px;
    background: #EC1F46;
    border-radius: 0px 6px 6px 0px;
    border: none;
    outline: none;
`

export { Header, DivSearch, Input, ButtonSearch }