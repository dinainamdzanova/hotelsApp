import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { P, Space } from '../components/hotelsStyle';
import { ContentImg, Name } from '../components/hotelStyle';
import { getImages, getReviews } from '../store/hotelSlice';


const Hotel = () => {
    const state = useSelector(state => state);
    const params = useParams()
    const [hotel, setHotel] = useState();
    const dispatch = useDispatch();

    useEffect(() => {
        setHotel(
            state.hotels?.searchResults?.results?.find(
                x => x.id === Number(params.hotelId)
            )
        );
    }, [params])

    useEffect(() => {
        dispatch(getReviews(Number(params.hotelId)))
    }, [params])

    useEffect(() => {
        dispatch(getImages(Number(params.hotelId)))
    }, [params])

    return (
        <div className='container'>
            <Link to="/">Back to home</Link>
            <Space y="40" />
            {
                state.status === "fulfilled" ? (
                    state.images.slice(0, 10).map((image) => {
                        return (
                            <>
                                <ContentImg src={image.mainUrl} alt="" />
                            </>
                        )
                    })
                ) : null
            }

            <Space y="40" />
            <Name>{hotel?.name}</Name>
            <Space y="25" />
            <P>Aute quis duis excepteur excepteur ipsum cat eiusmod consectetur enim laborum magna llit.</P>
            <Space y="35" />
            <P weight="normal" size="12">1749 Wheeler Ridge  Delaware</P>
            <Space y="10" />
            <P weight="normal" size="12">2 x Guests</P>
            <Space y="10" />
            <P weight="normal" size="12">1 x Room</P>
            <Space y="55" />
            <P weight="bold" size="24">{hotel?.ratePlan?.price?.current}</P>
            <Space y="35" />
            <hr />
            {
                state.status === "fulfilled" ? (
                    state.reviews?.groupReview[0]?.reviews?.map((review) => {
                        return (
                            <>
                                <Name>{review.recommendedBy}</Name>
                                <p>{review.summary}</p>
                                <hr />
                            </>
                        )
                    })
                ) : null
            }
        </div>
    )
}

export default Hotel;