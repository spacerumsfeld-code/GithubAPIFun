import { AppProps } from 'next/app';
import Head from 'next/head';
import { TopNav } from './components/TopNav';
import { Footer } from './components/Footer';
import './styles.css';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>STS Demo!</title>
      </Head>
      <main className="app flex flex-col h-screen justify-between">
        <QueryClientProvider client={queryClient}>
          <TopNav />
          <Component {...pageProps} />
          <Footer />
        </QueryClientProvider>
      </main>
    </>
  );
}

export default CustomApp;
