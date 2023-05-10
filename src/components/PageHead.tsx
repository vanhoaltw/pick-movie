import { metaTags } from "@/constants/seo";
import * as React from "react";

export const PageHead: React.FC<{
  title?: string;
  description?: string;
  imagePathname?: string;
  pathname?: string;
  ogImage?: string;
}> = ({
  title = metaTags.title,
  description = metaTags.description,
  pathname,
  ogImage,
}) => {
  const url = pathname ? `${metaTags.url}${pathname}` : metaTags.url;

  return (
    <>
      <meta name="robots" content="index,follow" />
      <meta property="og:type" content="website" />

      <meta property="og:site_name" content={metaTags.title} />
      <meta property="twitter:domain" content={metaTags.domain} />

      <meta name="twitter:creator" content={`@${metaTags.twitter}`} />

      {description && (
        <>
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
          <meta name="twitter:description" content={description} />
        </>
      )}

      {ogImage ? (
        <>
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content={ogImage} />
          <meta property="og:image" content={ogImage} />
        </>
      ) : (
        <meta name="twitter:card" content="summary" />
      )}

      {url && (
        <>
          <link rel="canonical" href={url} />
          <meta property="og:url" content={url} />
          <meta property="twitter:url" content={url} />
        </>
      )}

      <meta property="og:title" content={title} />
      <meta name="twitter:title" content={title} />
      <title>{title}</title>
    </>
  );
};
