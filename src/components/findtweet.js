import React from 'react'
import Button from "react-bootstrap/cjs/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/cjs/Col";
import ListTweet from "./listtweet";
import axios from "axios";

const FindTweet = ({setShowTweetForm,showTweetForm, dataUser, setDataUser, issue,  mp, setMp, setSenator, senator}) => {
    console.log('finTweeterPErros')

    const handleChange = e => {
        setDataUser({
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
        const getMp = await response.data.getMp
        setSenator(dataPayload)
        setMp(getMp)

    }
    return (
        <div style={{justifyContent: 'center', display: 'flex'}}>
            <div hidden={showTweetForm}>
                <h1>Find you local MP here:</h1>
                <Form.Group
                    controlId="cp">
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
                    {mp.length > 0 && mp.filter(item => item.govt_type === 'Federal MPs').map((mps, index) => (
                        <ListTweet
                            setShowTweetForm={setShowTweetForm}
                            issue={issue}
                            mps={mps}
                            key={index}

                        />)
                    )}
                </div>
                <div>
                    <h2>Senators</h2>
                    {senator.filter(item => item.govt_type === 'Federal Senators').map((mps, index) => (
                            <div>
                                <ListTweet
                                    setShowTweetForm={setShowTweetForm}
                                    issue={issue}
                                    mps={mps}
                                    key={index}
                                />
                            </div>
                        )
                    )}
                </div>
            </div>

        </div>

    )
}

export default FindTweet;

