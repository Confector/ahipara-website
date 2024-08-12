import Head from 'next/head';
import Start from './Start/Start';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ahipara - Tech & Design</title>
        <meta
          name='description'
          content='Ahipara - Als Experten in Tech & Design geben wir Ihrem Unternehmen frische Strahlkraft.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Start />
    </>
  );
}
