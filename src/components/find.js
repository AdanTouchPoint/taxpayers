import React, {useState} from 'react'
import Button from "react-bootstrap/cjs/Button";
import Form from "react-bootstrap/Form";
import List from "./list";
import axios from "axios";
import EmailTax from "./emailTax";
import EmailRegulation from "./emailRegulation";
import EmailWaste from "./emailWaste";
import Col from "react-bootstrap/cjs/Col";
const Find = ({showForm, dataUser, setDataUser, issue,setShowForm,mp,setMp,senator,setSenator,emailData,setEmailData}) => {
    console.log('EmailFindPerros')
    const [showEmailTax,setShowEmailTax] = useState( true)
    const [showEmailRegulation,setShowEmailRegulation] = useState( true)
    const [showEmailWaste,setShowEmailWaste] = useState( true)
    const  handleChange = e => {
        setDataUser ({
            ...dataUser,
            [e.target.name]: e.target.value
        })
    }
    const onSubmit = async e => {
        console.log('here')

        //validar info form


        //peticion a BD
        const response = await axios.post(`http://localhost:8080/sendtwit`, {dataUser})
        console.log(response)
        const dataPayload = await response.data.data
        const getMp  = await response.data.getMp
        setSenator(dataPayload)
        setMp(getMp)

    }
    return (
        <div>
            <div hidden={showForm}>
                <Form.Group
                    controlId="cpE">
                    <Form.Row>
                        <Col>
                            <Form.Control
                                type='text'
                                onChange={handleChange}
                                placeholder="Code Postal"
                                name="zipCode"
                                required
                                maxLength="4"
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                type="email"
                                onChange={handleChange}
                                placeholder="Enter email"
                                name="email"
                                required
                            />
                        </Col>
                    </Form.Row>
                </Form.Group>
            <Button
            onClick={onSubmit}>Submit</Button>
            <div>
                <p>NOTE: Choose only one Representative at a time.
                    If you wish to contact more than one representative, or add further emails to the same
                    Representative, you will have the option to repeat after sending each email.</p>
            </div>
            <div
            >
                <h2>MP</h2>
                {mp.length>0 && mp.filter(item => item.govt_type=== 'Federal MPs').map((mps, index)=> (
                    <List
                        setShowForm={setShowForm}
                        issue={issue}
                        emailData={emailData}
                        setEmailData={setEmailData}
                        mps={mps}
                        key={index}
                        setShowEmailTax={setShowEmailTax}
                        setShowEmailWaste={setShowEmailWaste}
                        setShowEmailRegulation={setShowEmailRegulation}
                    />)
                )}
            </div>
            <div>
                <h2>Senators</h2>
                {senator.filter(item => item.govt_type === 'Federal Senators').map((mps, index) => (
                            <div>
                                <List
                                    setShowForm={setShowForm}
                                    issue={issue}
                                    emailData={emailData}
                                    setEmailData={setEmailData}
                                    mps={mps}
                                    key={index}
                                    setShowEmailWaste={setShowEmailWaste}
                                    setShowEmailTax={setShowEmailTax}
                                    setShowEmailRegulation={setShowEmailRegulation}
                                />
                            </div>
                            )
                    )}
            </div>
        </div>
            <div>
                <EmailTax
                    issue={issue}
                    setShowEmailTax={setShowEmailTax}
                    showEmailTax={showEmailTax}
                    emailData={emailData}
                    setEmailData={setEmailData}
                    setShowForm={setShowForm}
                />
                <EmailRegulation
                    issue={issue}
                    setShowForm={setShowForm}
                    setShowEmailRegulation={setShowEmailRegulation}
                    emailData={emailData}
                    setEmailData={setEmailData}
                    showEmailRegulation={showEmailRegulation}
                />
                <EmailWaste
                    issue={issue}
                    setShowEmailWaste={setShowEmailWaste}
                    setShowForm={setShowForm}
                    showEmailWaste={showEmailWaste}
                    emailData={emailData}
                    setEmailData={setEmailData}
                />
            </div>
        </div>

    )
}

export default Find;

