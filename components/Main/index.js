import React from 'react';
import card1 from '../../img/card1.jpg'
import card2 from '../../img/card2.jpg'
import card3 from '../../img/card3.jpg'
import card4 from '../../img/card4.jpg'
import card5 from '../../img/card5.jpg'
import card6 from '../../img/card6.jpg'

export default function Main() {
 return (
   <div>
     <main>
       
      <h2>Você sabia?</h2>
        <div className="card-container">

          <div className="card">
            <img className="img-card" src={card1} alt=""/>
            <h3>Components</h3>
            <p className="card-text">No React, o component pode ser criado através de uma function ou class.👨‍💻</p>
          </div>

          <div className="card">
            <img className="img-card" src={card2} alt=""/>
            <h3>Props</h3>
            <p className="card-text">As props são responsáveis em enviar dados para dentro do component.💻</p>
          </div>

          <div className="card">
            <img className="img-card" src={card3} alt=""/>
            <h3>States</h3>
            <p className="card-text">O state envia dados para dentro do component mas pode sofrer alterações.📚</p>
          </div>
          
        </div>
        <div className="card-container">

          <div className="card">
            <img className="img-card" src={card4} alt=""/>
            <h3>React Hooks</h3>
            <p className="card-text">Permite que você use estado e outras features do React sem ter a necessidade de escrever uma classe.👨‍💻</p>
          </div>

          <div className="card">
            <img className="img-card" src={card5} alt=""/>
            <h3>Context API</h3>
            <p className="card-text">Fornece uma maneira de passar os dados de componentes sem ter que passar manualmente em todos os níveis.💻</p>
          </div>

          <div className="card">
            <img className="img-card" src={card6} alt=""/>
            <h3>Styled Components</h3>
            <p className="card-text">Nos permite escrever códigos CSS dentro do Javascript.📚</p>
          </div>
          
        </div>

        
       
     </main>
   </div>
 );
}