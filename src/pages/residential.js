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
        <div className="bg-orange color-white align-center d-flex align-items-center justify-content-center" style={{ minHeight: "50vh" }}>
          <div className="desc-box">
             <div className="short-desc caps font-com font-bold mb-50">
              CHIC BEACHSIDE LUXURY RESIDENCES FOR RENT
            </div>
            <div className="short-desc font-com font-20 mb-100 align-left line-1-5">
              <p>Welcome to your Solana Beach home. This newly constructed, modern, coastal multi-family retreat offers residents the ability to experience the luxury Southern California lifestyle. Steps from San Diego’s stunning north county coast, shopping, dining and recreation, living at Sandbox means you are at the center of a dynamic and thriving neighborhood.</p> 
              
             <p> Open the door to your modern sanctuary and the design of these distinctive apartment units immediately provides a seamless flow between indoor and outdoor spaces. Upscale amenities and finishes like quartz countertops, stainless steel appliances, soft close European cabinets and walk-in closets are rivaled only by cutting-edge technologies like electronic access controls and EV charging stations. The expansive 1 - and 2 - bedroom units beckon you to prepare dinner with friends, lounge on a private patio and watch the night sky, and then sink into bed where sweet dreams of the beach will lull you to sleep. </p> 
              
             <p> Be seduced by the neighborhood, be charmed by the residences, and be inspired for your life.</p> 
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
          <div className="col-12 col-md-8 align-items-center justify-content-center">
             <div className="headline caps font-com font-bold">
              <h1>PROPERTY FEATURES</h1>
            </div>
            <div className="desc-box property-desc-box">
              <div className="font-com align-left res-property-list">
                <h5>INTERIOR</h5>
<ul>
  <li>Quartz Countertops</li>
  <li>European-style Cabinets w/Soft Close</li>
  <li>Stylish Wood-like Flooring</li>
  <li>Stainless Steel Appliances</li>
  <li>Gas Range &amp; Hood, Dishwasher, Refrigerator,  Microwave</li>
  <li>Washer &amp; Gas Dryer</li>
  <li>Recessed LED Lighting</li>
  <li>Decora Switches/USB Outlets</li>
  <li>Kohler Faucets &amp; Fixtures</li>
  <li>Sizable 1 &amp; 2 Bedroom Floorplans</li>
  <li>Standalone bathtub *</li>
  <li>Street accessible front doors *</li>
  <li>Large walk-in master closets *</li>
  <li>Balconies or Patios</li>
</ul>
*Amenity available in select units            
              </div>
              <div className="font-com align-left res-property-list">
                <h5>EXTERIOR</h5>
<ul>
  <li>Luxury Coastal Living</li>
  <li>2-Minute Walk to the Beach</li>
  <li>Food &amp; Beverage/Retail Options</li>
  <li>Walk to Restaurants</li>
  <li>Electronic Access Controls</li>
  <li>Assigned Subterranean Garage Parking with  Private Entrance</li>
  <li>Elevator Access to Parking Garage</li>
  <li>Electric Vehicle Charging Stations Available</li>
  <li>On-site Storage</li>
  <li>Post-Beach Foot Wash</li>
</ul>            
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <StaticImage src="../images/sandbox-solana-beach-residential-living-leasing-property-features-woman-floating-in-ocean-on-a-tube.jpg" alt="" />
          </div>         
        </div>
      </section>
      <section className="full">
        <div className="row bg-orange color-white align-center d-flex align-items-center justify-content-center px-2 res-grid" style={{ minHeight: "50vh" }}>
           <div className="col-12 col-md-3 col-lg-3 res-grid-box">
                <LightBox src="https://raw.githubusercontent.com/GregPlaya/sandbox-solana/main/src/images/sandbox-solana-beach-residential-living-leasing-Unit-Type-A.jpg" alt="Unit Type A">
    <img src="https://raw.githubusercontent.com/GregPlaya/sandbox-solana/main/src/images/sandbox-solana-beach-residential-living-leasing-Unit-Type-A.jpg" alt="Unit Type A" />      
              </LightBox> 
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
           <div className="col-12 col-md-3 col-lg-3 res-grid-box">
                <LightBox src="https://raw.githubusercontent.com/GregPlaya/sandbox-solana/main/src/images/sandbox-solana-beach-residential-living-leasing-Unit-Type-B.jpg" alt="Unit Type B">
    <img src="https://raw.githubusercontent.com/GregPlaya/sandbox-solana/main/src/images/sandbox-solana-beach-residential-living-leasing-Unit-Type-B.jpg" alt="Unit Type B" />      
              </LightBox> 
             <div className="short-desc caps font-com font-bold mt-50">
              Unit Type B
             </div>
             <hr className="bg-white my-20 mx-5" />
             <div className="short-desc font-com font-20">
              7 - 1 bedroom units
              <span className="d-none d-sm-inline">
                &nbsp;&nbsp;|&nbsp;&nbsp;
              </span>
              <br className="d-sm-none" />
              2 Bed + 2 Bath 1,085 sf
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
    </Layout>
  )
}

export default ResidentialPage
