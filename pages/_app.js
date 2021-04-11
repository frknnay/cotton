import Head from 'next/head';
import { Footer } from '@components/footer';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="container">
      <Head>
        <title>Cotton</title>
      </Head>

      <main className="main">
        <Component {...pageProps} />
      </main>

      <Footer />
    </div>
  );
}

export default MyApp;
