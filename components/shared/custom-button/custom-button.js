import React from 'react'

import styles from './custom-button.module.scss'

const CustomButton = ({children, isGoogleSignIn, ...otherProps}) => {
  return (
    <button
      className={`${isGoogleSignIn ? styles.google_sign_in : ''} ${styles.custom_button}`}
      {...otherProps}
    >
      {children}
    </button>
  )
}

export default CustomButton;
