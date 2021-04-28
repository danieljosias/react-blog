import React from 'react';
import logo from '../../img/logo.png';

export default function Header() {
 return (
   
   <div>
    <header className="cabecalho">
      <h1>React Blog</h1>

      <div className="cabecalho-img" >
        <img src={logo} alt="logo react" />
      </div>
    </header>
   </div>
   
 );
}