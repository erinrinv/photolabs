import React from "react";
import PhotoFavButton from "./PhotoFavButton";
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

const PhotoListItem = (props) => {
  const { imageSource, profile, username, location } = props.data;

  return (
    <div className="photo-list__item">
       <PhotoFavButton></PhotoFavButton>
      <img className="photo-list__image" src={imageSource} alt="Image"></img>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={profile} alt={`Profile Image for ${username}`}></img>
        <div className="photo-list__user-info">
          <span>{username}</span>
          <div className="photo-list__user-location">
            {location.city}, {location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
