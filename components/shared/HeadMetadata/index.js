import Head from 'next/head'

const HeadMetadata = ({ seoTags }) => {
  return (
    <Head>
      <title>{seoTags.title}</title>
      <meta name='url' content={seoTags.shortLink} />
      <meta name='description' content={seoTags.description} />
      <meta name='keywords' content={seoTags.keywords} />

      <link rel='icon' href='/favicon.ico' />
      <link rel='shortLink' href={seoTags.shortLink} />
      <link rel='canonical' href={seoTags.canonical} />

      <meta property='og:title' content={seoTags.og_title} />
      <meta property='og:url' content={seoTags.og_url} />
      <meta property='og:image' content={seoTags.og_image} />
      <meta property='fb:admins' content={seoTags.fb_admins} />
      <meta property='og:site_name' content={seoTags.og_site_name} />
      <meta property='og:description' content={seoTags.og_description} />
      <meta property='og:type' content={seoTags.og_type} />

      {/* <meta name='twitter:card' content={seoTags.twitter_card} />
      <meta name='twitter:title' content={seoTags.twitter_title} />
      <meta name='twitter:description' content={seoTags.twitter_description} /> */}
      {/* <meta name="twitter:image:src" content={seoTags.twitter_image} /> */}
      {/* <meta name="twitter:site" content={seoTags.twitter_site} />
      <meta name="twitter:creator" content={seoTags.twitter_creator} /> */}

      {/* <meta itemProp="author" content={seoTags.google_author} />
      <meta itemProp="publisher" content={seoTags.google_publisher} />
      <meta itemProp="name" content={seoTags.google_name} />
      <meta itemProp="description" content={seoTags.google_description} />
      <meta itemProp="image" content={seoTags.google_image} /> */}
    </Head>
  )
}

export default HeadMetadata
