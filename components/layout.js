import Head from 'next/head';
import Link from 'next/link';

export default function Layout( {children, home} ) {
  return (
    <div>
      <Head>
        <title>WordPress Data</title>
      </Head>
      <header>
        <h1>WordPress Data</h1>
        <hr/>
      </header>
      <main>
        {children}
      </main>
      {!home && (
        <Link href="/" className="btn btn-primary mt-3">⬅ Back</Link>
      )}
    </div>
  )
}
