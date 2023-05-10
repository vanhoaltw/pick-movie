import IconButton from "@/components/buttons/IconButton";
import { TypeVideo } from "@/types";
import { useMemo } from "react";
import { FaPlay } from "react-icons/fa";

export default function Trailer({ videos }: { videos?: TypeVideo[] }) {
  const trailer = useMemo(
    () =>
      videos?.find?.((v) => v.type === "Trailer" || v.site === "YouTube") || {},
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [videos?.length]
  );

  if (!trailer?.id) return null;

  return (
    <a href={`https://www.youtube.com/watch?v=${trailer?.key}`} target="_blank">
      <IconButton title="Trailer">
        <FaPlay size={20} className="ml-0.5" />
      </IconButton>
    </a>
  );
}
