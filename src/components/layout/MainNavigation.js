import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import classes from "./MainNavigation.module.css";
import { useFavorites } from "../../context/FavoritesContext";

export default function MainNavigation() {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const lastScrollTop = useRef(0);
  const { favorites } = useFavorites();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;

      if (currentScrollTop > lastScrollTop.current) {
        setIsScrollingUp(false);
      } else {
        setIsScrollingUp(true);
      }
      lastScrollTop.current = currentScrollTop <= 0 ? 0 : currentScrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${classes.header} ${isScrollingUp ? "" : classes.hidden}`} data-test="navigation-header">
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">
              My Favorites
              <span className={classes.badge}>{favorites.length}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
