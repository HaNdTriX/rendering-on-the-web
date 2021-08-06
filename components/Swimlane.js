import Image from "next/image";
import Link from "next/link";

export default function Swimlane({ title, url, src, width, height }) {
  return (
    <Link href={url} target="_blank">
      <a>
        <Image src={src} width={width} height={height} alt={title} />
      </a>
    </Link>
  );
}
