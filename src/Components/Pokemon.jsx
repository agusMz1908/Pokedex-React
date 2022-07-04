import React from 'react'
import ImagenPokemon from './ImagenPokemon'
import { Link } from 'react-router-dom'


const Pokemon = ({id, image, name, type, key}) => {

    return (
    <Link 
        to={`/details/${id}`}

    >
        <div className={`flex flex-col h-[200px] w-[200px] m-[15px] justify-between bg-white/50 shadow nav border${type} capitalize rounded-xl border-2`}>
            <div className="flex justify-end pr-[10px]">
            <p className={`id${type} font-bold`}>#{id}</p>
            </div>
            <div className="flex items-center justify-center">
                <ImagenPokemon
                    image={image}
                />
            </div>
            <div className={`w-full h-[30px] flex flex-col text-black background${type} items-center justify-center rounded-b-[12px]`}>
                <h3 className={`font-semibold `}>{name}</h3>
            </div>
        </div>
    </Link>
  )
}

export default Pokemon