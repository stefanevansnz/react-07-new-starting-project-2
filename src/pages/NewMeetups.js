import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetupsPage() {
    function addMeetupHandler(meetupData) {
        const { REACT_APP_API_URL } = process.env;

        fetch(
            REACT_APP_API_URL,
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                } 
            }
        );
    } 

    return <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>        
}

export default NewMeetupsPage;