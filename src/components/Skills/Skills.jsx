import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from '../assets/img/meter1.svg'
import meter2 from '../assets/img/meter2.svg'
import meter3 from '../assets/img/meter3.svg'
import colorSharp from '../assets/img/color-sharp.png'

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: {max:4000, min: 3000},
            items: 5
        },
        desktop: {
            breakpoint: {max:3000, min: 1024},
            items: 5
        },
        tablet: {
            breakpoint: {max:1024, min: 464},
            items: 5
        },
        mobile: {
            breakpoint: {max:464, min: 0},
            items: 5
        }
    }
  return (
    <section className='skill' id='skills'>
        <Container>
            <Row>
                <Col>
                    <div className='skill-bx'>
                        <h2>
                            Skills
                        </h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, totam temporibus. Deserunt quod cupiditate nihil eos cumque, autem dicta fuga rerum aperiam sapiente, praesentium eius? Tempore dolores quas optio minus?</p>
                        <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                            <div className='item'>
                                <img src={meter1} alt='Image'></img>
                                <h5>Web Development</h5>
                            </div>
                            <div className='item'>
                                <img src={meter2} alt='Image'></img>
                                <h5>Brand Identity</h5>
                            </div>
                            <div className='item'>
                                <img src={meter3} alt='Image'></img>
                                <h5>Logo Design</h5>
                            </div>
                            <div className='item'>
                                <img src={meter1} alt='Image'></img>
                                <h5>Web Development</h5>
                            </div>
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
        <img className='background-image-left' src={colorSharp}></img>
    </section>
  )
}

export default Skills