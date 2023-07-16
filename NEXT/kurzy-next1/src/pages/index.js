import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

function Header({ title }) {
  return (
    <>
      <Head>
        <title>Kurzy Next1 App</title>
        <link rel="icon" href="/images/pikachu.png" />
      </Head>
      <h1>{title ? title : "Default title"}</h1>
    </>
  );
}

export default function HomePage() {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <>
      <div>
        <Header title="Develop. Preview. Ship. 🚀" />
        <ul>
          {names.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
        <h1 className="title">
          Read <Link href="/posts/first-post">this page!</Link>
        </h1>

        <button onClick={handleClick}>Like ({likes})</button>
      </div>
      <Image
        src="/images/bawpikachu.png" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="Your Name"
      />
    </>
  );
}
