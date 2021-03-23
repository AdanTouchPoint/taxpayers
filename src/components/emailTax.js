import React,{useState} from 'react'
import Button from "react-bootstrap/cjs/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
import Col from "react-bootstrap/cjs/Col";

const EmailTax = ({setDataUser,dataUser,issue,setThankYou, setTryAgain, setShowForm, emailData, setShowEmailTax, showEmailTax, setEmailData}) => {
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

        let response = await axios.post(`https://sendemail-service.herokuapp.com//taxpayers`, {issue, emailData,dataUser})

        if ( response.status === 200)  {
            //mostrar agradecimiento
              setThankYou(false)
              setShowEmailTax(true)
        } else {
            //mostrar intentar de nuevo
            //     setShowEmailTax(true)
            //   setTryAgain(false)
        }
    }
    const click = e => {
        e.preventDefault()
        setShowEmailTax(true)
        setShowForm(false)
    }

    return (
        <div hidden={showEmailTax}>

            <p> FROM add your full name nad surname</p>
            {error ? <Alert variant={'danger'}>
                All fields are required!
            </Alert> : null }
            <Form noValidate validated={validated}>
            <Form.Group controlId="nameET">
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


