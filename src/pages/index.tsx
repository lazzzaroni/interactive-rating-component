import Head from "next/head";

import Container from "@/components/Container";

export default function Home() {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Interactive rating component</title>
        <meta
          name="description"
          content="Frontend Mentor | Interactive rating component"
        />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/interactive-rating-component/images/favicon.ico"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/interactive-rating-component/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/interactive-rating-component/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/interactive-rating-component/images/favicon-16x16.png"
        />
      </Head>
      <Container />
    </>
  );
}
