import React from 'react'
import Button from "react-bootstrap/cjs/Button";

const List = ({issue, mps, setShowForm, setShowEmailTax, setShowEmailRegulation, setShowEmailWaste, setEmailData,emailData}) => {

    const click = e => {
        e.preventDefault()
        setEmailData(
            mps)
        switch (issue) {
            case '1' :
                setShowForm(true)
                setShowEmailTax(false);
                break
            case '2':
                setShowForm(true)
                setShowEmailRegulation(false);
                break
            case '3':
                setShowForm(true)
                setShowEmailWaste(false);
                break
        }
    }
     return (
        <div>
            <div >
                <h3>{mps.name}</h3>
                <p>For: {mps.address}, City: {mps.city}, -State: {mps.state}</p>
                {mps.email ?
                    <Button
                        onClick={click}
                    >
                        SendEmail
                    </Button> :
                    <p>No Tiene email</p>
                }
            </div>
        </div>
    )
}

export default List;


