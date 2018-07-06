import React, { Component } from 'react';
import './App.css';
import Slider from 'react-slick';

const mediaOffset = 3;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    };
    this.click = this.click.bind(this);
  }
  click() {
    const { slides } = this.state;
    const currentLength = slides.length;
    const newLength = currentLength + 3;
    const newSlides = Array(newLength).fill().map((_, index) => index + 1);

    this.setState({
      slides: newSlides
    });
  }
  render() {
    const settings = {
      center: true,
      dots: true,
      infinite: false,
      initialSlide: mediaOffset,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 500,
    };
    return (
      <section>
        <div>
          <h2>Dynamic slides</h2>
          <button className="button" onClick={this.click}>
            Click to change slide count
          </button>
          <Slider {...settings}>
            {this.state.slides.map(function(slide) {
              return (
                <div key={slide}>
                  <h3>{slide}</h3>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>
    );
  }
}

export default App;
