import { useState } from 'react'; 
import { useEffect } from 'react';

import MeetupList from '../components/meetups/MeetupList'


function AllMeetupsPage() {
    const { REACT_APP_API_URL } = process.env;
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {
      setIsLoading(true);
      fetch(
        REACT_APP_API_URL
      ).then((response) => {
        return response.json();
      }).then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id:key,
            ...data[key]
          }

          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetups(meetups);
      });  
    }, [REACT_APP_API_URL]);


    if (isLoading) {
      return (
        <section>
          <p>Loading...</p>
        </section>
      );
    }

    return <section>
        <h1>All Meetup Page</h1>
        <h3>{REACT_APP_API_URL}</h3>
        <MeetupList meetups={loadedMeetups} />
    </section>
    
}

export default AllMeetupsPage;