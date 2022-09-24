import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import LightBox from "../components/lightbox"

import "../styles/residential.css"
import SubscribeFormRes from "../components/mailchimp-form-res"

const ResidentialPage = () => {
  return (
    <Layout>
      <Seo title="Sandbox Solana - Residential" />
      <section className="full">
        <div style={{ display: "grid" }}>
          <StaticImage
            style={{
              gridArea: "1/1",
            }}
            layout="fullWidth"
            alt=""
            src={"../images/sierra-ave-2.jpg"}
            formats={["auto", "webp", "avif"]}
          />
          <div
            style={{
              gridArea: "1/1",
              position: "relative",
              justifyContent: "center",
              display: "grid",
            }}
            className="residential-logo-wrapper"
          >
            <Link to="/" style={{ padding: "30px" }}>
              <img
                className="img-fluid logo"
                src={"/logo-white.svg"}
                alt="Sandbox"
              />
            </Link>
          </div>
        </div>
      </section>
      <section className="full">
        <div
          className="bg-orange color-white align-center d-flex align-items-center justify-content-center"
          style={{ minHeight: "50vh" }}
        >
          <div className="desc-box">
            <div className="short-desc font-com mb-100">
              Welcome to your Solana Beach home. West of the 101 and just steps
              from the beach, Sandbox offers residents modern, integrated living
              spaces in a local neighborhood atmosphere.
            </div>
            <div className="short-desc caps font-com font-bold">
              Newly constructed modern living in highly desirable coastal
              community
            </div>
            <hr className="bg-white my-40" />
            <div className="short-desc caps font-com font-bold">
              7 - 1 bedroom units
              <span className="d-none d-sm-inline">
                &nbsp;&nbsp;|&nbsp;&nbsp;
              </span>
              <br className="d-sm-none" />
              18 - 2 bedroom units
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="d-md-flex">
          <div className="col-12 col-md-6">
            <StaticImage src="../images/yellow-chair-1.png" alt="" />
          </div>
          <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
            <div className="desc-box">
              <div className="short-desc font-com color-blue align-center">
                Want to <br /> live at Sandbox?
                <SubscribeFormRes />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="full">
        <div className="row bg-orange color-white align-center d-flex align-items-center justify-content-center px-2 res-grid" style={{ minHeight: "50vh" }}>
           <div className="col-12 col-md-3 col-lg-3">
             <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained">
                <LightBox src="https://raw.githubusercontent.com/GregPlaya/sandbox-solana/main/src/images/sandbox-solana-beach-residential-living-leasing-Unit-Type-A.jpg" alt="React Logo">
    <img src="https://raw.githubusercontent.com/GregPlaya/sandbox-solana/main/src/images/sandbox-solana-beach-residential-living-leasing-Unit-Type-A.jpg" alt="Unit Type A" />      
              </LightBox> 
            </div>
             <div className="short-desc caps font-com font-bold mt-50">
              Unit Type A
             </div>
             <hr className="bg-white my-20 mx-5" />
             <div className="short-desc font-com font-20">
              7 - 1 bedroom units
              <span className="d-none d-sm-inline">
                &nbsp;&nbsp;|&nbsp;&nbsp;
              </span>
              <br className="d-sm-none" />
              2 Bed + 2 Bath 1,220 sf
              </div>
          </div>
<div className="col-12 col-md-3 col-lg-3">
             <StaticImage src="../images/sandbox-solana-beach-residential-living-leasing-Unit-Type-A.jpg" alt=""/>
             <div className="short-desc caps font-com font-bold mt-50">
              Unit Type A
             </div>
             <hr className="bg-white my-20 mx-5" />
             <div className="short-desc font-com font-20">
              7 - 1 bedroom units
              <span className="d-none d-sm-inline">
                &nbsp;&nbsp;|&nbsp;&nbsp;
              </span>
              <br className="d-sm-none" />
              2 Bed + 2 Bath 1,220 sf
              </div>
          </div>
<div className="col-12 col-md-3 col-lg-3">
             <StaticImage src="../images/sandbox-solana-beach-residential-living-leasing-Unit-Type-A.jpg" alt=""/>
             <div className="short-desc caps font-com font-bold mt-50">
              Unit Type A
             </div>
             <hr className="bg-white my-20 mx-5" />
             <div className="short-desc font-com font-20">
              7 - 1 bedroom units
              <span className="d-none d-sm-inline">
                &nbsp;&nbsp;|&nbsp;&nbsp;
              </span>
              <br className="d-sm-none" />
              2 Bed + 2 Bath 1,220 sf
              </div>
          </div>
<div className="col-12 col-md-3 col-lg-3">
             <StaticImage src="../images/sandbox-solana-beach-residential-living-leasing-Unit-Type-A.jpg" alt=""/>
             <div className="short-desc caps font-com font-bold mt-50">
              Unit Type A
             </div>
             <hr className="bg-white my-20 mx-5" />
             <div className="short-desc font-com font-20">
              7 - 1 bedroom units
              <span className="d-none d-sm-inline">
                &nbsp;&nbsp;|&nbsp;&nbsp;
              </span>
              <br className="d-sm-none" />
              2 Bed + 2 Bath 1,220 sf
              </div>
          </div>
       </div>
      </section>
    </Layout>
  )
}

export default ResidentialPage
