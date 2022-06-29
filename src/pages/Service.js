import React, { useState } from 'react';
import { Col, Container, Row } from 'reactstrap';

import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardFooter
  } from "reactstrap";

import "bootstrap/dist/css/bootstrap.css";

const css = {
    grid: {
      display: "grid",
      gridAutoFlow: "column",
      gap: 4,
      
    }
  };

function ServicePage(){
    const data = [
        {
          avatar: "https://brijdev.com/images/BarterBooks%20Logo.png",
          text: "Barter Books",
          title: "3D",
          cardText: "Barter Books"
        },
        {
          avatar: "https://brijdev.com/images/Cash_Register_Logo.jpg",
          text: "Cash Register App",
          title: "3D",
          cardText: "Cash Register Application"
        },
        {
          avatar: "https://brijdev.com/images/Daily_Planner_Logo.jpg",
          text: "Daily Planner App",
          title: "3D",
          cardText: "Daily Planner"
        },
        {
          avatar: "https://brijdev.com/images/Calculator_Logo.jpg",
          text: "Calculator Application",
          title: "3D",
          cardText: "Calculator App"
        }
        
      ];

    return (
    <div style={css.grid}>
      {data.map(({ avatar, title, text, cardText }, index) => (
        <Card>
          <CardImg top width="100%" src={avatar} alt="Card image cap" />
          <CardBody style={{ padding: 15 }}>
            <CardTitle style={{ fontWeight: "bold" }}>{title}</CardTitle>
            <CardText>{cardText}</CardText>
          </CardBody>
          <CardFooter style={{ padding: 15 }}>
            <small className="text-muted">{text}</small>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default ServicePage;