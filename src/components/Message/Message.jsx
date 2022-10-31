import { useState } from 'react';
import companies from '../../Companies.json';
import guests from '../../Guests.json';
import messages from '../../Messages.json';
import './Message.css';


function Message () {

    // console.log('companies:', companies);
    // console.log('guests:', guests);
    // console.log('messages', messages);

    // variables used in onChange for select inputs
    const [selectCompanyId, setSelectCompanyId] = useState();
    const [selectGuestId, setSelectGuestId] = useState();
    const [selectMessageId, setSelectMessageId] = useState();

    // variables used to render message
    const [selectMessage, setSelectMessage] = useState();
    const [selectGuest, setSelectGuest] = useState({});
    const [selectCompany, setSelectCompany] = useState({});
    const [greeting, setGreeting] = useState();

    const handleCompanyChange = (event) => {
        // console.log('event.target.value in handleCompanyChange', event.target.value);
        setSelectCompanyId(event.target.value);
        // console.log('selectCompanyId', selectCompanyId);
    }

    const handleGuestChange = (event) => {
        // console.log('event.target.value in handleGuestChange', event.target.value);
        setSelectGuestId(event.target.value);
        // console.log('selectGuestId', selectGuestId);
    }

    const handleMessageChange = (event) => {
        // console.log('event.target.value in handleMessageChange', event.target.value);
        setSelectMessageId(event.target.value);
        // console.log('selectMessageId', selectMessageId);
    }


    const handleSubmit = (event) => {
        event.preventDefault();

        // console.log(selectGuestId, selectCompanyId, selectMessageId);

        // loops through guests array
        // compares id of selected guest with all guests in the array
        // saves the correct guest in the variable, selectGuest
        for (let i = 0; i < guests.length; i++) {
            if (guests[i].id === Number(selectGuestId)) {
                setSelectGuest(guests[i]);
                console.log('selectGuest', selectGuest)
            }
        }

        // loops through companies array
        // compares id of selected company with all companies in the array
        // saves the correct company in the variable, selectCompany
        for (let i = 0; i < companies.length; i++) {
            if (companies[i].id === Number(selectCompanyId)) {
                setSelectCompany(companies[i]);
                console.log('selectCompany', selectCompany)
            }
        }

        // assigning the id from the selected message to a new variable that will render in the return
        // prevents half populated message from showing up before "submit" is clicked
        setSelectMessage(selectMessageId);

        // seperate function to select the correct greeting based on time of day
        greetingGenerator();

    }

    const greetingGenerator = () => {
        // console.log('timestamp:', selectGuest.reservation?.startTimestamp)

        let date = new Date(selectGuest.reservation?.startTimestamp * 1000);
        // console.log('date:', date)

        // Hours part from the timestamp
        let hours = date.getHours();
        // console.log('hours:', hours)

        // conditional statement to render correct greeting, based on hour of timestamp
        if (hours < 12) {
            setGreeting('Good Morning')
        } 
        else if (hours >= 12 && hours <= 17) {
            setGreeting('Good Afternoon')
        }
        else if (hours > 17) {
            setGreeting('Good Evening')
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3 className='heading'>Please Select a Company, Guest, and Message</h3>

                {/* INPUT FOR SELECTING COMPANY */}
                <div className='input-div'>
                    <label className='input-label'>Company:</label>
                    <select
                        onChange={handleCompanyChange}
                    >
                        {/* mapping through all of the companies */}
                        {/* creating a select option for each */}
                        {companies.map((companyItem => {
                            return (
                                <option key={companyItem.id} value={companyItem.id}>{companyItem.company}</option>
                            )
                        }))}
                    </select>
                </div>

                {/* INPUT FOR SELECTING GUEST */}
                <div className='input-div'>
                    <label className='input-label'>Guest:</label>
                    <select
                        onChange={handleGuestChange}
                    >
                        {/* mapping through all of the guests */}
                        {/* creating a select option for each */}
                        {guests.map((guest => {
                            return (
                                <option key={guest.id} value={guest.id}>{guest.firstName} {guest.lastName}</option>
                            )
                        }))}
                    </select>
                </div>


                {/* INPUT FOR SELECTING MESSAGE */}
                <div className='input-div'>
                    <label className='input-label'>Messsage:</label>
                    <select
                        className='message-input'
                        onChange={handleMessageChange}
                    >
                        {/* mapping through all of the guests */}
                        {/* creating a select option for each */}
                        {messages.map((message => {
                            return (
                                <option key={message.id} value={message.id}> {message.example} </option>
                            )
                        }))}
                    </select>
                </div>

                <button type='submit'>Submit!</button>
            </form>

            {/* conditionally renders message based on the id of the message selected */}
            <div className='message-output'>
                <h3>Message:</h3>
                {Number(selectMessage) === 1 &&
                    <h4>{greeting} {selectGuest.firstName}, and welcome to {selectCompany.company}. Room {selectGuest.reservation?.roomNumber} is now ready!</h4>
                }

                {Number(selectMessage) === 2 &&
                        <h4>{greeting} {selectGuest.firstName}, and thank you for choosing {selectCompany.company}! Please make yourself at home in Room {selectGuest.reservation?.roomNumber}. We hope you enjoy your stay in {selectCompany.city}!</h4>
                }
            </div>
        </div>
    )
}

export default Message;