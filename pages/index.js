import React, { Fragment } from "react";
import MeetupList from "../components/meetups/MeetupList";

function Home() {
  const DUMMY_MEETUPS = [
    {
      id: "m1",
      title: "A fIRST Meetup",
      image:
        "https://images.unsplash.com/photo-1545665277-5937489579f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      address: "Some address 10, 12345 Some City1",
      description: "This is a 1ST meetup! ",
    },
    {
      id: "m2",
      title: "A Second Meetup",
      image:
        "https://images.unsplash.com/photo-1545665277-5937489579f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      address: "Some address 20, 67890 Some City2",
      description: "This is a 2ND meetup! ",
    },
  ];
  return (
    <Fragment>
      <MeetupList meetups={DUMMY_MEETUPS} />
    </Fragment>
  );
}

export default Home;
