import Link from 'next/link'

// https://nextjs.org/docs/basic-features/image-optimization
// https://nextjs.org/docs/api-reference/next/image
import Image from 'next/image'
import styles from './index.module.scss'
// import Nav from '../Nav/index'

const Header = () => {
  return (
    <header className={styles.header}>
      {/*<Nav className={styles['inner-wrapper']} />*/}
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
      </div>
    </header>
  )
}

export default Header
