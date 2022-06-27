import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {FaGithub} from 'react-icons/fa'; 
import {FaLinkedin} from 'react-icons/fa'; 
import {AiOutlineMail} from 'react-icons/ai';
import {MdPictureAsPdf} from 'react-icons/md';


const Footer = () => {
  return (
    <>
    <hr className="text-white"></hr>
    <footer className="p-4 absolute bottom-0 left-0 w-full bg-dark text-white " >
      
      <Container className="text-center" >
        <Row>
            <Col className="pb-4">
              <h6>Mohamed|Full Stack Developer</h6>
              <h6 className="text-muted"><AiOutlineMail /> Mohamed.Mahmoud70@ed.cna.nl.ca</h6>
              <a className="h3" href="https://github.com/mohamed-baioumy"><FaGithub /></a>
              <a className="h3" href="https://www.linkedin.com/in/mohamed-mahmoud-0b618112a"><FaLinkedin /></a>
              <a className="h3" href=" https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:669061e0-3a6e-3412-b598-2566204b116c"><MdPictureAsPdf /></a>
            </Col>
            <Col className="pb-4">
              <h6>Nathan|Full Stack Developer</h6>
              <h6 className="text-muted mt-0"><AiOutlineMail /> nathan.atkins45@ed.cna.nl.ca</h6>
              <a className="h3" href="https://github.com/Venombane"><FaGithub /></a>
              <a className="h3" href="https://www.linkedin.com/in/nathan-atkins-3a54a71b1/"><FaLinkedin /></a>
              <a className="h3" href=" https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:669061e0-3a6e-3412-b598-2566204b116c"><MdPictureAsPdf /></a>
              
            </Col>
            <Col className="pb-4">
              <h6>Daniel|Full Stack Developer</h6>
              <h6 className="text-muted"><AiOutlineMail /> daniel.rowe31@ed.cna.nl.ca</h6>
              <a className="h3" href="https://github.com/dcr041"><FaGithub /></a>
              <a className="h3" href="https://www.linkedin.com/in/mohamed-mahmoud-0b618112a"><FaLinkedin /></a>
              <a className="h3" href="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:669061e0-3a6e-3412-b598-2566204b116c"><MdPictureAsPdf /></a>
            </Col>
          </Row>
      </Container>
    </footer>
    </>
  );
};

  export default Footer;