import React from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row, Image, Button } from "react-bootstrap";

//styles
import "assets/styles/homePage.css";

//images
import Greeting from "assets/images/greeting.png";
import food from "assets/images/food.png";
import disease from "assets/images/disease.png";
import fuji from "assets/images/fuji.png";
import daruma from "assets/images/daruma.png";

export const HomePage = () => {
  const buttonRows = [
    {
      colCls: "menu-col px-5 bg-blue",
      redirection: "/quiz",
      imageSrc: Greeting,
      imageAlt: "greeting",
      text: "Quiz",
    },
    {
      colCls: "menu-col px-3 bg-yellow-500",
      redirection: "/disease",
      imageSrc: disease,
      imageAlt: "disease",
      text: "Vocabulary",
    },
    {
      colCls: "menu-col px-3 bg-red",
      redirection: "/resources",
      imageSrc: food,
      imageAlt: "food",
      text: "Resources",
    },
  ];

  // Sections
  const sections = [
    {
      wrapperCls: "homepage-section bg-yellow-100",
      title: "For Japanese Beginners",
      subtitle:
        "You could learn some basic Japanese Vocabulary and Grammar Practice in this website.",
      imgSrc: fuji,
      imgAlt: "FujiMountain",
      imgAttrs: {
        aos: "fade-in",
        aosDelay: "300",
      },
      button: "MORE",
      redirection: "/katakana",
      isDisabled: true,
    },
    {
      wrapperCls: "homepage-section bg-blue-100 flex-row-reverse",
      title: "Japanese Vocabulary",
      subtitle: "Learn Daily Japanese Vocabulary with Exercise and Audio.",
      imgSrc: daruma,
      imgAlt: "Daruma",
      imgAttrs: {
        aos: "zoom-in",
        aosDelay: "500",
        duration: "1000",
      },
      button: "MORE",
      redirection: "/katakana",
      isDisabled: true,
    },
  ];

  return (
    <div>
      <Row xs={1} sm={1} md={3} lg={3} fluid="true" className="menu">
        {buttonRows.map((banner, index) => (
          <Col className={banner.colCls} key={`banner-${index}`}>
            <Link className="picture-link" to={banner.redirection}>
              <div className="subpage-link-wrapper">
                <Image
                  className="subpage-link"
                  src={banner.imageSrc}
                  alt={banner.imageAlt}
                />
              </div>
              <h5 className="subpage-link-word">{banner.text}</h5>
            </Link>
          </Col>
        ))}
      </Row>
      <Container fluid="true">
        {sections.map((section, index) => (
          <div className={section.wrapperCls} key={`section-${index}`}>
            <Image
              src={section.imgSrc}
              alt={section.imgAlt}
              data-aos={section.imgAttrs?.aos}
              data-aos-delay={section.imgAttrs?.aosDelay}
              data-aos-duration={section.imgAttrs?.duration}
            />
            <div>
              <h2> {section.title} </h2>
              <p> {section.subtitle} </p>
              <Link to={section.redirection}>
                <Button> {section.button} </Button>
              </Link>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};
