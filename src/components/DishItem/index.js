import './index.css'

const DishItem = ({
  dishDetails,
  cartItems,
  addItemToCart,
  removeItemFromCart,
}) => {
  const {
    dishId,
    dishName,
    dishPrice,
    dishImage,
    dishCurrency,
    dishCalories,
    dishDescription,
    dishAvailability,
    dishType,
    addonCat,
  } = dishDetails

  const onIncreaseQuntity = () => addItemToCart(dishDetails)
  const onDecreaseQuntity = () => removeItemFromCart(dishDetails)

  const getQuntity = () => {
    const cartItem = cartItems.find(item => item.dishId === dishId)
    return cartItem ? cartItem.quantity : 0
  }

  const renderControllerButton = () => (
    <div className="controller-container">
      <button className="button1" type="button" onClick={onDecreaseQuntity}>
        -
      </button>
      <p className="quantity">{getQuntity()}</p>
      <button className="button1" type="button" onClick={onIncreaseQuntity}>
        +
      </button>
    </div>
  )

  return (
    <li className="dish-template-container">
      <div className="dishType-details">
        <div className={`veg-border ${dishType === 1 ? 'non-veg-border' : ''}`}>
          <div
            className={`veg-round ${dishType === 1 ? 'non-veg-round' : ''}`}
          />
        </div>
        <div className="dish-item-container">
          <div className="dish-details-container">
            <h1 className="dish-name">{dishName}</h1>
            <p className="dish-dishCurrency-price">
              {dishCurrency} {dishPrice}
            </p>
          </div>
          <div>
            <p className="dish-discription">{dishDescription}</p>
            {dishAvailability && renderControllerButton()}
            {!dishAvailability && (
              <p className="not-availability-text"> Not available</p>
            )}
            {addonCat.length !== 0 && (
              <p className="addon-availability-text">
                Customizations available
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="dish-data-container">
        <p className="dishCalories">{dishCalories} calories</p>
        <img className="dish-image" alt={dishName} src={dishImage} />
      </div>
    </li>
  )
}
export default DishItem
