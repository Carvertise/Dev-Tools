import { Container, Row, Col } from 'react-bootstrap';

function Footer(){
    return(
        <footer className="fixed-bottom">
            <Container fluid>
                <Row className="bg-secondary text-white">
                    <Col>Carvertise</Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;