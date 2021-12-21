import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
	ButtonSearch,
	DivSearch,
	Header,
	Input,
    Results,
} from '../components/searchStyle';
import { getSuggestions } from '../store/hotelSlice';
import search from './icons8-search-24.png';

const Search = () => {
	const state = useSelector(state => state);
	const dispatch = useDispatch();
	const [query, setQuery] = useState();

	const searchHotel = () => {
		dispatch(getSuggestions(query));
	};
	return (
        <>
		<Header>
			<DivSearch>
				<Input
					onChange={e => setQuery(e.target.value)}
					type="text"
					placeholder="search location"
				/>
                <Input
					onChange={e => setQuery(e.target.value)}
					type="text"
					placeholder="check in"
				/>
                <Input
					onChange={e => setQuery(e.target.value)}
					type="text"
					placeholder="check out"
				/>
                <Input
					onChange={e => setQuery(e.target.value)}
					type="text"
					placeholder="guests"
				/>

				<ButtonSearch onClick={searchHotel}>
					<img src={search} alt="" />
				</ButtonSearch>
                
			</DivSearch>
		</Header>
        
             <Results className='container'>
			{state.status === 'fulfilled'
				? state.suggestions?.suggestions[0]?.entities?.map(suggestion => {
						return (
							
                                <Link className='link' to={'/hotels/' + suggestion.destinationId}>
								<div dangerouslySetInnerHTML={{ __html: suggestion.name }} />
							    </Link>
                            
						);
				  })
				: null}
                </Results>
        
                </>
	);
};

export default Search;