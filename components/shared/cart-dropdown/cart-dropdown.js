// import Image from 'next/image'
import CustomButton from '../custom-button/custom-button'

import styles from './cart-dropdown.module.scss'

const CartDropdown = () => {
  return (
    <div className={styles.cart_dropdown}>
      <div className={styles.cart_items}/>
      <CustomButton>
      GOT TO CHECKOUT
      </CustomButton>
    </div>
  )
}

export default CartDropdown
