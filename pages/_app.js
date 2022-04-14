import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';
import Layout from '../components/Layout/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Layout>
        <main className="min-h-screen max-w-6xl mx-auto">
          <Component {...pageProps} />
        </main>
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
