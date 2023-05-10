import ky from "ky";

export const request = ky.extend({
  prefixUrl: "https://api.themoviedb.org/3",
  headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMBD_ACCESS_TOKEN}` },
});
