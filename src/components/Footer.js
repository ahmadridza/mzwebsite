import React, { Component } from 'react'
import { Container } from 'reactstrap'
import './footer.css'




class Footer extends Component {

    render() {
        return (

            <Container>
                <b></b>
                <p>

                    <Container className="themed-container" fluid={true}>.container-fluid</Container>
                </p>
            </Container>
        );
    }
}

export default Footer;