import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import PhotoList from 'components/PhotoList';
import './App.scss';





// Note: Rendering a single component to build components in isolation
const App = () => {
  /* const photos = new Array(3).fill(sampleDataForPhotoListItem); */
  return (
    <div className="App">
    {/* {photos.map((photo, index) => <PhotoListItem data={photo} key={index}/>)} */}
  </div>
  );
};

export default App;
