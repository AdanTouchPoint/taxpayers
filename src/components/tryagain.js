import React from 'react'


const TryAgain = ({tryAgain}) => {


    return (

        <div hidden={tryAgain} className={'container'} style={{justifyContent:'center', display:'flex'}}>
            <div style={{maxWidth: '700px', width: '100%'}}>
                <h1>Sorry!</h1>
                <h3>Your submission hasn´t been sent, TRY AGAIN!</h3>
            </div>
        </div>


    )
}

export default TryAgain;