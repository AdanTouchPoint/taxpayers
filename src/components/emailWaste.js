import React from 'react'
import Button from "react-bootstrap/cjs/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/cjs/Col";

const EmailWaste = ({emailData, setShowEmailWaste, setShowForm, showEmailWaste}) => {
    // console.log(emailData)
    const click = e => {
        e.preventDefault()
        setShowForm(false)
        setShowEmailWaste(true)
    }
    return (
        <div hidden={showEmailWaste}>
            <p style={{textAlign:'center'}}> FROM add your full name nad surname</p>
            <Form.Group controlId="nameEW">
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

                <p>Time to End Wasteful Spending</p>
            </div>
            <p>
                Dear {emailData.name} ,
                I live in your electorate and wanted to let you know that I'm tired of wasteful government
                spending. <br/>
                My tax dollars are being spent on unnecessary government programs, subsidies, and initiatives, and we
                must
                put an end to it.<br/>
                As a voter, this is my most important issue and I am urging you to work in Canberra
                towards eliminating waste.<br/>
                Thank you.
            </p>
            <div>
                <Button
                    onClick={click}
                >Send</Button>
                <Button>Back</Button>
            </div>
        </div>
    )
}

export default EmailWaste;


