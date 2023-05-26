import background from "../images/got-background.jpeg";
import "../index.css";
import SimpleImageSlider from "react-simple-image-slider";
import { useState } from "react";
import { Link } from "react-router-dom";
import audio from '../audios/got.mp3';
import ReactAudioPlayer from 'react-audio-player';

export default function Home() {
  const [imageNum, setImageNum] = useState(1);

  const sliderImages = [
    {
      url: "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/r7oodcbjhyq3eqyofzui.jpg",
    },
    {
      url: "https://media.vanityfair.com/photos/599a44f7ecb01b1b4547632c/16:9/w_1280,c_limit/game-of-thrones-dragon-twist.jpg",
    },
    {
      url: "https://cdn.theatlantic.com/thumbor/Sub0kdLI2_ARKe96xjk2gV1pJsQ=/19x44:1783x1036/1600x900/media/img/mt/2017/08/51386b0621eef7fc2e482fe8f60097f80027c1fc1e8ced34176b4baf71abae94da983e277672f5df6b824d550edac9c2/original.jpg",
    },
    {
      url: "https://cdn.vox-cdn.com/thumbor/za6z9xkhqQGQVFu_afi5ywfm9x0=/0x0:3733x2100/1400x788/filters:focal(2313x278:2909x874):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/56278315/HBO__Photo_10_.0.jpg",
    },
    {
      url: "https://hips.hearstapps.com/hmg-prod/images/image-2-1556546029.png",
    },
  ];

  return (
    <div className="p-4 mb-4 bg">
      <div className="p-4 mb-4 container">
        <h1
          className="display-5 fw-bold rounded-3"
          style={{
            textAlign: "center",
            backdropFilter: "blur(10px)",
            backgroundColor: "rgb(255 255 255 / 0.3)",
          }}
        >
          Welcome Game of Thrones Fans!
        </h1>
        <div className="p-4 mb-4 col-md-6 mx-auto">
          <SimpleImageSlider
            width={500}
            height={250}
            images={sliderImages}
            showBullets={true}
            showNavs={true}
            autoPlay={true}
            onStartSlide={(index, length) => {
              setImageNum(index);
            }}
            autoPlayDelay={3}
          />
        </div>
        <div
          className="container-fluid pb-5 rounded-3"
          style={{
            backdropFilter: "blur(10px)",
            backgroundColor: "rgb(255 255 255 / 0.3)",
          }}
        >
          <h2 className="display-5 fw-bold" style={{ textAlign: "center" }}>
            About Our Website
          </h2>
          <p className="fs-4">
            Our website is ALL Game of Thrones! Welcome! Our website has famous
            quotes, character descriptions and images plus all the houses and
            maps of Westeros. Below we have also included resources for more
            Game of Thrones fun! Be warned... Winter is coming...
          </p>
          <h3 className="display-7 fw-bold" style={{ textAlign: "center" }}>
            Resources
          </h3>
          <p>
            <a href="https://www.westeros.org/">
              Click to find out more about Westeros
            </a>
          </p>
          <p>
            <a href="https://watchersonthewall.com/">
              Watchers on the Wall
            </a>
          </p>
          <p>
            <a href="https://georgerrmartin.com/for-fans/fan-site-directory/">
            More on Mr.George R.R. Martin 
            </a>
          </p>
          <ReactAudioPlayer
            src="../audios/got.mp3"
            autoPlay
            controls/>
        </div>
      </div>
    </div>
  );
}
