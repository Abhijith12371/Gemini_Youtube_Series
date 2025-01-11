# YT_CHATGPT_SERIES


# Sidebar Component in React

This project demonstrates how to create a responsive and visually appealing sidebar component in React using Tailwind CSS and React Icons. The sidebar includes a new chat button, a scrollable history section, and a footer.

## Features

1. **Responsive Design**: The sidebar adjusts seamlessly for different screen sizes (sm, md, lg).
2. **Interactive Elements**: Buttons and list items have hover effects for better user experience.
3. **Scrollable History Section**: Includes a smooth scrolling feature for past chat history.
4. **Custom Icons**: Uses icons from the `react-icons` package to enhance the design.

## Preview

<img width="154" alt="image" src="https://github.com/user-attachments/assets/76db2246-d421-4ccc-b49c-f3b0ae2a461e" />


## Installation

Follow these steps to set up and run the project locally:

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn




## Code

Below is the full code for the Sidebar component:

```jsx
// Sidebar.jsx
import React from 'react';
import { FaCommentAlt, FaHistory, FaPlusCircle, FaRegClock } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="flex">
      <aside className="w-60 h-screen bg-gray-800 text-white p-6 flex flex-col justify-between shadow-lg sm:w-40 md:w-40 lg:w-56">
        
        <div className="flex justify-center items-center mb-8">
          <h1 className="text-3xl font-bold text-blue-500">ChatGPT</h1>
        </div>

        <ul className="space-y-6">
          <li>
            <button className="flex items-center w-full text-left text-lg font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200 ease-in-out">
              <FaPlusCircle className="mr-3 text-xl" />
              New Chat
            </button>
          </li>
        </ul>

        {/* History Section with Scrollable Content */}
        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-gray-700">
          <h2 className="text-xl font-semibold mb-4">History</h2>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-md transition duration-200 ease-in-out">
              <FaCommentAlt className="text-xl text-blue-400" />
              <div className="flex-1">
                <p className="text-white font-medium">How to build a React app?</p>
                <div className="flex items-center text-gray-500 text-sm space-x-2">
                  <FaRegClock className="text-xs" />
                  <span>3 hours ago</span>
                </div>
              </div>
            </li>

            <li className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-md transition duration-200 ease-in-out">
              <FaCommentAlt className="text-xl text-blue-400" />
              <div className="flex-1">
                <p className="text-white font-medium">What is Tailwind CSS?</p>
                <div className="flex items-center text-gray-500 text-sm space-x-2">
                  <FaRegClock className="text-xs" />
                  <span>1 day ago</span>
                </div>
              </div>
            </li>

            <li className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-md transition duration-200 ease-in-out">
              <FaCommentAlt className="text-xl text-blue-400" />
              <div className="flex-1">
                <p className="text-white font-medium">Can you explain AI?</p>
                <div className="flex items-center text-gray-500 text-sm space-x-2">
                  <FaRegClock className="text-xs" />
                  <span>2 days ago</span>
                </div>
              </div>
            </li>

            <li className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-md transition duration-200 ease-in-out">
              <FaCommentAlt className="text-xl text-blue-400" />
              <div className="flex-1">
                <p className="text-white font-medium">How to deploy a Node.js app?</p>
                <div className="flex items-center text-gray-500 text-sm space-x-2">
                  <FaRegClock className="text-xs" />
                  <span>5 days ago</span>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* Footer */}
        <div className="mt-auto text-sm text-center text-gray-400">
          <p>Made with ❤️ by Abhijith</p>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
```

Made with ❤️ by Abhijith
