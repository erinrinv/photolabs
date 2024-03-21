import React, { useCallback, useState } from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import photos from "mocks/photos";
import PhotoDetailsModal from './PhotoDetailsModal';

import '../styles/HomeRoute.scss';

const HomeRoute = () => {

  const [like, setLike] = useState([]);
  const toggleLike = (photoId) => like.includes(photoId) ? setLike(like.filter(e => e !== photoId)) : setLike([...like, photoId]);
  const isLiked = (photoId) => like.includes(photoId);
  const isFavPhotoExist = like.length > 0;

  // state for keeping track of selected photo when opening modal
  const [selectedPhoto, setSelectedPhoto] = useState();

  // state for opening the photo details modal
  const [modal, setModal] = useState(false);
  const showModal = (photo) => {
    setModal(true);
    setSelectedPhoto(photo);
  };
  const hideModal = () => setModal(false);

  return (
    <div className="home-route">
      <TopNavigationBar isFavPhotoExist={isFavPhotoExist}/>
      <PhotoList isLiked={isLiked} toggleLike={toggleLike} photos={photos} showModal={showModal}/>
      {modal && <PhotoDetailsModal hideModal={hideModal} selectedPhoto={selectedPhoto} isLiked={isLiked} toggleLike={toggleLike}/>}
    </div>
  );
};

export default HomeRoute;