import Link from "next/link";
import Heading from "@/components/Heading";
export default function BlogPage() {
  return (
    <>
      <Heading>Blog</Heading>
      <p>List Of Posts</p>
      <ul>
        <li>
          <Link href="/blog/belajar-nextjs">Belajar Next-Js</Link>
        </li>
        <li>
          <Link href="/blog/latihan-route-nextjs">Route Next-Js</Link>
        </li>
      </ul>
    </>
  );
}
