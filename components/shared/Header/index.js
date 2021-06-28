import Link from 'next/link'
import { connect } from 'react-redux'
import { auth } from '../../../firebase/firebase.utils'

// https://nextjs.org/docs/basic-features/image-optimization
// https://nextjs.org/docs/api-reference/next/image
import Image from 'next/image'
import CartIcon from '../cart-icon/cart-icon'
import CartDropdown from '../cart-dropdown/cart-dropdown'
import styles from './index.module.scss'
// import Nav from '../Nav/index'

const Header = ({currentUser, hidden}) => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a className={styles.logo_container}>
          <Image
            src="/crown.svg"
            className={styles.logo}
            width="0"
            height="0"
            layout="responsive"
          />
        </a>
      </Link>
      <div className={styles.options}>
        <Link href="/shop">
          <a className={styles.option}>SHOP</a>
        </Link>
        <Link href="/contact">
          <a className={styles.option}>CONTACT</a>
        </Link>
        {
          currentUser ?
          <div
            className={styles.option}
            onClick={() => {auth.signOut()}}
          >
          SIGN OUT
          </div>
          :
          <Link href="/signin">
            <a className={styles.option}>SIGN IN</a>
          </Link>
        }
        <CartIcon/>
      </div>
      {
        hidden ?
        null
        :
        <CartDropdown/>
      }
    </header>
  )
}

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
  currentUser,
  hidden
});

export default connect(mapStateToProps)(Header);
