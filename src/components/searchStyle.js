import styled from "styled-components";

const Header = styled.div`
    height: 120px;
    display: flex;
    justify-content: center;
`
const DivSearch = styled.div`
    margin-top: 33px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 900px;
    height: 50px;
    background: #f7f7f7;
    border-radius: 32px; 
    padding: 15px 10px;  
`
const Input = styled.input`
    width: 100%;
    background: #f7f7f7;
    outline: none;
    border: none;
    padding-left: 15px;
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
    padding: 15px;  
    border-radius: 50%;
    border: none;
    outline: none;
`
const Results = styled.div`
    display: flex;
    flex-direction: column;
    background: #f7f7f7;
    width: 500px;
    padding: 20px;
    border-radius: 32px;
`

export { Header, DivSearch, Input, ButtonSearch, Results }