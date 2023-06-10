import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import componentStyles from "../styles/Home.search.module.css";
import React from 'react';
import SearchComponent from '../components/HomeSearch/SearchComponent';
import SearchForm from '../components/HomeSearch/SearchForm';
import FilterComponent from '../components/HomeSearch/FilterComponent';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>g0v Language Portal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <code>g0v Language Portal</code>
        </h1>

        <p className={styles.description}>
          Under construction; Please look at the <Link href="https://g0v.hackmd.io/kXJetmRdTHqEjx3iN7e-Ig?both">HackMD</Link>
        </p>

        <div className={componentStyles['search-wrapper']}>
          <div className={componentStyles['search-filter-wrapper']}>
            <SearchComponent />
            <FilterComponent />
          </div>
          <div className={componentStyles['search-form-wrapper']}>
            <SearchForm />
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        {/* Continue with footer */}
      </footer>
    </div>
  )
}
