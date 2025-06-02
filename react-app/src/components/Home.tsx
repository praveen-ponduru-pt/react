import { useAuth } from "../contexts/AuthContext";
import MovieList from "./MovieList";
import NavBar from "./LeftNavBar";
import LeftNavBar from "./LeftNavBar";
import RightNavBar from "./RightNavBar";
import '../css/Home.css'
import RegistrationForm from "./RegistrationForm";
import { useState } from "react";
import ToDo from "./Todo";
import ChatBox from "./ChatBox";
import Calendar from "./Calendar";
import AddressBook from "./AddressBook";
import MovieDetails from './MovieDetails';
import Axios from './Axios';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";

const Home = () => {
    const { user } = useAuth();
    const [activeMenu, setActiveMenu] = useState('dashboard');

    return (
        <>

            <Router>

                {/* 
            <MovieList></MovieList> */}
                <div className="layout">
                    <div className="left-navbar">
                        <nav>
                            <Link to='dashboard'>Dashboard</Link>
                            <Link to='movies-app'>Movies App </Link>
                            <Link to='to-do-app'>To Do App</Link>
                            <Link to='chat-box'>Chat Box</Link>
                            <Link to='registration-form'>Registration Form</Link>
                            <Link to='calendar'>Calendar</Link>
                            <Link to='address-book'>Address Book</Link>
                            <Link to='axios'>Axios</Link>

                        </nav>
                    </div>
                    <div className="main-content">
                        <Routes>
                            <Route path="/" element={<Navigate to="/dashboard" replace />} />

                            <Route path="/dashboard" element={
                                <div><h1>Home Page</h1>
                                    <h2>Welcome to the Movies App, {user.username}!!</h2>
                                </div>} />
                            <Route path="/movies-app" element={<MovieList />} />
                            <Route path="/to-do-app" element={<ToDo />} />
                            <Route path="/chatbox" element={<ChatBox />} />
                            <Route path="/registration-form" element={<RegistrationForm />} />
                            <Route path="/calendar" element={<Calendar />} />
                            <Route path="/address-book" element={<AddressBook />} />
                            <Route path="/movies-app/:id" element={<MovieDetails />} />
                            <Route path="/axios" element={<Axios />} />
                        </Routes>
                    </div>
                    <RightNavBar />
                </div>
            </Router>
        </>
    )
}

export default Home;