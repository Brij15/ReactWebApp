import React, { useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import '../components/styles.css'
import "bootstrap/dist/css/bootstrap.css";
import { Table, TableBody, TableCell, TableHeader, TableRow } from 'semantic-ui-react';


function AboutPage(){

    return (
        <Container>
            <Row>
                <Col xs="4">
                    <img src='https://brijdev.com/images/Profile_Photo.jpg' className='img-responsive profile-img'/>
                </Col>
                <Col xs="8">
                    <h4 className='text-uppercase'>About Me</h4>
                    <p>Possessing exceptional communication and leadership skills and the important ability to solve complex problems. I am an 
                    effective team player with a determination to meet and exceed all assigned goals and objectives.</p>
                    <Table className='table table-borderless tablefont'>
                        <TableBody>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Brij Patel</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Age</TableCell>
                                <TableCell>26</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Address</TableCell>
                                <TableCell>29, Gander Drive, Scarborough, M1G 2W3, Ontario</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Email</TableCell>
                                <TableCell>brijunjha15@gmail.com</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Mobile No</TableCell>
                                <TableCell>+1 (647)671-6521</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}

export default AboutPage;