import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import SubscribeForm from "./mailchimp-form"

import "../styles/footer.css"
import "../styles/mailchimp.css"

const Footer = () => (
  <>
    <footer>
      <div className="wrapper">
        <div className="row">
          <div className="col-12 col-sm-6 col-xl-2 footer-logo-col">
            <p className="contact-col-header">Sandbox Location</p>
            <a
              href="https://goo.gl/maps/66vNWxYkNDNeFD2Y6"
              target="_blank"
              rel="noreferrer"
            >
              329 &amp; 343 South Highway 101
              <br />
              Solana Beach, CA 92075
            </a>
          </div>
            <div className="col-12 col-md-6 office-col">
            <hr className="d-md-none" />
            <p className="contact-col-header">Office Lending Inquiries</p>
            <div className="row">
              <div className="col-12 col-lg-6 col-xl-4 contact-col">
                <p>
                  Steve Bruce
                  <br />
                  <a href="tel:+18588753605">858.875.3605</a>
                  <br />
                  <a href="mailto:steve.bruce@nmrk.com">steve.bruce@nmrk.com</a>
                  <br />
                  CA RE Lic. #01455744
                </p>
              </div>
              <div className="col-12 col-lg-6 col-xl-4 contact-col">
                <p>
                  Chris High, SIOR
                  <br />
                  <a href="tel:+18588753604">858.875.3604</a>
                  <br />
                  <a href="mailto:chris.high@nmrk.com">chris.high@nmrk.com</a>
                  <br />
                  CA RE Lic. #01734544
                </p>
              </div>
              <div className="col-12 col-lg-6 col-xl-4 contact-col">
                <p>
                  Conor Evans
                  <br />
                  <a href="tel:+18588753607">858.875.3607</a>
                  <br />
                  <a href="mailto:conor.evans@nmrk.com">conor.evans@nmrk.com</a>
                  <br />
                  CA RE Lic. #01963596
                </p>
              </div>
            </div>
            <p>
              <img src={"/Newmark-Logo-Black.svg"} alt="Newmark Logo" />
            </p>
            <hr className="d-md-none" />
          </div>
          <div className="col-12 col-md-6 col-xl-2 retail-col">
            <p className="contact-col-header">Retail Lending Inquiries</p>
            <div className="row">
              <div className="col contact-col">
                <p>
                  Michael Burton | Senior Vice President <br />
                  URBAN STRATEGIES GROUP <br />
                  <a href="tel:+8588754685">858.875.4685</a> <br />
                  M: <a href="tel:+8587529000">858.752.9000</a>
                  <br />
                  <a href="mailto:mburton@flockeavoyer.com">
                    mburton@flockeavoyer.com
                  </a>
                </p>
              </div>
            </div>
            <div style={{ margin: "12px 0" }}>
              <StaticImage
                src="../images/usg-3.png"
                alt="Urban Strategies Group Logo"
                width={125}
                className="usg-logo"
              />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-2 location-col">
             <p className="contact-col-header">Residential Leasing Inquiries</p>
            <p>Marilyn Comiskey<br />
               <a href="tel:+18582901444">858.290.1444</a><br />
              <a href="mailto:info@sandboxsolana.com">info@sandboxsolana.com</a></p>
          </div>
        </div>
      </div>
    </footer>
    <div className="wrapper mc font-com">
      <div className="row">
        <div className="col-12 col-md-3">
          <span className="newsletter-title">
            Stay updated on the <br className="d-md-none d-lg-block" /> latest
            at Sandbox
          </span>
        </div>
        <div className="col-12 col-md-8">
          <SubscribeForm />
        </div>
      </div>
    </div>
  </>
)

export default Footer
