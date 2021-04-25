import Head from 'next/head';
import { Footer } from '@components/footer';
import '../styles/globals.css';
import { DragDropProvider } from 'context/drag-drop';

function MyApp({ Component, pageProps }) {
  return (
    <div className="container">
      <Head>
        <title>Cotton</title>
      </Head>

      <main className="main">
        <DragDropProvider>
          <Component {...pageProps} />
        </DragDropProvider>
      </main>

      <Footer />
    </div>
  );
}

export default MyApp;
