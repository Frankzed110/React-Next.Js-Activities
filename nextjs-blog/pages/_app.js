import '../styles/globals.css';

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
  }
  //this is top level component and al pages comes in it. it is always there this file, if not we can create it
  //after adding app file into pages we have to re-run the server i.e. npm run dev
  //global css can only be applied in app.js