import styled from "styled-components";

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
`

const Flex = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 350px;
    background: #0A223D;
    border-radius: 8px;
`
const Img = styled.img`
    width: 350px;
    height: 250px;
    border-radius: 8px 8px 0px 0px;
`
const H2 = styled.h2`
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 23px;
    color: #FFFFFF;
`
const P = styled.p`
    font-style: normal;
    font-weight: ${props => props.weight};
    font-size: ${props => props.size}px;
    line-height: 15px;
    color: #FFFFFF;
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
    justify-content: space-between;
    align-items: center;
`
const Space = styled.div`
    margin-left: ${props => props.x}px;
    margin-top: ${props => props.y}px;
`
export { Grid, Flex, Div, P, H2, Button, Img, Space }