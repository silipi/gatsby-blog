import React from 'react';
import { Link } from "gatsby";

export default function Header({ isRootPath }) {
  const siteTitle = "<HelloWorld />";

  if (isRootPath) {
    return (
      <header className="header-index">
        <h1>{siteTitle}</h1>
        <h3>Sou o Gabriel Silipi, um desenvolvedor curioso para aprender novas tecnologias.</h3>
        <p>E este é um site que criei com o intuito de demonstrar meu trabalho, meus projetos e algumas coisas que gosto.<br />
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