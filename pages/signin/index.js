import React from 'react';

import HeadMetadata from '../../components/shared/HeadMetadata'
import Main from '../../components/layouts/Main'
import SignIn from '../../components/shared/sign-in/sign-in'

import styles from '../signin/index.module.scss'

const SignInSignUpPage = () => {
  const SEO_TAGS = {
    title: 'NextJS - E-Commerce - SHOP',
    shortLink: '',
    description: '',
    canonical: '',
    og_title: '',
    og_url: '',
    og_image: '',
    fb_admins: '',
    og_site_name: '',
    og_description: '',
    twitter_card: '',
    twitter_title: '',
    twitter_description: '',
  }
  return (
    <Main className={styles.shop_page}>
      <HeadMetadata seoTags={SEO_TAGS} />
      <main>
        <SignIn/>
      </main>
    </Main>
  )
}

export default SignInSignUpPage;