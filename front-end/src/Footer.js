import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaGithub} from 'react-icons/fa'; 
import {FaLinkedin} from 'react-icons/fa'; 
import {AiOutlineMail} from 'react-icons/ai';
import {MdPictureAsPdf} from 'react-icons/md';


const Footer = () => (

<div className="d-flex flex-column h-100">
<footer className="w-100 py-4 flex-shrink-0 bg-dark text-white ">
    <div className="container py-4 ">
        <div className="row gy-4 gx-5">
            <div className="col-lg-4 col-md-6">
            <h5 className="text-uppercase">MOhamed  FULL STACK DEVELOPER </h5>
                 <ul className="list-unstyled">
                   <li>
                   <AiOutlineMail> Mohamed.Mahmoud70@ed.cna.nl.ca</AiOutlineMail>
                  <a>Mohamed.Mahmoud70@ed.cna.nl.ca</a>
                  <br></br>
                  <br></br>
                  <h5 className="text-uppercase">Nathan  FULL STACK DEVELOPER </h5>
                  <AiOutlineMail> Mohamed.Mahmoud70@ed.cna.nl.ca</AiOutlineMail>
                  <a>Mohamed.Mahmoud70@ed.cna.nl.ca</a>
                  <br></br>
                  <br></br>
                  <h5 className="text-uppercase">Danial  FULL STACK DEVELOPER </h5>
                  <AiOutlineMail> Mohamed.Mahmoud70@ed.cna.nl.ca</AiOutlineMail>
                  <a>Mohamed.Mahmoud70@ed.cna.nl.ca</a>
                   </li>
                 </ul>
               
            </div>
            <div className="col-lg-2 col-md-6">
                <h5 className="text-white mb-3">Mohamed Links</h5>
                <ul className="list-unstyled text-muted">
                    <li>
                    <FaGithub href="https://github.com/mohamed-baioumy"> </FaGithub>
                    <a href="https://github.com/mohamed-baioumy">Github</a>
                    </li>
                    <li> <FaLinkedin></FaLinkedin>
                    <a href="https://www.linkedin.com/in/mohamed-mahmoud-0b618112a">linkedin</a> </li>

                    <li>
                   <MdPictureAsPdf></MdPictureAsPdf>
                     <a href=" https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:669061e0-3a6e-3412-b598-2566204b116c">Resume</a>
                   </li>
                  
                  
                </ul>
            </div>
            <div className="col-lg-2 col-md-6">
                <h5 className="text-white mb-3">Nithan links</h5>
                <ul className="list-unstyled text-muted">

                        <li>
                    <FaGithub> </FaGithub>
                    <a href="https://github.com/mohamed-baioumy">Github</a></li>
                    <li> <FaLinkedin></FaLinkedin>
                    <a href="https://www.linkedin.com/in/mohamed-mahmoud-0b618112a">linkedin</a> </li>

                    <li>
                   <MdPictureAsPdf></MdPictureAsPdf>
                     <a href=" https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:669061e0-3a6e-3412-b598-2566204b116c">Resume</a>
                   </li>
                  
                </ul>
            </div>
            <div className="col-lg-2 col-md-6">
                <h5 className="text-white mb-3">Danial links</h5>
                <ul className="list-unstyled text-muted">
                <li>
                    <FaGithub> </FaGithub>
                    <a href="https://github.com/mohamed-baioumy">Github</a></li>
                    <li> <FaLinkedin></FaLinkedin>
                    <a href="https://www.linkedin.com/in/mohamed-mahmoud-0b618112a">linkedin</a> </li>

                    <li>
                   <MdPictureAsPdf></MdPictureAsPdf>
                     <a href=" https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:669061e0-3a6e-3412-b598-2566204b116c">Resume</a>
                   </li>
                  
                </ul>
            </div>
           
        </div>
    </div>
</footer>
</div>       
  );
  export default Footer;