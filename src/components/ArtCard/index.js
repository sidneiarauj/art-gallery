import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom'

function ArtCard( { imgName, title, id } ) {
    return (
        <div className='ArtCard'>
            <Link to={`${id}`}>
                <img src={`./arts/${imgName}`} alt={`Imagem do projeto ${title}`}/>
                <h1>{ title }</h1>
            </Link>
        </div>
    )
}

export default ArtCard;