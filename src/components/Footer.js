import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col size={12} sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/sergio-hidalgo-granados-3376612b7/"><img src={navIcon1} alt="Icon1" /></a>
                            <a href="https://www.facebook.com/sergio.hidalgo.944023"><img src={navIcon2} alt="Icon2" /></a>
                            <a href="https://www.instagram.com/"><img src={navIcon3} alt="Icon3" /></a>
                        </div>
                        <p>CopyRight 2025. Shidalgra all Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}