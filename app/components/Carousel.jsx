// MUI Imports
import { Box } from "@mui/material";

// Slick Imports
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pkg from "react-slick";

const Slider = pkg.default || pkg;


function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        background: "gray",
        borderRadius: 12,
        width: "1.5rem",
        height: "1.5rem",
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        background: "gray",
        borderRadius: 12,
        width: "1.5rem",
        height: "1.5rem",
      }}
      onClick={onClick}
    />
  );
}

export function SlickClick({ images }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        className="slider-container"
        sx={{
          width: "80%",
        }}
      >
        <Slider {...settings}>
          {images.map((image, idx) => (
            <Box key={idx}>
              <img src={image} alt={`Slide ${idx}`} />
            </Box>
          ))}
        </Slider>
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
