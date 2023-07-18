import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>Jestem Kurzy. Lubię placki.</p>
          <p>
            (This is a sample website - you’ll be building a site like this on{" "}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          </p>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                {title}
                <br />
                {id}
                <br />
                {date}
              </li>
            ))}
          </ul>
        </section>
      </Layout>
      <h1 className="title">
        Go to <Link href="/posts/pre-rendering">pre-rendering page!</Link>
        Go to <Link href="/posts/ssg-ssr">ssg-ssr page!</Link>
      </h1>
    </>
  );
}

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import Head from "next/head";

// function Header({ title }) {
//   return (
//     <>
//       <Head>
//         <title>Kurzy Next1 App</title>
//         <link rel="icon" href="/images/pikachu.png" />
//       </Head>
//       <h1>{title ? title : "Default title"}</h1>
//     </>
//   );
// }

// export default function HomePage() {
//   const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];
//   const [likes, setLikes] = useState(0);

//   function handleClick() {
//     setLikes(likes + 1);
//   }

//   return (
//     <>
//       <div>
//         <Header title="Develop. Preview. Ship. 🚀" />
//         <ul>
//           {names.map((name) => (
//             <li key={name}>{name}</li>
//           ))}
//         </ul>
//         <h1 className="title">
//           Read <Link href="/posts/first-post">this page!</Link>
//         </h1>

//         <button onClick={handleClick}>Like ({likes})</button>
//       </div>
//       <Image
//         src="/images/bawpikachu.png" // Route of the image file
//         height={144} // Desired size with correct aspect ratio
//         width={144} // Desired size with correct aspect ratio
//         alt="Your Name"
//       />
//     </>
//   );
// }
