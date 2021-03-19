import React, {useState} from 'react'
import Button from "react-bootstrap/cjs/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/cjs/Col";
import axios from "axios";
import Alert from "react-bootstrap/Alert";

const EmailWaste = ({dataUser,setThankYou,setDataUser, setShowEmailTax, issue, emailData, setEmailData, setShowEmailWaste, setShowForm, showEmailWaste}) => {
    // console.log(emailData)
    const [validated, setValidated] = useState(false);
    const [error, setError] = useState(false)
    const handleChange = e => {
        e.preventDefault()
        setDataUser({
            ...dataUser,
            [e.target.name]: e.target.value
        })

    }
    const {nameUser} = dataUser
    const send = async e => {
        e.preventDefault();
        const form = e.currentTarget;

        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        setValidated(true);
        if (nameUser.trim() === '') {
            setError(true)
            return
        }
        setError(false)

        let response = await axios.post(`http://localhost:8080/taxpayers`, {issue, emailData,dataUser})

        if (response.status === 200) {
            await
                setThankYou(false)
            setShowEmailWaste(true)
        } else {

            //   setTryAgain(false)
        }
    }
    const click = e => {
        e.preventDefault()
        setShowForm(false)
        setShowEmailWaste(true)
    }
    return (
        <div hidden={showEmailWaste}>
            <p style={{textAlign: 'center'}}> FROM add your full name nad surname</p>
            {error ? <Alert variant={'danger'}>
                All fields are required!
            </Alert> : null }
            <Form noValidate validated={validated}>
            <Form.Group controlId="nameEW">
                <Form.Row>
                    <Col>
                        <Form.Control
                            plaintext
                            type="text"
                            placeholder="Name"
                            name="nameUser"
                            onChange={handleChange}
                            required

                        />
                    </Col>
                    <Col>
                        <Form.Control
                            plaintext
                            type="email"
                            placeholder={"email"}
                            onChange={handleChange}
                            name="emailUser"
                        />
                    </Col>
                </Form.Row>
            </Form.Group>
            </Form>
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
                <Button onClick={send}>
                    Send
                </Button>
                <Button onClick={click}>
                    Back
                </Button>
            </div>
        </div>
    )
}

export default EmailWaste;


