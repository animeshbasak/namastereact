import { IMG_CDN_URL } from "../constants"

export const RestaurantCard = ({ name, cuisines, lastMileTravelString, cloudinaryImageId }) => {
  // const { name, cuisines, lastMileTravelString, cloudinaryImageId } = restaurant.data;
  return (
    <div className="card">
      <img className="card-image" alt="logo" src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h5>{cuisines.join(',')}</h5>
      <h4>{lastMileTravelString}</h4>
    </div>
  )
}