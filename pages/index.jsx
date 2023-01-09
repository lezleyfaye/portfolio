import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper">
            <h1 data-cy="homePageTitle" className="title">
              Hi, I'm Lezley
            </h1>
            <p className="description">
              I'm a current web development student. Follow along as I build my
              portfolio.
            </p>

            <Link href="/contact" className="cta">
              Contact Lezley
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
