import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {

    const {book_list} = useContext(StoreContext)

  return (
    <div className='food-display' id='food-display'>
        <h2>Top Suggestions for you</h2>
        <div className="food-display-list">
          {book_list.map((item,index) => {
            if (category==='All' || category===item.category) {
              return <FoodItem key={index}
                    id={item._id}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    image={item.image}/>
            }
            
          })}
        </div>
    </div>
  )
}

export default FoodDisplay