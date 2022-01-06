import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Div, Flex, Grid, Img, P, H2, Space } from '../components/hotelsStyle';
import { getHotels } from '../store/hotelSlice';

const Hotels = () => {
	const state = useSelector(state => state);
	const dispatch = useDispatch();
	const params = useParams();

	useEffect(() => {
		dispatch(getHotels(params.destainationId));
		console.log(state);
	}, [params]);

	return (
		<div className="background">
			<div className="container">
				<Grid>
					<Space y="50" />
					{state.status.post === 'fulfilled'
						? state.hotels.searchResults?.results?.map(result => (
								<div>
									<Link to={'/hotel/' + result.id}>
										<Flex>
											<Space x="20" />
											<Img src={result.optimizedThumbUrls.srpDesktop} />
											<div style={{ padding: '0 25px' }}>
												<H2>{result.name}</H2>
												<Space y="20" />
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
												<Space y="50" />
												<Div>
													<P color="#222" weight="bold" size="24">
														{result.ratePlan?.price?.current}
													</P> <Space x="3" />
													<P>/ night</P>
												</Div>
											</div>
										</Flex>
									</Link>
									<Space y="40" />
									<hr
										style={
											({ color: 'rgb(113, 113, 113)' }, { width: '650px' })
										}
									/>
									<Space y="40" />
								</div>
						  ))
						: null}
					<Space y="20" />
				</Grid>
			</div>
		</div>
	);
};

export default Hotels;