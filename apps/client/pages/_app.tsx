import { AppProps } from 'next/app';
import Head from 'next/head';
import { TopNav } from './components/TopNav';
import { Footer } from './components/Footer';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>STS Demo!</title>
      </Head>
      <main className="app flex flex-col h-screen justify-between">
        <TopNav />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}

export default CustomApp;
