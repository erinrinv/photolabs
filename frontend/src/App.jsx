import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import TopicList from 'components/TopicList';
import PhotoList from 'components/PhotoList';
import './App.scss';





// Note: Rendering a single component to build components in isolation
const App = () => {
  
  return (
    <div className="App">
    <PhotoList/>
    <TopicList/>
  </div>
  );
};

export default App;
