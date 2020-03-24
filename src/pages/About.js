import React, { Component } from 'react'
import { Container, Row, Col, CardImg } from 'reactstrap';
import './about.css'
import MZ5 from './image/MZ5.jpg'

const About = () => {
    return (

        <Container>
            <Row className='main'>


                <Col xs="6">
                    <div className='main1'>

                        <br></br>
                        <br></br>
                        <h2>Our Story</h2>
                        <p>
                            Medina Zaara’s Tarbiyyah Curriculum is based upon a holistic approach to develop 'A Whole Child'; mind, body, and spirit. It aims to translate Islamic values into practice, which will enable the students to ‘live Islam’. Nowadays, the world is in need of more than just strong academic results.
                        </p>
                        <p>
                            We need creative people who can think out of the box, people who can lead the ‘Ummah, people who know how to apply Islam in their daily lives, and people who fear Allah.
                         </p>
                        <p>
                            As parents and educators, we need to equip our young ones with these skills for them to succeed in this ever changing world, and most importantly, to succeed in the hereafter. <strong>Medina Zaara</strong> programs can do just that! Educate and raise young people imbued with the qualities of a Muslim personality: devotion to Almighty Allah, commitment to their Islamic principles, care and service to others, and an understanding of their role in contemporary society.
                        </p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <CardImg top width="100%" src={MZ5} alt="Card image cap" className='aboutimg' />
                    </div>
                </Col>



                <Col xs="6">
                    <div className='main2'>
                        <br></br>
                        <br></br>
                        <br></br>

                        <p>
                            We need creative people who can think out of the box, people who can lead the ‘Ummah, people who know how to apply Islam in their daily lives, and people who fear Allah.
                        </p>
                        <p>
                            As parents and educators, we need to equip our young ones with these skills for them to succeed in this ever changing world, and most importantly, to succeed in the hereafter. <strong>Medina Zaara</strong> programs can do just that! Educate and raise young people imbued with the qualities of a Muslim personality: devotion to Almighty Allah, commitment to their Islamic principles, care and service to others, and an understanding of their role in contemporary society.
                        </p>
                        <br></br>
                        <br></br>
                        <h2>Mission</h2>
                        <p>
                            To translate Islamic values into practice, which will enable the students to ‘live Islam’.
                        </p>

                    </div>
                </Col>

            </Row>

        </Container >
    );
}

export default About;