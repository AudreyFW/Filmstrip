import React from 'react';
import ticket from '../media/ticket.jpg';

const Card = ({movie}) => {

    const dateFormater =(date)=>{
        let [yy, mm, dd]=date.split("-");
        return [dd, mm, yy].join("/");
    };
    
    let genreFinder=()=>{
        let genreArray =[];
        for (let i=0; i<movie.genre_ids.length;i++){
            switch(movie.genre_ids[i]){
                case 28:
                    genreArray.push('Action');
                    break;
                case 12: 
                    genreArray.push('Adventure');
                    break;
                case 16:
                    genreArray.push('Animation');
                    break;
                case 35:
                    genreArray.push('Comedy');
                    break;
                case 80:
                    genreArray.push('Crime');
                    break;
                case 99:
                    genreArray.push('Documentary');
                    break;
                case 18: 
                    genreArray.push('Drama');
                    break;
                case 107551:
                    genreArray.push('Family');
                    break;
                case 14:
                    genreArray.push('Fantasy');
                    break;
                case 36:
                    genreArray.push('History');
                    break;
                case 27:
                    genreArray.push('Horror');
                    break;
                case 10402:
                    genreArray.push('Music');
                    break;
                case 9648:
                    genreArray.push('Mystery');
                    break;
                case 10749:
                    genreArray.push('Romance');
                    break;
                case 878:
                    genreArray.push('Science Fiction');
                    break;
                case 10770:
                    genreArray.push('TV Movie');
                    break;
                case 53:
                    genreArray.push('Thriller');
                    break;
                case 10752:
                    genreArray.push('War');
                    break;
                case 37:
                    genreArray.push('Western');
                    break;
                default: 
                    break;
            }
        }
        return genreArray.map((genre)=><li key={genre}>{genre}</li>);
    };
    const addStorage=()=>{

        let storedData = window.localStorage.movies
        ? window.localStorage.movies.split(',')
        : [];

        if(!storedData.includes(movie.id.toString())){
        storedData.push(movie.id);
        window.localStorage.movies = storedData;
        }
    };

    const deleteStorage =()=>{
        let storedData= window.localStorage.movies.split(',');
        // eslint-disable-next-line eqeqeq
        let newData = storedData.filter((id)=>id != movie.id);
        window.localStorage.movies = newData;
    };

    return (
        <div className='card'>
            <img 
            src={movie.poster_path ? 'https://image.tmdb.org/t/p/w500'+ movie.poster_path : ticket}
            alt='film-poster'/>
           <h2>{movie.title}</h2>
           {
            movie.release_date? (<h5>Realase on : {dateFormater(movie.release_date)}</h5> ): ("")
           }
           <h4>{movie.vote_average}/10 <span>⭐️</span></h4>
           <ul>{
            movie.genre_ids?
                 (genreFinder())
                : (movie.genres.map((genre, index)=>(<li key={index}>{genre.name}</li>)))
           }</ul>
           {
            movie.overview? (<h3>Synopsis</h3>):('')
           }
           <p>{movie.overview}</p>
           {
            movie.genre_ids? 
            ( <div className='btn' onClick={()=>{addStorage()}}>
            Add to favorites</div> )
            :(<div className='btn' 
            onClick={()=>{deleteStorage();}}>Remove from favorites</div>)
           }
        </div>
    );
};

export default Card;
