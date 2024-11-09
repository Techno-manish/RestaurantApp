import './index.css'

const Header = ({cartItems}) => {
  const getCartItemsCount = () =>
    cartItems.reduce((acc, item) => acc + item.quantity, 0)
  const renderCartIcons = () => (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        fill="currentColor"
        className="bi bi-cart cart-icon"
        viewBox="0 0 16 16"
      >
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
      </svg>
      <div className="cart-count-badge">
        <p className="cart-count">{getCartItemsCount()}</p>
      </div>
    </div>
  )
  return (
    <div className="nav-header">
      <h1 className="logo-heading">UNI Resto Cafe</h1>
      <div className="my-order-container">
        <p className="my-order-text">My Orders</p>
        {renderCartIcons()}
      </div>
    </div>
  )
}
export default Header
