import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getMenus } from '../actions/menuAction'
import { getRestaurants } from '../actions/restaurantAction'
import FoodItem from '../components/FoodItem'
import { setRestaurantId } from '../actions/cartAction'

const Menu = (storeId) => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const {menus, loading, error} = useSelector((state) => state.menus);
    dispatch(setRestaurantId(id));
    useEffect(() => {
        dispatch(getMenus(id));
        dispatch(getRestaurants(id));
        }, [dispatch, id, storeId]);

  return (
    <div>
      {loading ? (
        <p>Loading menu...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : menus && menus.length > 0 ? (
        menus.map((menu) => (
            <div key={menu._id}>
                <h2>{menu.category}</h2>
                <hr />
                {menu.items && menu.items.length > 0 ? (
                    <div className="row">
                        {menu.items.map((fooditem) => (
                            <FoodItem key={fooditem._id} fooditem={fooditem} />
                        ))}
                    </div>
                ) : (
                    <p>No food items available</p>
                )}
            </div>
        
        ))
      ) : (
        <p>No menu available</p>
      )}
    </div>
  );
};

export default Menu
