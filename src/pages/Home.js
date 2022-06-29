import React, { useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import '../components/styles.css'
import "bootstrap/dist/css/bootstrap.css";

function HomePage(){

    return (
        <Container>
            <Row>
                <Col xs="6">
                    <h3 className='text-uppercase'>Hey</h3>
                    <h1 className='text-uppercase'>I am Brij</h1>
                    <h4 className='text-uppercase'>Developer | Designer</h4>
    
                    <div className="contact-info">
                        <i className="fa-solid fa-location"><span className='text-uppercase'>29. Gander Drive, Scarborough, M1G 2W3, ON</span></i><br/>
                        <i><a href='mailto:brijunjha15@gmail.com'><span className='text-uppercase'>brijunjha15@gmail.com</span></a></i><br/>
                        <i><span className='text-uppercase'>+1 (647)671-6521</span></i><br/>
                    </div>
                    <br/>
                    <h4 className='text-uppercase'>Skills and Technologies</h4>
                    <ul>
                    <li>C# (.Net, MVC)</li>
                    <li>ADO.Net</li>
                    <li>HTML, CSS, Javascript, jQuery, Bootstrap</li>
                    <li>jSON, XML</li>
                    <li>Microsoft SQL Server, MongoDB</li>
                    <li>RDLC, SSRS Reporting Service</li>
                    <li>Tableau, PowerBI Reporting Tools</li>
                    <li>Mobile App Technology (Android, IOS)</li>
                    <li>React</li>
                    </ul>
                </Col>
                <Col xs="6">
                    <img src="https://brijdev.com/images/banner-image.png"/>
                </Col>
            </Row>
            <Row>
                <Col xs="6">
                    <img src="https://brijdev.com/images/resume_logo.png"/>
                </Col>
                <Col xs="6">
                    <h4 className='text-uppercase'>Resume Objective</h4>
                    <p>Web Developer with 4+ years of experience in designing and developing User Interfaces, testing debugging within .Net Technologies. Proven ability 
                    in optimizing web functionalities that improve data retrieval and workflow efficiencies.</p>
                    <h4 className='text-uppercase'>experience</h4>
                    <h5 className='text-uppercase'>Web Developer - Senior software developer</h5>
                    <h6>Tatvasoft, India (Jun 2017 - Dec 2021)</h6>
                    <p>Collaborated in a team-focused environment providing software solutions to diverse industry clients</p>
                    <ul>
                        <li>Helped build and enhance highly available, scalable, real-time and secure systems used by customers worldwide.</li>
                        <li>Completed 5 major projects, working closely with agile development team to develop, test and maintain Web and desktop based software applications.</li>
                        <li>Adhered to high-quality development standards while delivering solutions on-time and on-budget</li>
                    </ul>
                    
                </Col>
            </Row>
        </Container>
      );
}

export default HomePage;