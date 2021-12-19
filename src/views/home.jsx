import React from 'react';
import { ButtonSearch, DivSearch, Header, Input } from '../components/searchStyle';
import search from "./icons8-search-24.png"

const Home = () => {
    return (
        <Header>
            <DivSearch>
                <Input type="text" placeholder='search location' />
                <ButtonSearch><img src={search} alt="" /></ButtonSearch>
            </DivSearch>
        </Header>
    )
}

export default Home;