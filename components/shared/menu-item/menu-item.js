import React from 'react'
import { withRouter } from 'next/router'

import styles from './menu-item.module.scss'

const MenuItem = ({ title, imageUrl, size, router, linkUrl }) => {
  return (
    <div
      className={`${styles.menu_item} ${styles.size}`}
      onClick={() => router.push({pathname: linkUrl})}
    >
      <div
        className={styles.background_image}
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

export default withRouter(MenuItem)
