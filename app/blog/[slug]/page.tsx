"use client"
import { useParams } from 'next/navigation';
import Head from 'next/head';

export default function BlogPost() {
  const { slug } = useParams();

  return (
    <>
      <Head>
        <title>{`${slug} - Blog Post`}</title>
        <meta name="description" content={`This is the blog post: ${slug}`} />
      </Head>
      <main>
        <h1>{slug}</h1>
        <p>This is a dummy blog post page for {slug}.</p>
      </main>
    </>
  );
}
