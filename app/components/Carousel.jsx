import { Box } from "@mui/material";
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
        display: "block",
        background: "#004175a8",
        borderRadius: 10,
        scale: 1.2,
        ...style,
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
        display: "block",
        background: "#004175a8",
        borderRadius: 10,
        scale: 1.2,
        ...style,
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
    <div
      className="slider-container"
      sx={{
        "& .slick-slider": {
          marginBottom: 0,
        },
        "& .slick-list": {
          marginBottom: 0,
        },
        "& .slick-track": {
          marginBottom: 0,
        },
        "& .slick-slide": {
          marginBottom: 0,
          "& > div": {
            marginBottom: 0,
            lineHeight: 0,
          },
        },
      }}
    >
      <Slider {...settings}>
        {images.map((image, idx) => (
          <div key={idx} style={{ lineHeight: 0, margin: 0, padding: 0 }}>
            <img
              src={image.path}
              alt={image.alt}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                margin: 0,
                padding: 0,
                verticalAlign: "bottom",
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
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
  };

  return (
    <Box
      className="slider-container"
      sx={{
        "& .slick-slider": {
          marginBottom: 0,
        },
        "& .slick-list": {
          marginBottom: 0,
        },
        "& .slick-track": {
          marginBottom: 0,
        },
        "& .slick-slide": {
          marginBottom: 0,
          "& > div": {
            marginBottom: 0,
            lineHeight: 0,
          },
        },
      }}
    >
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} style={{ lineHeight: 0, margin: 0, padding: 0 }}>
            <img
              src={image}
              alt={`Slide ${index}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                margin: 0,
                padding: 0,
                verticalAlign: "bottom",
              }}
            />
          </div>
        ))}
      </Slider>
    </Box>
  );
}
