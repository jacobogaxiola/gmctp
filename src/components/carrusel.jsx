import { Paper } from '@mui/material';
import * as React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

const paperStyle={padding:20, height: '20', width: 280, margin: "20px auto"}


export default function SimpleSlider() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
        <Paper style={paperStyle}>
      <Slider {...settings}>
        <div>
          <label>pene</label>
          <img src='https://www.mundodeportivo.com/files/og_thumbnail/uploads/2020/06/15/60e7bd70dceab.png' height="100%" alt='pene es el que te comes'/>
        </div>
        <div>
          <h3>el</h3>
        </div>
        <div>
          <h3>que</h3>
        </div>
        <div>
          <h3>te</h3>
        </div>
        <div>
          <h3>comes</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </Paper>
    );
  }
