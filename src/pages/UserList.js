import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import Card from '../components/Card'


const UserList = () => {
    const [listData, setListData]=useState([]);
    useEffect(()=>{
        let moviesId = window.localStorage.movies ? 
        window.localStorage.movies.split(','): [];

        for(let i = 0; i<moviesId.length; i++){

        axios
            .get(`https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=5aef86edd366aff8e72152ef1b07c097&language=en-US`)
            .then((res)=>{setListData((listData)=>[...listData, res.data])});
        }
    },[])
    return (
        <div className='user-list-page'>
            <Header />
            <h2>Favorites <span>❤️</span></h2>
            <div className='result'>
            {
    
                listData.length > 0 ? (
                listData.map((movies,index)=>{
                    return <Card  key ={index} movie={movies}/>},window 
                    ))
                : (<h2>No favorites for the moment</h2>)
            }
            </div>
        </div>
    );
};

export default UserList;