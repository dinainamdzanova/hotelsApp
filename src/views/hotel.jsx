import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { P, Space } from '../components/hotelsStyle';
import { Comment, Comments, ContentImg, GridImg, Name } from '../components/hotelStyle';
import { getImages, getReviews } from '../store/hotelSlice';
import star from "./icons8-звезда-30.png";
import { Avatar } from '@nextui-org/react';


const Hotel = () => {
    const state = useSelector(state => state);
    const params = useParams();
    const [hotel, setHotel] = useState();
    const dispatch = useDispatch();

    useEffect(() => {
        setHotel(
            state.hotels?.searchResults?.results?.find(
                x => x.id === Number(params.hotelId)
            )
        );
    }, [params]);

    useEffect(() => {
        dispatch(getReviews(Number(params.hotelId)));
    }, [params]);

    useEffect(() => {
        dispatch(getImages(Number(params.hotelId)));
    }, [params]);

    return (
        <div className="container">
            <Space y="40" />
            <Link className='linkBack' to="/">Back to home</Link>
            <Space y="40" />
            <Name size="24">{hotel?.name}</Name>
            <Space y="8" />
            <div className='starDiv'>
                <img width="20px" height="20px" src={star} alt="" />
                <Space x="5" />
                <P> {hotel?.starRating}</P>
            </div>
            <Space y="40" />
            <GridImg>
                {state.status.pics === 'boldii'
                    ? state.images.slice(0, 8).map(image => {
                        return (
                            <>
                                <ContentImg src={image.mainUrl} alt="" />
                            </>
                        );
                    })
                    : null}
            </GridImg>
            <Space y="40" />
            <P>
                Aute quis duis excepteur excepteur ipsum cat eiusmod consectetur enim
                laborum magna llit.
            </P>
            <Space y="35" />
            <P weight="normal" size="12">
                1749 Wheeler Ridge Delaware
            </P>
            <Space y="10" />
            <P weight="normal" size="12">
                2 x Guests
            </P>
            <Space y="10" />
            <P weight="normal" size="12">
                1 x Room
            </P>
            <Space y="55" />
            <P weight="bold" size="24">
                {hotel?.ratePlan?.price?.current}
            </P>
            <Space y="35" />
            <hr />
            <Space y="35" />
            <Comments>
                {state.status.review === 'succesful'
                    ? state.reviews?.groupReview[0]?.reviews?.slice(0, 6).map(review => {
                        return (
                            <Comment direction="column">
                               <Comment direction="row" align="center">
                               <Avatar src="https://picsum.photos/150" css={{ size: "$20" }} />
                               <Space x="5"/>
                                <Name size="20">{review.recommendedBy}</Name>
                               </Comment>
                                <Space y="20" />
                                <P weight="normal" size="16">{review.summary}</P>
                            </Comment>
                        );
                    })
                    : null}
            </Comments>
            <Space y="70" />
        </div>
    );
};

export default Hotel;