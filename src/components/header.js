import React from 'react';
import { Link } from "gatsby";

export default function Header({ isRootPath }) {
  const siteTitle = "<SilipiDEV/>";

  if (isRootPath) {
    return (
      <header className="header-index">
        <h1>{siteTitle}</h1>
        <h3>Sou o Gabriel Silipi, um desenvolvedor curioso para aprender novas tecnologias.</h3>
        <p>E este é um site para demonstrar meu trabalho, meus projetos <br/> e algumas coisas que gosto e escrevo.<br />
        Espero que goste!
        </p>
      </header>
    )
  } else {
    return (
      <header className="header-posts">
        <Link to="/">{siteTitle}</Link>
      </header>
    )
  }
}