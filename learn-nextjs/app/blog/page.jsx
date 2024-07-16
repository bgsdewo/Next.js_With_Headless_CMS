import Link from "next/link";
export default function BlogPage() {
  return (
    <>
      <h1>Blog</h1>
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
