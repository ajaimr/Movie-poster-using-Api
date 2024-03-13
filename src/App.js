import React, { useEffect, useState } from 'react'
import Movie from './component/movie.js'
import Moviesheading from './component/moviesheading.js';
import Inputcomponent from './component/inputcomponent.js';
import './App.css'
const App = () => {
  const[movies,setmovies]=useState([]);
  const [inputValue, setInputValue] = useState('leo'); // Assuming you have an input value state

  async function apiprocess(){
    const url=`http://www.omdbapi.com/?s=${inputValue}&apikey=f3305d0a`
    const api=await fetch(url);
    const response=await api.json();
    setmovies(response.Search);

  }
  useEffect(() => {
    apiprocess();
  }, [inputValue]);
  return (

      <div>
      <Moviesheading/>
    
      <Inputcomponent setInputValue={setInputValue}/>
  <Movie movies={movies||[]}/>
    </div>
  )
}

export default App