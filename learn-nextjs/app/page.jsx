//karena nextjs app ini berbasis server tapi jika ingin
//mengubahnya ke client side maka cukup tambahkan
"use client";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    window.alert("Hello world");
  }, []);
  return (
    <>
      <h1>My Next.js App</h1>
      <p>Hello World,this is Next JS</p>
    </>
  );
}
