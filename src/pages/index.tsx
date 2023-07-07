import Head from "next/head";

import Container from "@/components/Container";
import Footer from "@/components/Footer";

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
          href="/images/favicon.ico"
          // href="/interactive-rating-component/images/favicon.ico"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
          // href="/interactive-rating-component/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
          // href="/interactive-rating-component/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
          // href="/interactive-rating-component/images/favicon-16x16.png"
        />
      </Head>
      <Container />
      <Footer />
    </>
  );
}
