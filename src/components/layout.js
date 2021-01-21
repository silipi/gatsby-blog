import React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      {!isRootPath && 
        <header className="global-header">
          <Link className="header-link-home" to="/">
            {title}
          </Link>
        </header>
      }
      <main>{children}</main>
      <footer>
        Construído com <span role="img" aria-label="Emoji coração roxo">💜</span> e <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
