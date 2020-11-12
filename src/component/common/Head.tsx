import Head from 'next/head';
import { HeadProps } from '../../props/props'

export const HtmlHead = ({ title, description, image, url }: HeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="blog" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={'https://takurinton.vercel.app/me.jpeg'} />
      <meta property="og:site_name" content={title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={image} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={'https://takurinton.vercel.app/me.jpeg'} />
      <link rel="canonical" href={url} />
      <link rel="shortcut icon" href={"me.jpeg"} />
      <link rel="apple-touch-icon" href={"me.jpeg"} />
    </Head>
  )
}