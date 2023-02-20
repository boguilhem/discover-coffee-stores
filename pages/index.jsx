import Head from 'next/head';
import Banner from '../components/Banner';
import styles from '../styles/Home.module.css';

export default function Home() {
  const handleOnBannerBtnClick = () => {
    console.log('Banner Button Clicked');
  };

  return (
    <div className={styles.container}>
      {console.log('teste')}
      <Head>
        <title>Coffee Connoisseur</title>
        <meta name="description" content="Discover your local coffee shops" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner
          buttonText={'View stores nearby'}
          handleOnClick={handleOnBannerBtnClick}
        />
      </main>
    </div>
  );
}
