// @ts-nocheck

import { TypeExteralIds } from "@/types";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function LinkSocials({ data }: { data?: TypeExteralIds }) {
  if (!data) return null;
  const social = {
    facebook_id: {
      icon: FaFacebook,
      href: `https://www.facebook.com/${data?.facebook_id}`,
    },
    instagram_id: {
      icon: FaInstagram,
      href: `https://www.instagram.com/${data?.instagram_id}`,
    },
    tiktok_id: {
      icon: FaTiktok,
      href: `https://www.tiktok.com/@${data?.tiktok_id}`,
    },
    twitter_id: {
      icon: FaTwitter,
      href: `https://twitter.com/${data?.twitter_id}`,
    },
    youtube_id: {
      icon: FaYoutube,
      href: `https://www.youtube.com/@${data?.youtube_id}`,
    },
  };

  return (
    <div className="flex items-center gap-2 flex-wrap">
      {Object.keys(data).map(
        (k) =>
          !!data?.[k] &&
          !!social?.[k] && (
            <a
              key={k}
              target="_blank"
              className="text-slate-400 hover:text-slate-100"
              href={social[k].href}
            >
              {social[k].icon({ size: 30 })}
            </a>
          )
      )}
    </div>
  );
}
