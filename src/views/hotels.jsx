import React from 'react';
import { Button, Div, Flex, Grid, Img, P, H2, Space } from '../components/hotelsStyle';

const Hotels = () => {
    return (
        <div className='container'>
            <Space y="50"/>
        <Grid>
        <Flex>
            <Img src="https://picsum.photos/150" alt="" />
            <div style={{padding: "25px"}}>
            <H2>White Palace</H2>
            <Space y="20"/>
            <P weight="normal" size="12">1749 Wheeler Ridge  Delaware</P>
            <Space y="10"/>
            <P weight="normal" size="12">2 x Guests</P>
            <Space y="10"/>
            <P weight="normal" size="12">1 x Room</P>
            <Space y="25"/>
            <Div>
                <P weight="bold" size="24">$ 9,500</P>
                <Button>Book Now</Button>
            </Div>
            <Space y="35"/>
            </div>
        </Flex>
        <Flex>
            <Img src="https://picsum.photos/150" alt="" />
            <div style={{padding: "25px"}}>
            <H2>White Palace</H2>
            <Space y="20"/>
            <P weight="normal" size="12">1749 Wheeler Ridge  Delaware</P>
            <Space y="10"/>
            <P weight="normal" size="12">2 x Guests</P>
            <Space y="10"/>
            <P weight="normal" size="12">1 x Room</P>
            <Space y="25"/>
            <Div>
                <P weight="bold" size="24">$ 9,500</P>
                <Button>Book Now</Button>
            </Div>
            <Space y="35"/>
            </div>
        </Flex>
        <Flex>
            <Img src="https://picsum.photos/150" alt="" />
            <div style={{padding: "25px"}}>
            <H2>White Palace</H2>
            <Space y="20"/>
            <P weight="normal" size="12">1749 Wheeler Ridge  Delaware</P>
            <Space y="10"/>
            <P weight="normal" size="12">2 x Guests</P>
            <Space y="10"/>
            <P weight="normal" size="12">1 x Room</P>
            <Space y="25"/>
            <Div>
                <P weight="bold" size="24">$ 9,500</P>
                <Button>Book Now</Button>
            </Div>
            <Space y="35"/>
            </div>
        </Flex>
        </Grid>
        </div>
    )
}

export default Hotels;