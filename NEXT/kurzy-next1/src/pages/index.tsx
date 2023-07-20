import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";
import Date from "../components/date";
import { GetStaticProps } from "next";

export default function Home({
  allPostsData,
}: {
  allPostsData: { id: string; date: string; title: string }[];
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link href="/dist/output.css" rel="stylesheet" />
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
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

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
