// import { urlObjectKeys } from 'next/dist/next-server/lib/utils'
import React from 'react'

import styles from './menu-item.module.scss'

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div className={`${styles['menu-item']} ${styles[size]}`}>
      <div
        className={`${styles['background-image']}`}
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className={styles.content}>
        <h1 className={styles.title}>{title.toUpperCase()}</h1>
        <span className={styles.subtitle}>SHOW NOW</span>
      </div>
    </div>
  )
}

export default MenuItem
