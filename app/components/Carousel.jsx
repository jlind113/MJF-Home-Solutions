// MUI Imports
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

// MUI Icon Imports
import ArrowBack from "@mui/icons-material/ArrowBack";
import ArrowForward from "@mui/icons-material/ArrowForward";

import { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import pkg from "react-slick";

const Slider = pkg.default || pkg;

export function ClickCarousel({ images, serviceID }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [serviceID]);

  const imageCount = images.length - 1;

  function backClick() {
    if (index === 0) {
      setIndex(imageCount);
    } else {
      setIndex(index - 1);
    }
  }

  function forwardClick() {
    if (index === imageCount) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "transparent",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          height: "100%",
        }}
      >
        <IconButton
          sx={{ backgroundColor: "background.default", margin: 1 }}
          onClick={() => backClick()}
        >
          <ArrowBack sx={{ color: "text.primary" }} />
        </IconButton>
        <img
          src={images[index]}
          alt={`Slide ${index}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: 8,
          }}
        />
        <IconButton
          sx={{ backgroundColor: "background.default", margin: 1 }}
          onClick={() => forwardClick()}
        >
          <ArrowForward sx={{ color: "text.primary" }} />
        </IconButton>
      </Box>
    </Box>
  );
}

export function SlickAuto({ images }) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    arrows: false,
    centerMode: false,
    variableWidth: false,
    adaptiveHeight: false,
    lazyLoad: false,
  };

  return (
    <Box
      className="slider-container"
      sx={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
        "& .slick-slider": {
          height: "100%",
        },
        "& .slick-list": {
          height: "100%",
        },
        "& .slick-track": {
          display: "flex",
          height: "100%",
        },
        "& .slick-slide": {
          height: "inherit",
          "& > div": {
            height: "100%",
          },
        },
        "& .slide-wrapper": {
          height: "100%",
        },
      }}
    >
      <Slider {...settings}>
        {images.map((image, idx) => (
          <div key={idx} className="slide-wrapper">
            <img
              src={image}
              alt={`Slide ${idx}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        ))}
      </Slider>
    </Box>
  );
}
