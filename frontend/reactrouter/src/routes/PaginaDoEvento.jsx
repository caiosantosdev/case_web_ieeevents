import React from 'react';
import "../styles/paginaevento.css";
//import {blurRadius} from 'react-native'
import { Heart } from "phosphor-react";
import coracao from "../assets/imagens/heart.svg"
import{Calendar} from "phosphor-react";

import{Clock} from "phosphor-react";
import{MapPinLine} from "phosphor-react";

import image from "../assets/imagens/eventoHalloween.jpg";


export const PaginaDoEvento = () => {

    return (

        <div className="container2">
            <div className="wrap2">
                <div className='groupimage'>
                    <div className="imagens"></div>
                    <img src={image} className='imagenev' alt="Evento1"></img>
                </div>

                <div className="infoev">
                    <p className='nomeEV'>Festa de Halloween</p>
                    <Calendar className= "icone_calendario" size={36} />
                    <Clock className='icone_relogio' size={36} />
                    <MapPinLine className= 'icone_loc'size={36} />
                </div>
                <div className="favoritar">
                <input type="checkbox" id="coracao2"/>    
                <label htmlFor="coracao2">
                <svg width="40" height="50" viewBox="0 0 24 22" fill="none" class="heart" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.8397 3.49592C20.329 2.98492 19.7226 2.57957 19.0551 2.303C18.3876 2.02644 17.6722 1.88409 16.9497 1.88409C16.2273 1.88409 15.5118 2.02644 14.8444 2.303C14.1769 2.57957 13.5705 2.98492 13.0597 3.49592L11.9997 4.55592L10.9397 3.49592C9.90805 2.46423 8.50877 1.88463 7.04974 1.88463C5.5907 1.88463 4.19143 2.46423 3.15974 3.49592C2.12805 4.52761 1.54845 5.92689 1.54845 7.38592C1.54845 8.84495 2.12805 10.2442 3.15974 11.2759L4.21974 12.3359L11.9997 20.1159L19.7797 12.3359L20.8397 11.2759C21.3507 10.7652 21.7561 10.1587 22.0327 9.49127C22.3092 8.82382 22.4516 8.10841 22.4516 7.38592C22.4516 6.66343 22.3092 5.94802 22.0327 5.28056C21.7561 4.61311 21.3507 4.00668 20.8397 3.49592V3.49592Z" stroke="#D73B3B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </label>
                    <p className='like'>Favoritar</p>

                </div>
            </div>
        </div>
    )

}
 
 export default PaginaDoEvento