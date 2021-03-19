import React  from 'react'


const ThankYou = ({thankYou}) => {


    return (

        <div hidden={thankYou} className={'container'} style={{justifyContent:'center', display:'flex'}}>
            <div style={{maxWidth: '700px', width: '100%'}}>
                <h1>Thank You!</h1>
                <h3>Your submission has been sent</h3>
            </div>
        </div>


    )
}

export default ThankYou;