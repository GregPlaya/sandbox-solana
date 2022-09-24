import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const ResPage = () => {

  return (
    <Layout>      
      <section className="">
        <div>
           <h1>Lightbox App</h1>
         <h2>My Gallery</h2>
          <StaticImage src="../images/sandbox-solana-beach-residential-living-leasing-Unit-Type-A.jpg" alt=""/>
       </div>
      </section>
    </Layout>
  )
}

export default ResPage
