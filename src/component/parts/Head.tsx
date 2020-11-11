import Head from 'next/head';

interface Props {
  title: string;
  description: string;
  image: string;
  url: string;
}

export const HtmlHead = ({ title, description, image, url }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="blog" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={image} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link rel="canonical" href={url} />
      <link rel="shortcut icon" href={"https://blog.takurinton.com/me.jpg"} />
      <link rel="apple-touch-icon" href={"https://blog.takurinton.com/me.jpg"} />
    </Head>
  )
}