import React from "react"

import Header from "./header";

export default function Container({ location, children }) {
  const isRootPath = location.pathname === `${__PATH_PREFIX__}/`;

  return (
    <div className="container">
      <Header isRootPath={isRootPath} />
      <main>{children}</main>
      <footer>
        Construído com <span role="img" aria-label="Emoji coração roxo">💜</span> e <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}