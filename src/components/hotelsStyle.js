import styled from "styled-components";

const Grid = styled.div`
    display: flex;
    flex-direction: column;
`

const Flex = styled.div`
    display: flex;
    flex-direction: row;
    min-height: 100px;
`
const Img = styled.img`
    width: 340px;
    height: 220px;
    border-radius: 10px;
`
const H2 = styled.h2`
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 23px;
    color: #222;
`
const P = styled.p`
    font-style: normal;
    font-weight: ${props => props.weight};
    font-size: ${props => props.size}px;
    line-height: 15px;
    color: rgb(113, 113, 113);
    color: ${props => props.color};
`
const Button = styled.button`
    outline: none;
    border: none;
    border: 1px solid #EC1F46;
    padding: 10px 25px;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    background: #EC1F46;
    border-radius: 4px;
`
const Div = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
`
const Space = styled.div`
    margin-left: ${props => props.x}px;
    margin-top: ${props => props.y}px;
`
export { Grid, Flex, Div, P, H2, Button, Img, Space }