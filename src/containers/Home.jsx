import React from 'react';
import { Helmet } from 'react-helmet';
import Products from '../components/Products';
import initialState from '../initialState';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Platzi Conf Merch - Productos</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@djalmeida3" />
        <meta name="twitter:creator" content="@djalmeida3" />
        <meta name="twitter:title" content="Platzi Conf Store" />
        <meta name="twitter:description" content="Platzi Conf Store" />
        <meta
          name="twitter:image"
          content="https://media-exp1.licdn.com/dms/image/C4E03AQGowRj5NmyqOg/profile-displayphoto-shrink_800_800/0/1639002109018?e=1667433600&v=beta&t=08xE7p8QPje_vCFlvr0mUYemGAte-1P6yetYW7gZqMY"
        />
        <meta property="og:title" content="Platzi Conf Store" />
        <meta property="og:description" content="Platzi Conf Store" />
        <meta
          property="og:image"
          content="https://media-exp1.licdn.com/dms/image/C4E03AQGowRj5NmyqOg/profile-displayphoto-shrink_800_800/0/1639002109018?e=1667433600&v=beta&t=08xE7p8QPje_vCFlvr0mUYemGAte-1P6yetYW7gZqMY"
        />
        <meta property="og:url" content="davidjosealmeida.xyz" />
        <meta property="og:site_name" content="Platzi Conf Store" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="article" />
        <meta property="fb:app_id" content="622491629505427" />
      </Helmet>
      <Products products={initialState.products} />
    </>
  );
}

export default Home