import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
    return (                
    <article className="teacher-item">
        <header>
            <img src="https://avatars0.githubusercontent.com/u/67802605?s=460&u=a709d8bb80a43019b49737b767ed11e4028f742f&v=4" alt="Mateus Rizzo"/>
            <div>
                <strong>Mateus Rizzo</strong>
                <span>Química</span>
            </div>
        </header>
        <p>
            Entusiasta das melhores tecnologias de fabricação de explosivos.
            <br/><br/>
            Apaixonado por explodir, detonar e destruir. Já ajudei milhares de pessoas a começar a semana destruindo.
            <footer>
                <p>
                    Preço/hora
                    <strong>R$80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </button>
            </footer>
        </p>
    </article>
);
}

export default TeacherItem;