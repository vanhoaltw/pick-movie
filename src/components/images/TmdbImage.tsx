"use client";

import { TMDB_IMAGE_BASE_URL } from "@/constants/tmdb";
import classNames from "classnames";
import Image, { ImageProps } from "next/image";
import { useState } from "react";

type ImageType = {
  wImage?: "w185" | "w300" | "w342" | "w500" | "original";
  imgClassName?: string;
} & ImageProps;

export default function TmdbImage({
  wImage = "w300",
  src,
  alt,
  imgClassName,
  className,
  ...props
}: ImageType) {
  const [status, setStatus] = useState("loading");

  return (
    <figure>
      <Image
        src={
          status === "error"
            ? "/logo.png"
            : `${TMDB_IMAGE_BASE_URL}/${wImage}${src}`
        }
        className={classNames(
          imgClassName,
          'object-cover rounded-xl',
          status === "loading" && "animate-pulse bg-slate-600"
        )}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        alt={alt}
        onError={() => setStatus("error")}
        onLoadingComplete={() => setStatus("complete")}
        {...props}
      />
    </figure>
  );
}
