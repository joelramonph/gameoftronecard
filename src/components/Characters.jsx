import React from 'react'

export const Characters = ({character}) => {

 console.log(character)
  return (
    <article className='card'>
    <h3 className='card__name'>{character?.fullName}</h3>
        <img className='card__img' src={character?.imageUrl} alt="" />
        
        <p className='card__title'>{character?.title}</p>
    </article>
  )
}
