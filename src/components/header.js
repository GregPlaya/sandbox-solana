import * as React from "react"
import PropTypes from "prop-types"
import { motion } from "framer-motion"

const Header = ({ siteTitle }) => (
  <header className="banner">
  <div className="wrapper">
    <div className="d-flex justify-content-between align-items-center">
      <div>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{
          type: "linear",
          duration: 0.3,
          delay: 0.2
        }}
      >
        <img src={'/logo.svg'} alt="Zephyr" />
      </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{
          type: "linear",
          duration: 0.3,
          delay: 0.3
        }}
      >
      <div className="coming-soon">
        New Website Coming Soon
      </div>
      </motion.div>
    </div>
  </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
