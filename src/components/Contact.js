import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col, Container, Image } from "react-bootstrap";
import { init } from "emailjs-com";
import emailjs from "emailjs-com";

init("user_GCFVlEekuDYGqXS7gnvC9");

const Contact = () => {
  const [feedback, setFeedback] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    const templateId = "service_ezmqiiq";
    sendFeedback(templateId, {
      message_html: feedback,
      from_name: name,
      reply_to: email,
    });
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setEmail("");

    setValidated(true);
  };

  const sendFeedback = (templateId, variables) => {
    emailjs
      .send("service_nwyqb3a", templateId, variables)
      .then((res) => {
        console.log("Email successfully sent!");
      })
      // Handle errors here however you like, or use a React error boundary
      .catch((err) =>
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        )
      );
  };

  return (
    <div className="container">
      <h1 className="contactH1 p-5" style={{ textAlign: "center" }}>
        Contact us directly!
      </h1>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="validationName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please Enter your name
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} md="12" controlId="validationSubject">
            <Form.Label>Subject</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please Enter a Subject
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group
            as={Col}
            md="12"
            controlId="validationEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          >
            <Form.Label>Email</Form.Label>
            <Form.Control required type="text" placeholder="Email Address" />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="validationComments">
          <Form.Label>Comments</Form.Label>
          <Form.Control
            required
            as="textarea"
            rows={4}
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please Enter a feedback or Comments
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="outline-danger" type="submit">
          Send feedback
        </Button>
      </Form>

      <div className="instagram">
        <h1 style={{ textAlign: "center" }}>Check us out on instagram!</h1>
        <Button
          href="https://www.instagram.com/jjay.pam.photography/"
          variant="outline-primary"
          className="instaButton"
          target="_blank"
          rel="noopener"
        >
          <Image
            className="instaImage"
            src="https://i.pinimg.com/originals/66/41/c9/6641c94e15a0be37af49a4250386c03e.png"
            width={240}
          />
        </Button>
      </div>
    </div>
  );
};

export default Contact;
