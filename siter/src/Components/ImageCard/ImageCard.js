import React, {Fragment} from 'react';
import './ImageCard.scss';


export const ImageCard=({src, onClick, id})=>{

    return(
        <Fragment>
            <img src={src} className='image-card' onClick={onClick} id={id}/>
        </Fragment>
    )

}