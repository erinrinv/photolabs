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
  const { urls, user, location } = props.data;

  return (
    <div className="photo-list__item">
       <PhotoFavButton></PhotoFavButton>
      <img className="photo-list__image" src={urls.regular} alt="Image"></img>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={user.profile} alt={`Profile Image for ${user.username}`}></img>
        <div className="photo-list__user-info">
          <span>{user.username}</span>
          <div className="photo-list__user-location">
            {location.city}, {location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
