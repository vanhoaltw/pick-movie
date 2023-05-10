const isDev = "development" === process.env.NODE_ENV;
const port = process.env.PORT;

export const metaTags = {
  title: "",
  description: "",
  domain: "",
  author: "",
  twitter: "",
  twitterUrl: "",
  url: isDev ? `http://localhost:${port}` : process.env.NEXT_PUBLIC_APP_URL,
  socialImageUrl: "",
};
