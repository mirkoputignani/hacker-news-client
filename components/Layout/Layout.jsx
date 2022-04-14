import Header from './Header';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Hacker News v2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen mx-auto w-full flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 sm:px-6">
          {children}
        </main>
      </div>
    </>
  );
};
export default Layout;
