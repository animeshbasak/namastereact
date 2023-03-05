import { restaurantList } from "../constants";
import { RestaurantCard } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function filterData(searchText, restaurants) {

  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  )
  return filterData;
}

const Body = () => {
  // let searchText = "KFC"
  const [allRestaurants, setAllRestaurants] = useState([]) // for array define empty array in useState
  const [filteredRestaurants, setFilteredRestaurants] = useState([]) // for array define empty array in useState
  const [searchText, setSearchText] = useState("");
  // console.log(searchText)
  useEffect(() => {
    getRestaurants();
    //takes call back function and dependency array
    //empty array => called only once
    //dependency array => each time dependency changes it renders data
    // console.log('useEffect')
  }, []);

  async function getRestaurants() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&page_type=DESKTOP_WEB_LISTING")
    if (data) {
      const json = await data.json()
      // console.log(json)
      setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }
    //optional chaining -> ?.
  }
  // console.log('render')
  //conditional rendering
  //not render component (Early Return)
  if (!allRestaurants) return null;

  return (allRestaurants?.length === 0) ? <Shimmer /> : filteredRestaurants?.length === 0 ? <h1>No Restaurant match your filter</h1> : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) =>
            setSearchText(e.target.value)
          } />
        <button className="search-btn"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchText, allRestaurants);
            //update the state - restaurants
            setFilteredRestaurants(data);

          }}
        >Search</button>
      </div>
      <div className="restaurant-list">
        {/* Add condition here */}
        {filteredRestaurants.map(res => {
          return (
            <Link to={"/restaurant/" + res.data.id} key={res.data.id}>
              <RestaurantCard {...res.data} />
            </Link>
          )
        })
        }
      </div>
    </>
  )
}
export default Body;