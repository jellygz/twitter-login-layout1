import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <div className={`${styles.logo}`}>
          <Image src={'/images/twitter.png'} alt="twitter-logo" width={500} height={500} />
        </div>

        <div className={`${styles.body}`}>
          <h1 className={`${styles.h1}`}>Happening Now</h1>
          <h2 className={`${styles.h2}`}>Join today.</h2>
          <button className={`${styles.google}`}>
            Sign in with Google
          </button>

          <br></br>

          <button className={`${styles.apple}`}>
              Sign in with Apple
          </button>

          <p className={`${styles.or}`}> ──────── or ──────── </p>
          <button className={`${styles.create}`}>Create Account</button>
          <p className={`${styles.terms}`}>By signing up, you agree to the Terms of Service and Privacy</p>
          <p className={`${styles.terms1}`}>Policy, including Cookie Use.</p>
          <br></br>
          <h3 className={`${styles.h3}`}>Already have an account?</h3>

          <button className={`${styles.signin}`}>
            Sign In
            </button>
        </div>
      </main>
    </>
  )
}
