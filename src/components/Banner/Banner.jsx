import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import {ArrowRightCircle} from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg'

const Banner = () => {
    const toRotate = ['Web Developer', 'Web Designer', 'UI/UX Designer'];
    const [loopNum, setLoopNum] = useState(0);
    const [isDeliting, setIsDeliting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period= 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => {clearInterval(ticker);}
    }, [text]);
    const tick = () => {
        let i = loopNum%toRotate.length
        let fullText = toRotate[i];
        let uptadatedText = isDeliting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        
        setText(uptadatedText);
        if(isDeliting) {
            setDelta(prevDelta => prevDelta / 2)
        }
        if(!isDeliting && uptadatedText===fullText){
            setIsDeliting(true);
            setDelta(period);
        }else if(isDeliting && uptadatedText===''){
            setIsDeliting(false);
            setLoopNum(loopNum+ 1);
            setDelta(500);
        } 
    }
  return (
    <section className='banner' id='home'>
        <Container>
            <Row className='align-items-center'>
                <Col xs={12} md={6} xl={7}>
                    <span className='tagline'>Welcome to my portfolio!</span>
                    <h1>{`Hi I'm Ilya`} <span className='wrap'>{text}</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque veniam voluptatem aperiam esse fugiat repellat dignissimos quia optio autem ad earum ut cum, amet obcaecati. Facilis, natus magni? Quisquam, explicabo?</p>
                    <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25}/></button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt="Header img" />
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Banner