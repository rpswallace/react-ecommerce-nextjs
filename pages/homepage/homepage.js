// import Link from 'next/link'
// import { motion } from 'framer-motion'

// Utils
// import { fadeInUp, stagger } from '../../utils/animations'

// Styles
import Directory from '../../components/shared/directory/directory'
import styles from './homepage.module.scss'

const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <Directory />
    </div>
  )
}

export default HomePage
