import { useFavorites } from "../../context/FavoritesContext";
import MeetupItem from "../../components/meetups/MeetupItem";
import classes from "./Favorites.module.css";

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return <p>No favorites yet.</p>;
  }

  return (
    <section>
      <h1>Favorites Page</h1>
      <ul className={classes.list}>
        {favorites.map((item) => (
          <MeetupItem key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}
