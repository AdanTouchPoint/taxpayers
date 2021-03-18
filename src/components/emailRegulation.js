import React from 'react'
import Button from "react-bootstrap/cjs/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/cjs/Col";
import axios from "axios";

const EmailRegulation = ({setShowEmailRegulation,issue, setEmailData, setShowForm, emailData, showEmailRegulation}) => {
    // console.log(emailData)
    const handleChange = e => {
        e.preventDefault()
        setEmailData({
                ...emailData,
                [e.target.name]: e.target.value
            }
        )
    }
    const send = async e => {
        e.preventDefault();
        let response = await axios.post(`https://sendemail-service.herokuapp.com/taxpayers`, {issue, emailData})
        console.log(response)
    }
    const click = e => {
        e.preventDefault()
        setShowForm(false)
        setShowEmailRegulation(true)
    }
    return (
        <div hidden={showEmailRegulation}>
            <p> FROM add your full name nad surname</p>
            <Form.Group controlId="nameER">
                <Form.Row>
                    <Col>
                        <Form.Control
                            plaintext
                            type="text"
                            placeholder="Name"
                            name="name"
                            onChange={handleChange}
                            required

                        />
                    </Col>
                    <Col>
                        <Form.Control
                            plaintext
                            type="email"
                            placeholder="Enter email"
                            name="email"
                            onChange={handleChange}
                            required
                        />
                    </Col>
                </Form.Row>
            </Form.Group>
            <div>
                <p>
                    To: REPRESENTATIVE INFORMATION
                </p>

                {emailData.name} {emailData.city}-{emailData.state}
            </div>
            <div>
                <p> SUBJECT</p>

                <p>Fight Against Burdensome Regulation</p>
            </div>
            <p>
                Dear {emailData.name} ,
                I live in your electorate and wanted to let you know that I believe Australia has far too many intrusive
                and unnecessary regulations.<br/>
                The burden of regulations in this country severely stifles entrepreneurs
                and small business, and in the end it hurts the every-day Australian worker the most.<br/>
                As a voter, this
                is my most important issue and I am urging you to fight in Canberra for less regulation.<br/>
                Thank you.
            </p>
            <div>
                <Button
                    onClick={send}
                >
                    Send
                </Button>
                <Button
                    onClick={click}
                >
                    Back
                </Button>
            </div>
        </div>
    )
}

export default EmailRegulation;


