import Head from "next/head";
import React from "react";

const HeadMetaData: React.FC<{
  title?: string;
  metaDescription?: string;
  ogImageUrl?: string;
  pathname?: string;
}> = ({
  title = "Suplemen belajar lo, buat ilmu tech industry.",
  metaDescription,
  ogImageUrl = "/background/imgMeta.jpg",
  pathname = "",
}) => {
  const defaultTitle = "BTN Prioritas";

  // const baseUrl =
  //   process.env.NODE_ENV === "development"
  //     ? "http://localhost:3000"
  //     : "https://alba-btn.vercel.app";

  const pageUrl = new URL(pathname, 'https://gabrielraymond.xyz').toString();

  return <Head>
    <title>{title + ' | ' + defaultTitle}</title>
    {/* metadata */}
    <meta name="title" content={title + ` | ` + defaultTitle} />
    <meta name="description" content={metaDescription} />
    <meta name="og:image" itemProp="image" content={ogImageUrl} />
    <meta property="og:url" content={pageUrl} />

    <meta property="og:type" content="website" />
    <meta property="og:image" itemProp="image" content="website" />
    <meta property="og:title" content={title + ` | ` + defaultTitle} />
    <meta property="og:description" content={metaDescription} />

    <meta name="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content={pageUrl} />
    <meta name="twitter:image" itemProp="image" content="website" />
    <meta name="twitter:title" content={title + ` | ` + defaultTitle} />
    <meta property="twitter:description" content={metaDescription} />
  </Head>;
};

export default HeadMetaData;
