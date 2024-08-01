import React from "react";
import { useFetch } from "../../util-hooks/useFetch";
import { useLocation } from "react-router-dom";
import { MeetupList } from "./components/MeetupList";

export default function AllMeetupsPage() {
  const { data, error, loading } = useFetch({ url: "/data.json" });
  const location = useLocation();
  const locationState = location?.state?.meetupData;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const meetups = locationState ? [...data, locationState] : data;

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={meetups} />
    </section>
  );
}