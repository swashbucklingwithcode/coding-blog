import React, { useState } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

// Import typefaces
import 'typeface-crimson-text'
import 'typeface-fira-mono'
import 'typeface-fira-sans'

import { rhythm, scale } from '../utils/typography'

const Layout = props => {
  const data = useStaticQuery(BACKROUND_IMAGE_QUERY)
  const { location, title, children } = props
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.4),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: 'none',
            textDecoration: 'none',
            color: 'inherit',
          }}
          to={'/'}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          marginTop: 0,
          marginBottom: rhythm(0.6),
        }}
      >
        <Link
          style={{
            boxShadow: 'none',
            textDecoration: 'none',
            color: 'inherit',
          }}
          to={'/'}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: rhythm(28),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <Img
        style={{
          position: 'absolute',
          zIndex: -1,
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
        fluid={data.file.childImageSharp.fluid}
        alt=""
      />
      {header}
      {children}
    </div>
  )
}

export default Layout
// Photo by daniel james on Unsplash

const BACKROUND_IMAGE_QUERY = graphql`
  query backgroundImageQuery {
    file(relativePath: { eq: "brick-bg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
