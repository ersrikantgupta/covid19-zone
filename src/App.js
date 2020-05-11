import React from 'react';
// import logo from './logo.svg';
import './App.css';


// import PostList from './component/PostList'
// import StateWise from './component/StateWise'
import DistrictWise from './component/DistrictWise'

function App() {
  return (
    <div className="App">
        {/* <PostList  name= {"srikant"}/> */}
        <DistrictWise name= {"Srikant"} />
    </div>
  );
}

export default App;
