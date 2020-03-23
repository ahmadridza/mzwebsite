import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Container,
    Col,
    Card,
    CardTitle,
    CardBody,
    CardImg,
    CardSubtitle,
    CardText,
    Button,
    Row
} from 'reactstrap';
import './style.css'
import MZ1 from './image/MZ1.jpg'
import MZ2 from './image/MZ2.jpg'
import MZ3 from './image/MZ3.jpg'
import MZ4 from './image/MZ4.jpg'
const items = [
    {
        src: MZ4,
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: MZ2,
        altText: 'Slide 2',
        caption: 'Slide 2'
    },
    {
        src: MZ3,
        altText: 'Slide 3',
        caption: 'Slide 3'
    }
];

const Example = (props) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (

            <CarouselItem
                className='carouselItem'
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img className='carouselImage' src={item.src} alt={item.altText} />

            </CarouselItem>
        );
    });

    return (
        <Container>
            {/* Main */}
            <Row >
                {/* Main Col1 */}
                <Col xs="3">

                    <Card className='card1'>
                        <CardText>Card1</CardText>
                        <CardImg top width="100%" src={MZ1} alt="Card image cap" className='cardImage' />
                        <CardBody>
                            <CardTitle></CardTitle>
                            <CardSubtitle></CardSubtitle>


                        </CardBody>
                    </Card>
                    <p></p>
                    <Card className='card2'>
                        <CardText>Card2</CardText>
                        <CardImg top width="100%" src={MZ1} alt="Card image cap" className='cardImage' />
                        <CardBody>
                            <CardTitle></CardTitle>
                            <CardSubtitle></CardSubtitle>


                        </CardBody>
                    </Card>

                </Col>


                {/* Main Col2 */}
                <Col xs="9">

                    <Carousel
                        className='carousel'
                        activeIndex={activeIndex}
                        next={next}
                        previous={previous}
                    >
                        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                        {slides}
                        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                    </Carousel>
                    <p></p>

                    <Row xs="2">
                        <Col>
                            <Card className='card3'>
                                <CardText>Card 3</CardText>

                                <CardBody>
                                    <CardTitle></CardTitle>
                                    <CardSubtitle></CardSubtitle>


                                </CardBody>
                            </Card>
                        </Col>

                        <Col>
                            <Card className='card4'>
                                <CardText>Card4</CardText>
                                <CardBody>
                                    <CardTitle></CardTitle>
                                    <CardSubtitle></CardSubtitle>
                                </CardBody>
                            </Card>

                        </Col>
                        <Col>
                            <p></p>
                            <Card className='card5'>
                                <CardText>Card5</CardText>
                                <CardBody>
                                    <CardTitle></CardTitle>
                                    <CardSubtitle></CardSubtitle>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col>
                            <p></p>
                            <Card className='card6'>
                                <CardText>Card 6</CardText>
                                <CardBody>
                                    <CardTitle></CardTitle>
                                    <CardSubtitle></CardSubtitle>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                </Col>
            </Row>

            <p></p>
            <p></p>

            <Container className="themed-container" fluid={true}>.container-fluid</Container>
            <p></p>
            <p></p>
        </Container >


    );
}

export default Example;



