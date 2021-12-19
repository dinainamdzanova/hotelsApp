import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Div, H2, P, Space } from '../components/hotelsStyle';
import { Content, ContentDiv, ContentImg, Name, Stars } from '../components/hotelStyle';
import star from "./icons8-star-48.png";

const Hotel = () => {
    return (
        <div className='container'>
            <Link to="/">Back to home</Link>
            <Space y="40" />
            <Stars>
                <img style={{width: "8px"}, {height: "8px"}} src={star} alt="" />
                <img style={{width: "8px"}, {height: "8px"}} src={star} alt="" />
                <img style={{width: "8px"}, {height: "8px"}} src={star} src={star} alt="" />
                <img style={{width: "8px"}, {height: "8px"}} src={star} src={star} alt="" />
                <img style={{width: "8px"}, {height: "8px"}} src={star} src={star} alt="" />
            </Stars>
            <Space y="5" />
            <Name>GRAND HILTON HOTEL</Name>
            <Space y="35"/>
            <Content>
                <ContentImg src='https://picsum.photos/150' />
                <ContentDiv>
            <H2>White Palace</H2>
            <Space y="25"/>
            <P>Aute quis duis excepteur excepteur ipsum cat eiusmod consectetur enim laborum magna llit. Ipsum est fugiat velit ea llamco do esse ut in veniam sun in onsequat. Aute quis duis epteur excepteur ipsum occaecat eiusmod nsectetur enim laborum magna mollit. Ipsum est fugiat velit ea ullamco do</P>
            <Space y="35"/>
            <P weight="normal" size="12">1749 Wheeler Ridge  Delaware</P>
            <Space y="10"/>
            <P weight="normal" size="12">2 x Guests</P>
            <Space y="10"/>
            <P weight="normal" size="12">1 x Room</P>
            <Space y="55"/>
            <Div>
                <P weight="bold" size="24">$ 9,500</P>
                <Button>View Other Options</Button>
            </Div>
            <Space y="35"/>
                </ContentDiv>
            </Content>
        </div>
    )
}

export default Hotel;