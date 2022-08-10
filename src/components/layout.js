/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { motion } from "framer-motion"

import Footer from "./footer"

import "../styles/layout.css"

const Layout = ({ children }) => {
  return (
    <div>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          type: "linear",
          duration: 0.1,
          delay: 0,
        }}
      >
        <div>
          <main>{children}</main>
          <Footer />
        </div>
      </motion.main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
