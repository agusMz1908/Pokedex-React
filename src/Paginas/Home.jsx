import React from 'react'
import Header from '../Components/Header'
import PokemonList from '../Components/PokemonList'
import Search from '../Components/Search'
import Cargando from '../Components/Cargando'
import { useState, useEffect } from 'react'

const Home = () => {

  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonCopies, setPokemonCopies] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [search, setSearch] = useState('');


  const getPokemonList = async () => {
    setCargando(true)
    const result = await fetch('https://us-central1-senpai-9b555.cloudfunctions.net/getFullList')
    const data = await result.json();
    setPokemonList(data)
    setPokemonCopies(data)
    console.log(data)
    setCargando(false)
  }

  useEffect(() => {
    getPokemonList();
  }, [])
   
  const handleStr = () => {
    const strAscending = [...pokemonList].sort((a,b) => 
      a.name < b.name ? -1 : 1
    );
    setPokemonList(strAscending)
  }

  const handleNum = () => {
    const numAscending = [...pokemonList].sort((a,b) =>
      a.id - b.id
    );
    setPokemonList(numAscending)
  }

  return (
    <div className="h-screen border-l-[2px] border-r-[2px] border-black bg-cover bg-[url('https://media4.giphy.com/media/lnPhJo0JTp57O/giphy.gif')] overflow-y-hidden">       
      <div className="overflow-y-scroll h-full">
        <PokemonList
          pokemonList={pokemonList.filter((pokemon) => pokemon.name.match(search))} /* buscador (desde .filter en adelante) */
          handleStr={handleStr}
          handleNum={handleNum}
          setSearch={setSearch}
          cargando={cargando}
        /> 
      </div>
    </div>
  )
}

export default Home 
