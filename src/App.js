import React from 'react';
// At the top of index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';

import NavigationBar from './NavigationBar';

function App() {
  return (
    <div>
      <NavigationBar />
      <header className="text-center mt-5">
        <h1>Welcome to FoodieHub</h1>
        <p>Your go-to destination for amazing recipes!</p>
      </header>
      {/* Additional homepage content can go here */}
    </div>
  );
}

export default App;
