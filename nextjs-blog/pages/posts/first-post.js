import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';



export default function FirstPost(){ //main function
    return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
    <h1> First Post by Zahid</h1>
    <h2>
        <Link href='/'>Home</Link>
        </h2>
        </Layout>
    )//first post in the Head tag is the title that appears in the tab of that page.
};//post is returning something and it is not html(browser reads html and JS alongside), here JS is returning html and it is different like, 3rd layer; base html and then JS and inside this new structure called JSX allowing to get Html component from JS. 
//in html we use anchor or 'a' tags. but here we will use link
//we can only return one thing not more than one and then we create fragment. 
//loading is not occurring because it is client side navigation. bg color to yellow experiment performed. Only necessary page is rendered not all pages
//Next Js prefetch the code of first page and is loaded in background and instantly get by client. 
//client side navigation is experimented
//only necessary codes are loaded and rendered. 
//code splitting: if hundred of pages we don't want all content to download. so NextJs will show the code which is called rest will be not be called. 
//if there is no pre-fetching it will go get the data like yellow background example. If Link exist, connection exists it is prefetched.
////////
///Assets, Metadata and CSS///
//Assets// static images and videos can be used in public directory, we have this already in next js Vscode directory. We can use these public directory in pages.  
//Image is loaded, meta data changed with Head component and now SDK or API can be integrated. Which is done in Head component again.
//third party scripts can slow down your rendering time such as SDKs above
//so we used NextJs Script for better loading and also in the same way we can use the Google analytics
//we did component level css and we also have global level styles that applies to all pages