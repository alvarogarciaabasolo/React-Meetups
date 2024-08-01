import MeetupItem from "../../../components/meetups/MeetupItem";
import classes from "../../../components/meetups/MeetupList.module.css";

export function MeetupList({ meetups }) {
  return (
    <ul className={classes.list}>
      {meetups.map((item) => (
        <MeetupItem key={item.id} item={item} />
      ))}
    </ul>
  );
}