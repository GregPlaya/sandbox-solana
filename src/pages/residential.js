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
        <div
          className="sierra-ave color-white relative d-flex justify-content-center"
          style={{ minHeight: "50vh" }}
        >
          <div className="col-12 col-lg-4 justify-content-center res-nav-left d-flex">
          			<p style={{ padding: "30px" }}>Marilyn Comiskey<br />
               		<a href="tel:+18582901444">858.290.1444</a><br/>
              		<a href="mailto:info@sandboxsolana.com">info@sandboxsolana.com</a></p>
          		</div>
          <div className="col-12 col-lg-4 justify-content-center res-nav-middle d-flex">
          <Link to="/" style={{ padding: "30px" }}>
              <img
                className="img-fluid logo"
                src={"/logo-white.svg"}
                alt="Sandbox"
              />
            </Link>
           </div>
         <div className="col-12 col-lg-4 justify-content-center res-nav-right d-flex">
             		<p style={{ padding: "30px" }}><a href="mailto:info@sandboxsolana.com"><span class="res-nav-headline">LEASE NOW</span><br/>
             		STARTING AT $5,750</a></p>       
          		</div>
        </div>
      </section>
  <section className="res-info-nav-mobile">
        <div
          className="bg-blue d-flex align-items-center justify-content-center"
          style={{ minHeight: "50vh" }}
        >
          <div className="desc-box">
            <div className="res-nav-right">
             	  <p style={{ padding: "30px" }}><a href="mailto:info@sandboxsolana.com"><span class="res-nav-headline">LEASE NOW</span><br/>
             		STARTING AT $5,750</a></p>   
            </div>
            <div className="short-desc font-com color-white align-center res-nav-left">
          			<p style={{ padding: "30px" }}>Marilyn Comiskey<br />
               		<a href="tel:+18582901444">858.290.1444</a><br/>
              		<a href="mailto:info@sandboxsolana.com">info@sandboxsolana.com</a></p>
              </div>            
          </div>
        </div>
      </section>
      <section className="full">
        <div className="bg-orange color-white align-center d-flex align-items-center justify-content-center" style={{ minHeight: "50vh" }}>
          <div className="desc-box res-intro-main">
             <div className="short-desc caps font-com font-bold mb-20">
              CHIC BEACHSIDE LUXURY RESIDENCES FOR RENT
            </div>
            <div className="short-desc font-com font-20 mb-50 align-left line-1-5">
              <p>Escape to your Solana Beach retreat. This is an unmatched address with a rare location adjacent to Cedros Ave, offering instant access to North County’s best shopping, world-class dining, and galleries. These brand new, modern, coastal apartments offer residents the ability to experience the finest Southern California lifestyle. Steps from San Diego’s stunning north county coast, top eateries, and recreation, living at Sandbox means you are at the center of a dynamic and thriving neighborhood.</p> 
              
             <p>Open the door to your modern sanctuary and the design of these distinctive apartments immediately provides a seamless blend of indoor and outdoor living. Luxury finishes like quartz countertops, stainless steel appliances, soft close European cabinets and walk-in closets are rivaled only by cutting-edge technologies like electronic access controls and EV charging stations. The expansive 1 - and 2 - bedroom units beckon you to prepare dinner with friends, lounge on a private patio and watch the night sky, and then sink into bed where sweet dreams of the beach will lull you to sleep.</p> 
              
             <p><strong>Be seduced by the neighborhood, be charmed by the residences, and be inspired for your life.</strong></p> 
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
             <div className="headline caps font-com font-bold property-title">
              <h1>PROPERTY FEATURES</h1>
            </div>
            <div className="desc-box property-desc-box">
              <div className="font-com align-left res-property-list">
                <h5>INTERIOR</h5>
<ul>
  <li>Sizable 1 & 2 Bedroom Floorplans</li>
  <li>Large Walk-in Master Closets *</li>
  <li>Expansive Balconies or Patios</li>
  <li>Stainless Steel Appliances</li>
  <li>European-style Cabinets with Soft Close</li>
  <li>Washer &amp; Gas Dryer</li>
  <li>Stylish Wood-like Flooring</li>
  <li>Standalone Bathtub *</li>
  <li>Quartz Countertops</li>
  <li>Gas Range & Hood, Dishwasher, Refrigerator, Microwave</li>
  <li>Recessed LED Lighting</li>
  <li>Decora Switches/USB Outlets</li>
  <li>Kohler Faucets & Fixtures</li>
  <li>Street accessible Front Doors *</li>
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
  <li>Gated Secure Garage with Assigned Parking and Private Entrance</li>
  <li>Elevator Access to Parking Garage</li>
  <li>
Ample Guest Parking</li>
  <li>Electric Vehicle Charging Stations Available</li>
  <li>On-site Storage</li>
  <li>Post-Beach Foot Wash</li>
   <li>Electronic Access Controls</li>
</ul>            
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 res-property-decoration">          
          </div>         
        </div>
      </section>
      <section>
        <div className="row bg-orange color-white align-center d-flex justify-content-center px-2 res-grid-first" style={{ minHeight: "50vh" }}>
            <div className="headline font-com font-bold color-white align-left mb-20">
              <h1>PRIORITY! Now Leasing the following Premiere Residences:</h1>
            </div>                     
          <div class="row d-flex justify-content-center">
          <div class="col-lg-2 col-md-6">
            <div className="short-desc font-com font-20"> 
            “A” Floorplan: Unit 107<br/>
            2 Bed + 2 Bath<br/>
            2 parking spaces + storage unit <br/>
            $7695
            </div>
          </div>
          <div class="col-lg-2 col-md-6">
            <div className="short-desc font-com font-20"> 
            “B” Floorplan: Unit 102<br/>
            2 Bed + 2 Bath<br/>
            2 parking spaces + storage unit <br/>
            $6795
            </div>
          </div>

          <div class="col-lg-2 col-md-6">
            <div className="short-desc font-com font-20"> 
           “E” Floorplan: Unit 213<br/>
            2 Bed + 2 Bath Penthouse<br/>
            2 parking spaces + storage unit <br/>
            $8,795
            </div>
          </div>

          <div class="col-lg-2 col-md-6">
            <div className="short-desc font-com font-20"> 
            “F” Floorplan: Unit 108<br/>
            1 Bed + 1 Bath<br/>
            2 parking spaces + storage unit <br/>
            $5,895
            </div>
          </div>

          <div class="col-lg-2 col-md-6">
            <div className="short-desc font-com font-20"> 
           “G” Floorplan: Unit 210<br/>
            2 Bed + 2 Bath Penthouse <br/>
            2 parking spaces + storage unit <br/>
            $8,250
            </div>
          </div>
</div>          
          
            <div className="headline caps font-com font-bold color-white align-left mb-20">
              <h1>FLOOR PLANS</h1>
            </div> 
          <div className="col-12 col-md-3 col-lg-3 res-grid-box">
                <LightBox src="https://raw.githubusercontent.com/GregPlaya/sandbox-solana/main/src/images/sandbox-solana-beach-residential-living-leasing-Unit-Type-A.jpg" alt="Unit Type A">
    <img src="https://raw.githubusercontent.com/GregPlaya/sandbox-solana/main/src/images/sandbox-solana-beach-residential-living-leasing-Unit-Type-A.jpg" alt="Unit Type A" />      
              </LightBox> 
<div className="short-desc caps font-com font-bold mt-50">
              Unit Type A
             </div>
             <hr className="bg-white my-20 mx-5" />
             <div className="short-desc font-com font-20"> 
              2 Bed + 2 Bath <br/>1,220 sf
              <br/>1 parking space + storage unit 
              <br/>$7,695
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
              2 Bed + 2 Bath <br/>1,085 sf
              <br/>1 parking space + storage unit 
              <br/>$6,795
              </div>
          </div>
          <div className="col-12 col-md-3 col-lg-3 res-grid-box">
                <LightBox src="https://raw.githubusercontent.com/GregPlaya/sandbox-solana/main/src/images/sandbox-solana-beach-residential-living-leasing-Unit-Type-C.jpg" alt="Unit Type C">
    <img src="https://raw.githubusercontent.com/GregPlaya/sandbox-solana/main/src/images/sandbox-solana-beach-residential-living-leasing-Unit-Type-C.jpg" alt="Unit Type C" />      
              </LightBox> 
<div className="short-desc caps font-com font-bold mt-50">
              Unit Type C
             </div>
             <hr className="bg-white my-20 mx-5" />
             <div className="short-desc font-com font-20"> 
              2 Bed + 2 Bath <br/>1,193 sf
              </div>
          </div>
          <div className="col-12 col-md-3 col-lg-3 res-grid-box">
              <LightBox src="https://raw.githubusercontent.com/GregPlaya/sandbox-solana/main/src/images/sandbox-solana-beach-residential-living-leasing-Unit-Type-D.jpg" alt="Unit Type D">
    <img src="https://raw.githubusercontent.com/GregPlaya/sandbox-solana/main/src/images/sandbox-solana-beach-residential-living-leasing-Unit-Type-D.jpg" alt="Unit Type D" />      
              </LightBox> 
             <div className="short-desc caps font-com font-bold mt-50">
              Unit Type D
             </div>
             <hr className="bg-white my-20 mx-5" />
             <div className="short-desc font-com font-20"> 
              2 Bed + 2 Bath <br/>1,127 sf
              </div>
          </div>
</div>
        <div className="row bg-orange color-white align-center d-flex justify-content-center px-2 res-grid-last" style={{ minHeight: "50vh" }}>
           <div className="col-12 col-md-3 col-lg-3 res-grid-box">
                <LightBox src="https://raw.githubusercontent.com/GregPlaya/sandbox-solana/main/src/images/sandbox-solana-beach-residential-living-leasing-Unit-Type-E.jpg" alt="Unit Type E">
    <img src="https://raw.githubusercontent.com/GregPlaya/sandbox-solana/main/src/images/sandbox-solana-beach-residential-living-leasing-Unit-Type-E.jpg" alt="Unit Type E" />      
              </LightBox> 
<div className="short-desc caps font-com font-bold mt-50">
              Unit Type E
             </div>
             <hr className="bg-white my-20 mx-5" />
             <div className="short-desc font-com font-20"> 
              2 Bed + 2 Bath Penthouse <br/>1,087 sf
              <br/>2 parking spaces + storage unit 
              <br/>$8,795             
              </div>
          </div>
           <div className="col-12 col-md-3 col-lg-3 res-grid-box">
                <LightBox src="https://raw.githubusercontent.com/GregPlaya/sandbox-solana/main/src/images/sandbox-solana-beach-residential-living-leasing-Unit-Type-F.jpg" alt="Unit Type F">
    <img src="https://raw.githubusercontent.com/GregPlaya/sandbox-solana/main/src/images/sandbox-solana-beach-residential-living-leasing-Unit-Type-F.jpg" alt="Unit Type F" />      
              </LightBox> 
<div className="short-desc caps font-com font-bold mt-50">
              Unit Type F
             </div>
             <hr className="bg-white my-20 mx-5" />
             <div className="short-desc font-com font-20"> 
              1 Bed + 1 Bath <br/>857 sf
              <br/>1 parking space + storage unit
              <br/>$5,895             
              </div>
          </div>
          <div className="col-12 col-md-3 col-lg-3 res-grid-box">
                <LightBox src="https://raw.githubusercontent.com/GregPlaya/sandbox-solana/main/src/images/sandbox-solana-beach-residential-living-leasing-Unit-Type-G.jpg" alt="Unit Type G">
    <img src="https://raw.githubusercontent.com/GregPlaya/sandbox-solana/main/src/images/sandbox-solana-beach-residential-living-leasing-Unit-Type-G.jpg" alt="Unit Type G" />      
              </LightBox> 
<div className="short-desc caps font-com font-bold mt-50">
              Unit Type G
             </div>
             <hr className="bg-white my-20 mx-5" />
             <div className="short-desc font-com font-20"> 
              2 Bed + 2 Bath Penthouse<br/>1,096 sf
              <br/>2 parking spaces + storage unit 
              <br/>$8,250           
              </div>
          </div>
          <div className="col-12 col-md-3 col-lg-3 res-grid-box">
              <LightBox src="https://raw.githubusercontent.com/GregPlaya/sandbox-solana/main/src/images/sandbox-solana-beach-residential-living-leasing-Unit-Type-H.jpg" alt="Unit Type H">
    <img src="https://raw.githubusercontent.com/GregPlaya/sandbox-solana/main/src/images/sandbox-solana-beach-residential-living-leasing-Unit-Type-H.jpg" alt="Unit Type H" />      
              </LightBox> 
             <div className="short-desc caps font-com font-bold mt-50">
              Unit Type H
             </div>
             <hr className="bg-white my-20 mx-5" />
             <div className="short-desc font-com font-20"> 
              1 Bed + 1 Bath <br/>860 sf
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
