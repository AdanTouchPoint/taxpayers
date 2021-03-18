import React from 'react'
import Button from "react-bootstrap/cjs/Button";

const List = ({issue, mps, setShowForm}) => {
    let tweetText
    console.log(mps)
    switch (issue) {
        case '1' :
            tweetText = `.${mps.twitter}%2C+I%E2%80%99m+a+voter+in+your+electorate%2C+and+I+think+our+taxes+are+too+high%21+Australians+deserve+to+keep+more+of+their+own+money+and+I%E2%80%99m+asking+you+to+fight+in+Canberra+for+lower+taxes.+%0D%0A%0D%0ASent+from+%40AusTaxpayers%E2%80%99+Contact+Your+Politician+Platform.&original_referer=https://www.taxpayers.org.au/let-them-know-you-care`
            break
        case '2':
            tweetText = `.${mps.twitter}%2C+I%E2%80%99m+a+voter+in+your+electorate%2C+and+I+want+you+to+fight+in+Canberra+for+fewer+regulations.+Small+businesses+and+the+middle+class+are+the+backbones+of+our+economy.%0D%0A%0D%0ASent+from+%40AusTaxpayers%E2%80%99+Contact+Your+Politician+Platform.&original_referer=https://www.taxpayers.org.au/let-them-know-you-care`
            break
        case '3':
            tweetText = `.${mps.twitter}%2C+I%E2%80%99m+a+voter+in+your+electorate%2C+and+I%E2%80%99m+very+concerned+about+wasteful+spending.+Taxpayer+dollars+are+being+wasted+on+unnecessary+programs.+I%E2%80%99m+asking+you+to+fight+for+a+better+use+of+our+money%21%0D%0A%0D%0ASent+from+%40AusTaxpayers%E2%80%99+Contact+Your+Politician+Platform.&original_referer=https://www.taxpayers.org.au/let-them-know-you-care`
            break
    }
    return (
        <div>
            <div>
                <h3>{mps.name}</h3>
                <p>For: {mps.address}, City: {mps.city}, -State: {mps.state}</p>
                {mps.twitter ?
                    <Button
                        href={`https://twitter.com/intent/tweet?text=${tweetText}`}
                        target={"blank"}
                    >
                        SendTweet
                    </Button> :
                    <p>No Tiene tweeter</p>
                }
            </div>
        </div>
    )
}

export default List;


