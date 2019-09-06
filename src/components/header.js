import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Logo from "../assets/logo.svg";

import "../styles/components/header.scss"

const Header = ({ siteTitle }) => (
  <header className="header">
    <h1 className="header__logo">
      <Link
        to="/"
        style={{
          textDecoration: `none`,
        }}
        title={siteTitle}
      >
        <Logo/>
      </Link>
    </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
