import styles from './index.module.scss'
import Nav from '../Nav/index'

const Header = () => {
  return (
    <header className={styles['header-wrapper']}>
      <Nav className={styles['inner-wrapper']} />
    </header>
  )
}

export default Header
