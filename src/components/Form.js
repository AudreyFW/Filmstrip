import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import Card from './Card';

const Form = () => {
    const [moviesData, setMoviesData]= useState([]);
    const [search, setSearch]=useState(['Wonder Woman']);
    const [sortGoodBad, setSortGoodBad]=useState(null);

    useEffect(()=>{
        axios
        .get(
            `https://api.themoviedb.org/3/search/movie?api_key=5aef86edd366aff8e72152ef1b07c097&query=${search}&language=en-US`

        )
        .then((res)=>setMoviesData(res.data.results))
    }, [search])

    return (
        <div className='form-component'>
            <div className='form-container'>
                <form>
                    <input 
                        type='text' 
                        placeholder='Search a movie'
                        id='search-input'
                        onChange={(e)=>setSearch(e.target.value)}/>
                </form>
                <div className='btn-sort-container'>
                    <div 
                        className='btn-sort' 
                        id='goodToBad'
                        onClick={()=> setSortGoodBad("goodToBad")}>
                            Top<span>➡</span>
                    </div>
                    <div 
                        className='btn-sort'
                        id='badToGood'
                        onClick={()=> setSortGoodBad("badToGood")}>
                            Flop<span>➡</span>
                    </div>
                </div>
            </div>
            <div className='result'>
                {
                    moviesData
                    .slice(0, 24)
                    .sort((a, b) => {
                        let voteAverage;
                        if(sortGoodBad==='goodToBad'){
                            return voteAverage = b.vote_average-a.vote_average}
                        else if(sortGoodBad==='badToGood'){
                            return voteAverage= a.vote_average-b.vote_average}
                        return voteAverage;
                    })
                    .map((movie)=>
                    <Card key={movie.id} movie={movie}/>)
                }
                
            </div>
        </div>
    );
};

export default Form;