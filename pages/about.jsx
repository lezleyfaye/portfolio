import Head from 'next/head';
import Navbar from '../components/Navbar';

function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title">
              About
            </h1>
            <p className="description">
              Welcome to my portfolio! I'm just starting my journey into web
              development after working the last few years as a psychologist.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
