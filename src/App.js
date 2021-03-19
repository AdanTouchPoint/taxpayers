import React, {useEffect, useState} from 'react';
import Find from "./components/find";
import FindTweet from "./components/findtweet";
import Button from "react-bootstrap/cjs/Button";
import Container from "react-bootstrap/cjs/Container";
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";
import ThankYou from "./components/thankyou";

function App() {
    const [showEmailTax, setShowEmailTax] = useState(true)
    const [showEmailRegulation, setShowEmailRegulation] = useState(true)
    const [showEmailWaste, setShowEmailWaste] = useState(true)
    const [thankYou, setThankYou] = useState(true)
    const [tryAgain, setTryAgain] = useState(true)
    const [emailData, setEmailData] = useState({
        nameUser: ''
    })
    const [mp, setMp] = useState([])
    const [senator, setSenator] = useState([])
    const [dataUser, setDataUSer] = useState({
        zipCode:'',
        emailUser:'',
        nameUser:''
    })
    const [issue, setIssue] = useState([])
    const [service, setService] = useState([])
    const [showForm, setShowForm] = useState(true)
    const [showTweetForm, setShowTweetForm] = useState(true)

    const chooseIssue = e => {
        e.preventDefault();
       // if (dataUser.zipCode.trim() !== '')  {
       //     setDataUSer({
       //         zipCode:'',
       //         emailUser:'',
       //         nameUser:''})
       // }
        //cambiar  estado de issue
        setIssue(e.target.name)
        if (showForm === false || showTweetForm === false || thankYou === false || tryAgain === false || showEmailTax === false || showEmailWaste === false || showEmailRegulation === false) {
            setShowForm(true)
            setShowTweetForm(true)
            setThankYou(true)
            setTryAgain(true)
            setShowEmailWaste(true)
            setShowEmailRegulation(true)
            setShowEmailTax(true)
        }

    }
    const chooseEmail = async e => {
        e.preventDefault();
        //Mostrar Find twet o find email
        await setService(e.target.name)

        if (showForm === false || showTweetForm === false || thankYou === false || tryAgain === false  || showEmailTax === false || showEmailWaste === false || showEmailRegulation === false) {
            setThankYou(true)
            setShowTweetForm(true)
            setTryAgain(true)
            setShowEmailWaste(true)
            setShowEmailRegulation(true)
            setShowEmailTax(true)
        } else {
            setShowForm(false)
        }
        if (mp.length > 0 || senator.length > 0) {
            setSenator([])
            setMp([])
        }
    }
    const chooseTweet = async e => {
        e.preventDefault()
        await setService(e.target.name)
        if (showForm === false || showTweetForm === false || thankYou === false || tryAgain === false  || showEmailTax === false || showEmailWaste === false || showEmailRegulation === false) {
            setThankYou(true)
            setShowForm(true)
            setTryAgain(true)
            setShowEmailWaste(true)
            setShowEmailRegulation(true)
            setShowEmailTax(true)
        } else {
            setShowTweetForm(false)
        }
        if (mp.length > 0 || senator.length > 0) {
            setSenator([])
            setMp([])
        }
    }

    useEffect(() => {
        console.log(issue)
    }, [issue])
    useEffect(() => {
        console.log(service)
    }, [service])

    return (
        <div>
            <Row className={'head'} style={{maxWidth: '4000px', width: '100%'}}>

            </Row>
            <Container>

                <Row style={{textAlign: 'justify', padding: '25px'}}>
                    <Col>
                        <h1>LET THEM KNOW YOU CARE<br/>
                            Find your MP or Senator with your Postal<br/>
                            Code and get in touch!
                        </h1>
                        <p style={{textAlign: 'justify', fontWeight: 'bold', padding: '20px', margin: '10px'}}>
                            Join the Australian Taxpayers’ Alliance and hundreds of Australian individuals and
                            organisations
                            in<br/>
                            our fight against over-regulation, wasteful spending and burdensome taxes. Use the power of
                            social<br/>
                            media to find your MP or Senator and make your voice heard!
                        </p>
                        <p style={{textAlign: 'center', padding: '15px', fontWeight: 'bold'}}>CHOOSE YOUR ISSUE!</p>
                    </Col>
                </Row>


                <Row style={{textAlign: 'center', margin: '35px', padding: '35px'}}>
                    <Col>
                        <Button
                            size="lg"
                            variant="dark"
                            name={'1'}
                            onClick={chooseIssue}
                        >
                            TAX
                        </Button>
                    </Col>
                    <Col>
                        <Button
                            size="lg"
                            variant="dark"
                            name={'2'}
                            onClick={chooseIssue}
                        >
                            Regulation
                        </Button>
                    </Col>
                    <Col>
                        <Button
                            size="lg"
                            variant="dark"
                            name={'3'}
                            onClick={chooseIssue}
                        >
                            Waste
                        </Button>
                    </Col>
                </Row>
                <Row style={{margin: '35px', textAlign: 'center', padding: '35px'}}>
                    <Col style={{
                        borderBlockColor: 'black'
                    }}>
                        <Button
                            size="lg"
                            variant="dark"
                            name={'email'}
                            onClick={chooseEmail}
                        >
                            emailThem
                        </Button>
                    </Col>
                    <Col>
                        <Button
                            size="lg"
                            variant="dark"
                            name={'tweet'}
                            onClick={chooseTweet}
                        >
                            tweet Them
                        </Button>
                    </Col>
                </Row>

                <Find
                    showEmailWaste={showEmailWaste}
                    setShowEmailWaste={setShowEmailWaste}
                    showEmailTax={showEmailTax}
                    setShowEmailTax={setShowEmailTax}
                    showEmailRegulation={showEmailRegulation}
                    setShowEmailRegulation={setShowEmailRegulation}
                    thankYou={thankYou}
                    setThankYou={setThankYou}
                    tryAgain={tryAgain}
                    setTryAgain={setTryAgain}
                    issue={issue}
                    dataUser={dataUser}
                    setDataUser={setDataUSer}
                    showForm={showForm}
                    setShowForm={setShowForm}
                    mp={mp}
                    setMp={setMp}
                    senator={senator}
                    setSenator={setSenator}
                    setEmailData={setEmailData}
                    emailData={emailData}
                />

                <FindTweet
                    thankYou={thankYou}
                    setThankYou={setThankYou}
                    tryAgain={tryAgain}
                    setTryAgain={setTryAgain}
                    issue={issue}
                    dataUser={dataUser}
                    setDataUser={setDataUSer}
                    setShowTweetForm={setShowTweetForm}
                    showTweetForm={showTweetForm}
                    mp={mp}
                    setMp={setMp}
                    senator={senator}
                    setSenator={setSenator}
                />
                <ThankYou
                    thankYou={thankYou}
                />
            </Container>
            <div style={{
                backgroundColor: '#3a4c58',
                height: '20rem',
                padding: '35px',
                marginTop: '35px',
                color: 'white'
            }}>
                <p>
                    © 2020 Australian Taxpayers Alliance <br/>
                    <br/>
                    The Elan, 1 Kings Cross Road<br/>
                    Darlinghurst, NSW 2010<br/>
                    <br/>
                    1800 CUT TAX<br/>
                </p>
            </div>
        </div>
    );
}

export default App;


