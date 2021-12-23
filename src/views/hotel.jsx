import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { P, Space } from '../components/hotelsStyle';
import { ContentImg, Name } from '../components/hotelStyle';


const Hotel = () => {
    const state = useSelector(state => state);
    const params = useParams()
    const [hotel, setHotel] = useState();

    // useEffect(() => {
    //     setHotel(state.hotels?.searchResults?.results?.forEach(elem => {
    //         let arr = []
    //         arr.push(elem)
    //         arr.find(x => x.id === elem.id)
    //     }))
    //     console.log(state)
    //     console.log(hotel)
    // }, [params])

    useEffect(() => {
        setHotel(state.hotels?.searchResults?.results?.find(x => x.id === params.hotelId))
        console.log(state)
        console.log(hotel);
    }, [params])

    return (
        <div className='container'>
            <Link to="/">Back to home</Link>
            <Space y="40" />
            <ContentImg src='https://picsum.photos/150' />
            <Space y="40" />
            <Name>GRAND HILTON HOTEL</Name>
            <Space y="25" />
            <P>Aute quis duis excepteur excepteur ipsum cat eiusmod consectetur enim laborum magna llit.</P>
            <Space y="35" />
            <P weight="normal" size="12">1749 Wheeler Ridge  Delaware</P>
            <Space y="10" />
            <P weight="normal" size="12">2 x Guests</P>
            <Space y="10" />
            <P weight="normal" size="12">1 x Room</P>
            <Space y="55" />
            <P weight="bold" size="24">$ 9,500</P>
            <Space y="35" />
        </div>
    )
}

export default Hotel;