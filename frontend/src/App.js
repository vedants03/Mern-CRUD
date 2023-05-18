import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import Books from "./components/Book/Books";
import About from "./components/About";
import BookDetail from "./components/Book/BookDetail";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register"
import Profile from "./components/Profile/Profile"

function App() {
  return (
    <React.Fragment>
      {/* <Header/> */}
      <main>
        <Routes>
          <Route path="/" element={<Login />} exact />
          <Route path="/home" element={<Home />} exact />
          <Route path="/signup" element={<Register/>} exact />
          <Route path="/add" element={<AddBook />} exact />
          <Route path="/books" element={<Books />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/books/:id" element={<BookDetail />} exact />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
