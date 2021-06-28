import Image from 'next/image'

import { connect } from 'react-redux'
import { toggleCartHidden } from '../../../redux/cart/cart-actions'

import styles from './cart-icon.module.scss'

const CartIcon = ({toggleCartHidden}) => {
  return (
    <div className={styles.cart_icon} onClick={toggleCartHidden}>
      <Image
        src="/shopping-bag.svg"
        className={styles.shopping_icon}
        width={24}
        height={24}
      />
      <span className={styles.item_count}>0</span>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon)
