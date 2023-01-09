import Head from 'next/head';
import Navbar from '../components/Navbar';

function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title">
              Contact
            </h1>
            <p className="description">Drop me a line!</p>
            <ul className="contact-links">
              <li className="contact-item">Email: lezleydavidson@gmail.com</li>
              <li className="contact-item">
                Github: https://github.com/lezleyfaye
              </li>
              <li className="contact-item">
                Linkedin: www.linkedin.com/in/lezley-davidson
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
