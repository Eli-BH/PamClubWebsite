import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Footer from "../components/Footer";

const InfoPage = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="infoCarousel">
      <Carousel activeIndex={index} onSelect={handleSelect} className="infoC">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../images/20171013_170611 (1)-min.jpg")}
            alt="First slide"
          />
          <Carousel.Caption>
            <p>Avian Brown</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../images/Ex2324-40 (1)-min.jpg")}
            alt="Second slide"
          />

          <Carousel.Caption>
            <p>Elijah Henderson</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../images/IMG-20200917-WA0009 (1)-min.jpg")}
            alt="Third slide"
          />

          <Carousel.Caption>
            <p>Photo Credits</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div>
        <h4 className="quote">
          "There is one thing the photograph myst contain, the humanity of the
          moment." <i>- Robert Frank</i>
        </h4>
      </div>

      <div className="informationGroup">
        <div className="information1">
          {/* <Image src="https://picsum.photos/200/300" alt="placeholder" fluid /> */}
          <div>
            <h4>About P.A.M.</h4>
            <p>
              Established in the fall semester of 2019, the Photographic Arts
              and Modeling Club of John Jay College is the epicentre of creative
              expression and experimentation of photography on campus. Our
              members range from beginners to professionals, operating on both
              sides of the camera as photographers and models. We pride
              ourselves on being inclusive to beginners, offering tips,
              workshops, and resources to allow even the most novice
              photographer to feel like a pro.
            </p>
          </div>
        </div>
        <div className="information2">
          <div className="parallax1">
            <p className="paraCred1">credit: David Juarez</p>
          </div>
          {/* <Image src="https://picsum.photos/200/300" alt="placeholder" fluid /> */}
          <div>
            <h4>Our objective</h4>
            <p>
              We accomplish our goals of creative growth by holding workshops
              and tips meeting. We use the skills that we gain by having photo
              walks in various areas around New York City. On-Campus, we provide
              a service to our fellow college clubs, by being photographers for
              their events and for some official school events. We also make a
              point to stay in touch outside of campus to foster
              photographer/model relationships that allow us to continue to grow
              together long after the semester ends.
            </p>
          </div>
        </div>
        <div className="information3">
          <div className="parallax2">
            <p className="paraCred2">credit: placeholder name</p>
          </div>
          {/* <Image src="https://picsum.photos/200/300" alt="placeholder" fluid /> */}
          <div>
            <h4>Or mission</h4>
            <p>
              Our mission is to foster an environment of friendliness for the
              beginner photographers of John Jay College, provide a space for
              models and photographers to feel comfortable, as well as encourage
              a habitat of creativity and photographic experimentation. We also
              aim to foster a life-long love and curiosity for photography.
            </p>
          </div>
        </div>
      </div>
      <div className="parallax3">
        <p className="paraCred3">credit: Lucia Veliz</p>
      </div>
      <Footer />
    </div>
  );
};

export default InfoPage;
