import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    const words = ['Web Developer', 'Web Designer', 'UX/UI Designer', 'Full Stack Developer'];
    const [wordIndex, setWordIndex] = useState(0);
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    function type() {
        // Current word
        const currentWord = words[wordIndex];
        // Determine the function to be performed
        const shouldDelete = isDeleting ? 1 : -1;
        // Create the new text
        setText(current => currentWord.substring(0, current.length - shouldDelete));
        // Determine if this word is complete
        if (!isDeleting && text === currentWord) {
            // Make a pause at the end
            setTimeout(() => setIsDeleting(true), 1000);
        } else if (isDeleting && text === '') {
            setIsDeleting(false);
            // Move to the next word
            setWordIndex((current) => (current + 1) % words.length);
        }
    }

    useEffect(() => {
        const timer = setTimeout(type, isDeleting ? 50 : 100);
        // Cleanup function to clear the timeout
        return () => clearTimeout(timer);
        // Add dependencies to the dependency array
    }, [wordIndex, isDeleting, text]);

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">Welcome to my Portfolio</span>
                                    <h1>{`Hi I'm Sergio `}<span>Hidalgo</span></h1>
                                    <h2>I specialize in:</h2>
                                    <h3><span className="wrap">{text}</span></h3>
                                    <h4>Summary of qualifications: </h4>
                                    <p>
                                        Professional with a degree in Computer Systems Engineering, taking 5 years in
                                        classes and their respective projects taught to me at the University, I obtained
                                        basic knowledge of the principles and bases of computing in the topics studied.
                                        Providing me with information on agile methodologies such as Cascade, Kanban and
                                        Scrum, applying them in the Software Quality Control and multi-platform coding
                                        course; I gained experience in the management and development of databases, tools,
                                        code languages, web page testing, as well as the creation of mobile applications
                                        on different platforms such as: IOS and Android, skills in project management,
                                        analysis, planning, implementation and development, problem resolution and
                                        retrospective of these. I also had a course that emphasized my training in user
                                        interface design. I am a results-oriented, collaboration, communication and
                                        team-oriented person, seeking to develop work experience, personal growth and
                                        apply what I have learned.
                                    </p>
                                    <button className='vvd' onClick={() => console.log('connect')}>
                                        <span>
                                            Let's connect
                                        </span>
                                        <ArrowRightCircle size={25} />
                                    </button>
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                    <Col xs={10} md={4} xl={5}>
                        <img className="floatImage" src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}