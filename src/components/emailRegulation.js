import React, {useState} from 'react'
import Button from "react-bootstrap/cjs/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/cjs/Col";
import axios from "axios";
import Alert from "react-bootstrap/Alert";

const EmailRegulation = ({dataUser,setDataUser,setShowEmailRegulation,issue,setThankYou,setTryAgain, setEmailData, setShowForm, emailData, showEmailRegulation}) => {
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
    console.log(dataUser)
    const send = async e => {
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

        let response = await axios.post(`https://sendemail-service.herokuapp.com/taxpayers`, {issue, emailData, dataUser})

        if ( response.status === 200)  {
            setThankYou(false)
            setShowEmailRegulation(true)
        } else {

            //     setShowEmailTax(true)
            //   setTryAgain(false)
        }
    }
    const click = e => {
        e.preventDefault()
        setShowForm(false)
        setShowEmailRegulation(true)
    }
    return (
        <div hidden={showEmailRegulation}>
            <p> FROM add your full name nad surname</p>
            {error ? <Alert variant={'danger'}>
                All fields are required!
            </Alert> : null }
            <Form noValidate validated={validated}>
            <Form.Group controlId="nameER">
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


