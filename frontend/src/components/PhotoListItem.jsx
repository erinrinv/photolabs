import React from "react";

import "../styles/PhotoListItem.scss";


const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

const PhotoListItem = ({ id, location, imageSource, username, profile }) => {
  return (
    <div className="photo-list__item">
      <img src={imageSource} alt={`Photo by ${username}`} />
      <div className="photo-list__user-details">
        <img src={profile} alt={`Profile of ${username}`} className="profile-pic" />
        <div className="photo-list__user-info">{username}</div>
      </div>
      <div className="photo-list__user-location">{location.city}, {location.country}</div>
    </div>
  );
};

export default PhotoListItem;
