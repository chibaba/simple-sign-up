import React from 'react'
import { Form } from 'react-bootstrap'
import "./login.css"

const Login = () => {
  return (
    <div>
      <Form style={{ width: "60%", marginLeft: "15%", marginTop: "10%", borderRadius: "20%", color: "GrayText" }}>
        <h1 style={{ color: "skyblue", margin: "5%" }}>Let's Talk</h1>
        <p>To request a quote or want to meet up for coffee.<br /> Contact us directly or fill out the form and you will<br /> get back to you promptly</p>
        <Form.Group>
          <Form.Label>Your Name</Form.Label>
          <Form.Control placeholder="Your name" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Your Email</Form.Label>
          <Form.Control type="email" placeholder="Your Email" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Your Mesage</Form.Label>
          <Form.Control as="textarea" placeholder="Type something if you want" rows={3} />
        </Form.Group>
        <button class="hire-btn">Send Message</button>
      </Form>
    </div>
  )
}

export default Login
