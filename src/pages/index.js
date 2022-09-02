import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ReactPlayer from "react-player"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Pagination, Navigation } from "swiper"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import "../styles/home.css"

SwiperCore.use([Pagination, Navigation])

const IndexPage = () => {
  const [loaded, setLoaded] = React.useState([])
  const [scrolled, setScrolled] = React.useState("")

  const onLoadedData = () => {
    if (loaded.length < 3) {
      // all three videos need to load
      setLoaded([...loaded, true])
    }
  }

  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y <= -100) {
      setScrolled("scrolled")
    } else {
      setScrolled("")
    }
  })

  return (
    <Layout>
      <Seo title="Sandbox Solana - Home" />
      <section className="full">
        <div
          className="sandbox relative d-flex align-items-center justify-content-center"
          style={{ minHeight: "50vh" }}
        >
		      <div className="navbar-main">
	            <div className="navbar-left">
                <a
                  href="https://www.dropbox.com/s/g6mshopn8iaix1k/Sandbox-Leasing-Opportunity-HighRes.pdf?dl=0"
                  target="_blank"
                  rel="noreferrer"
                >
                  Office & Retail Leasing
                </a>
              </div>
		<div className="navbar-right">
                <a
                  href="https://www.sandboxsolana.com/residential/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Residential Leasing
                </a>
              </div>
	  </div>		
          <div style={{ padding: "30px" }}>
            <img
              className="img-fluid home-logo logo"
              src={"/logo-white.svg"}
              alt="Sandbox"
            />
            <div className={`scroll-down ${scrolled}`}></div>
          </div>
        </div>
      </section>
      <section className="full">
        <div
          className="bg-blue d-flex align-items-center justify-content-center"
          style={{ minHeight: "50vh" }}
        >
          <div className="desc-box">
            <div className="short-desc font-com color-white align-center">
              A modern reflection of Southern California lifestyle & urban
              sensibility; a beachside playground for culture & commerce,
              leisure & life.
              <div className="btn-wrap">
                <a
                  href="https://www.dropbox.com/s/g6mshopn8iaix1k/Sandbox-Leasing-Opportunity-HighRes.pdf?dl=0"
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Download Leasing Info
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="d-md-flex">
          <div className="col-12 col-md-6">
            <StaticImage src="../images/render-1.png" alt="" />
          </div>
          <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
            <div className="desc-box">
              <div className="short-desc font-com color-blue align-center">
                Want to <br /> live at Sandbox?
                <div className="btn-wrap">
                  <Link
                    to="/residential/"
                    className="btn btn-blue font-20"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LEARN MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="overlay"></div>
        <ReactPlayer
          width="100%"
          height="100%"
          playing={loaded.length >= 3}
          url="/Sandbox-Landing-Page-Video-01.mp4"
          loop={true}
          muted={true}
          onReady={onLoadedData}
          config={{
            file: {
              attributes: {
                className: "video-player fullscreen",
                playsInline: true,
                poster: "/poster1.webp",
              },
            },
          }}
        />
      </section>
      <section>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          navigation={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <StaticImage
              src="../images/Sandbox-Render-3840x2160-1.jpg"
              alt="The first render of buildings"
            />
          </SwiperSlide>
          <SwiperSlide>
            <StaticImage
              src="../images/Sandbox-Render-3840x2160-2.jpg"
              alt="A second render of buildings"
            />
          </SwiperSlide>
          <SwiperSlide>
            <StaticImage
              src="../images/Sandbox-Render-3840x2160-3.jpg"
              alt="A third render of buildings"
            />
          </SwiperSlide>
          <SwiperSlide>
            <StaticImage
              src="../images/Sandbox-Render-3840x2160-4.jpg"
              alt="A fourth render of buildings"
            />
          </SwiperSlide>
          <SwiperSlide>
            <StaticImage
              src="../images/Sandbox-Render-3840x2160-5.jpg"
              alt="A fifth render of buildings"
            />
          </SwiperSlide>
          <SwiperSlide>
            <StaticImage
              src="../images/Sandbox-Render-3840x2160-6.jpg"
              alt="A sixth render of buildings"
            />
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="bg-orange">
        <div className="overlay"></div>
        <ReactPlayer
          width="100%"
          height="100%"
          playing={loaded.length >= 3}
          url="/Sandbox-Landing-Page-Video-02-2.mp4"
          loop={true}
          muted={true}
          onReady={onLoadedData}
          config={{
            file: {
              attributes: {
                className: "video-player fullscreen",
                playsInline: true,
                poster: "/poster2.webp",
              },
            },
          }}
        />
      </section>
      <section>
        <div className="overlay"></div>
        <ReactPlayer
          width="100%"
          height="100%"
          playing={loaded.length >= 3}
          url="/Sandbox-Landing-Page-Video-03.mp4"
          loop={true}
          muted={true}
          onReady={onLoadedData}
          config={{
            file: {
              attributes: {
                className: "video-player fullscreen",
                playsInline: true,
                poster: "/poster3.webp",
              },
            },
          }}
        />
      </section>
      <section>
        <figure>
          <StaticImage
            src="../images/Sandbox-Website-Map4.jpg"
            alt="A map showing the location of Sandbox Solana"
          />
        </figure>
      </section>
    </Layout>
  )
}

export default IndexPage
