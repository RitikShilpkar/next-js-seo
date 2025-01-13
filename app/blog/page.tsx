import Head from 'next/head';
import Link from 'next/link';

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog - Next SEO Demo</title>
        <meta name="description" content="Explore our blog posts in the Next.js SEO demo app." />
      </Head>
      <main>
        <h1>Blog</h1>
        <ul>
          <li>
            <Link href="/blog/post-1">Post 1</Link>
          </li>
          <li>
            <Link href="/blog/post-2">Post 2</Link>
          </li>
        </ul>
      </main>
    </>
  );
}
