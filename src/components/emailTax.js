import React from 'react'
import Button from "react-bootstrap/cjs/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Col from "react-bootstrap/cjs/Col";

const EmailTax = ({issue, setShowForm, emailData, setShowEmailTax, showEmailTax, setEmailData}) => {
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
        let response = await axios.post(`http://localhost:8080/taxpayers`, {issue, emailData})
        console.log(response)
    }
    const click = e => {
        e.preventDefault()
        setShowEmailTax(true)
        setShowForm(false)
    }

    return (
        <div hidden={showEmailTax}>
            <p> FROM add your full name nad surname</p>
            <Form.Group controlId="nameET">
                <Form.Row>
                    <Col>
                        <Form.Control
                            plaintext
                            type="text"
                            placeholder="Name"
                            name="name"
                            required

                        />
                    </Col>
                    <Col>
                        <Form.Control
                            plaintext
                            type="email"
                            placeholder="Enter email"
                            name="email"
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

                <p>Fight for Lower Taxes</p>
            </div>
            <p>
                Dear {emailData.name} ,
                I live in your electorate and I wanted to let you know that a fair tax system is incredibly important to
                me.<br/>
                Australians deserve to keep more of their hard-earned money, so they can spend, save and invest
                their dollars as they see fit.<br/>
                As a voter, this is my most important issue and I am urging you to fight
                in Canberra for lower taxes.<br/>
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

export default EmailTax;


