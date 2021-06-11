import React from 'react';
import SHOP_DATA from '../api/shop.data'

import HeadMetadata from '../../components/shared/HeadMetadata'
import Main from '../../components/layouts/Main'
import CollectionPreview from '../../components/shared/collection-preview/collection-preview'

import styles from '../shop/index.module.scss'

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    }
  }

  render() {
    const {collections} = this.state;
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
          {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
          ))}
        </main>
      </Main>
    )
  }
}

export default ShopPage;
