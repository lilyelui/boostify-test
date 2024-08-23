import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from './ThemeContext'; // Pastikan path ini sesuai

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
