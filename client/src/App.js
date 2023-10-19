import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/LandingPage";
import GenerateToken from "./components/GenerateToken";
import Footer from './components/Footer';
import CustomiseDocuments from "./components/CustomiseDocuments";

const App = () => {
  const [open, isOpen] = useState(false);
  const [chatbox, openChatbox] = useState(false);

  const handleSideBar = () => {
    isOpen(!open);
  };

  const handleSidebarChat = () => {
    openChatbox(!chatbox);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
     <Routes>
        <Route
          path={"/"}
          element={
            <Landing
              comp="/"
              open={open}
              handleSideBar={handleSideBar}
              handleSidebarChat={handleSidebarChat}
              chatbox={chatbox}
            />
          }
        />
        <Route
          path={"/about"}
          element={
            <Landing comp="/about" open={open} handleSideBar={handleSideBar} />
          }
        />
        <Route
          path={"/contact"}
          element={
            <Landing
              comp="/contact"
              open={open}
              handleSideBar={handleSideBar}
            />
          }
        />
        <Route
          path={"/privacy"}
          element={
            <Landing
              comp="/privacy"
              open={open}
              handleSideBar={handleSideBar}
            />
          }
        />
        <Route
          path={"/terms"}
          element={
            <Landing comp="/terms" open={open} handleSideBar={handleSideBar} />
          }
        />

        <Route
          path="/Generate-Token"
          element={<GenerateToken open={open} handleSideBar={handleSideBar} />}
        />
        <Route
          path="/Customize-Docs"
          element={
            <CustomiseDocuments
              open={open}
              handleSideBar={handleSideBar}
              comp="/Customize-Docs"
            />
          }
        />
        <Route
          path="/After-Upload"
          element={
            <CustomiseDocuments
              open={open}
              handleSideBar={handleSideBar}
              comp="/After-Upload"
            />
          }
        />
      </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
