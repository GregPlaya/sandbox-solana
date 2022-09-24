import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import LightBox from "../components/lightbox"

const ResPage = () => {

  return (
    <Layout>      
      <section className="">
        <div>
           <h1>Lightbox App</h1>
         <h2>My Gallery</h2>
          <LightBox src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" alt="React Logo">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" width="100px" height="100px" alt="React Logo" />
      </LightBox>
       </div>
      </section>
    </Layout>
  )
}

export default ResPage
