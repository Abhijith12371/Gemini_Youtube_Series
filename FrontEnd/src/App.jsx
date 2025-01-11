import React from 'react';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import ChatContainer from './Components/ChatContainer';

const App = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1">
        <Navbar />

        <ChatContainer/>
      </div>
    </div>
  );
};

export default App;
