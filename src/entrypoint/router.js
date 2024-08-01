import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainNavigation from '../components/layout/MainNavigation';
import AllMeetupsPage from '../pages/home/AllMeetupsPage';
import NewMeetupPage from '../pages/NewMeetup/NewMeetup';
import FavoritesPage from '../pages/Favorites/Favorites';
import Layout from '../components/layout/Layout';

function AppRouter() {
  return (
    <Router>
      <MainNavigation />
      <Layout>
        <Routes>
          <Route path="/" element={<AllMeetupsPage />} />
          <Route path="/new-meetup" element={<NewMeetupPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default AppRouter;
