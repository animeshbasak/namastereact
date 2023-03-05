import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { IMG_CDN_URL } from '../constants';
import Shimmer from './Shimmer';

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState({});
  const [restaurantMenu, setRestaurantMenu] = useState(null);
  useEffect(() => {
    getRestaurantInfo();
  }, []);


  async function getRestaurantInfo() {
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=" + id);
    const json = await data.json();
    console.log(json.data.cards)
    console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards)
    setRestaurant(json?.data?.cards[0]?.card?.card?.info);
    setRestaurantMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
  }

  return (!restaurant) ? <Shimmer /> : (
    <div className="menu">
      <div>
        <h1>Restaurant id: {id}</h1>
        <h2>{restaurant.name}</h2>
        <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
        <h3>Area : {restaurant.areaName}</h3>
        <h3>City : {restaurant.city}</h3>
        <h3>Avg Rating :{restaurant.avgRating} stars</h3>
        <h3>Cost for two : {restaurant.costForTwoMessage}</h3>

      </div>
      <div>
        <h1>Menu</h1>
        <ul>{restaurantMenu?.map((items) =>
          <li key={items.card.info.id}>
            {items.card.info.name}
          </li>
        )}</ul>
      </div>
    </div>
  )
}
export default RestaurantMenu;