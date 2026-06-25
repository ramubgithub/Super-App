import Navbar from "../components/navbar/Navbar";

import ProfileCard from "../components/dashboard/ProfileCard";
import WeatherWidget from "../components/dashboard/WeatherWidget";
import NotesWidget from "../components/dashboard/NotesWidget";
import TimerWidget from "../components/dashboard/TimerWidget";
import NewsWidget from "../components/dashboard/NewsWidget";
import MovieWidget from "../components/dashboard/MovieWidget";

import "./Dashboard.css";

function Dashboard() {
  return (
    <>
      <Navbar />

      <section className="dashboard">
        <div className="dashboard-grid">

          <ProfileCard />

          <WeatherWidget />

          <NotesWidget />

          <TimerWidget />

          <NewsWidget />

          <MovieWidget />

        </div>
      </section>
    </>
  );
}

export default Dashboard;