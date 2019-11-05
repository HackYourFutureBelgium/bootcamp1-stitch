import React from 'react';
import Header from './Header';
import Footer from './Footer';

const NotFoundPage = () => (
  <div>
    <Header />
    <h1>Page does not exist</h1>
    <p>
      You&apos;ve stumbled on a page that doesn&apos;t exist. <br />
      If you believe a page should be here, please contact us at contact@hackyourfuture.be.
    </p>
    {/* <Link to="/">Back to main page</Link>*/}
    <Footer />
  </div>
);

export default NotFoundPage;
