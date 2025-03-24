import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

import styles from './index.module.css';

export default function Home() {
  const [shine, setShine] = useState(1);

  useEffect(() => {
    const shineInterval = setInterval(() => {
      setShine((shine) => {
        if (shine === 3) return 1;

        return shine + 1;
      });
    }, 3000);

    return () => clearInterval(shineInterval);
  }, []);

  useEffect(() => {
    const shine1 = document.getElementById('shine-1');
    const shine2 = document.getElementById('shine-2');
    const shine3 = document.getElementById('shine-3');

    if (shine1 && shine2 && shine3) {
      shine1.classList.remove('text-shine');
      shine2.classList.remove('text-shine');
      shine3.classList.remove('text-shine');

      if (shine === 1) {
        shine1.classList.add('text-shine');
      } else if (shine === 2) {
        shine2.classList.add('text-shine');
      } else if (shine === 3) {
        shine3.classList.add('text-shine');
      }
    }
  }, [shine]);

  const ProductCard = ({ title, description, href }) => (
    <Link to={href}>
      <div className={styles.product}>
        <div className={styles.productHeader}>
          <h3>{title}</h3>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M14.8161 4.4569C15.116 4.17123 15.5908 4.18281 15.8764 4.48276L22.5431 11.4828C22.819 11.7724 22.819 12.2276 22.5431 12.5172L15.8764 19.5172C15.5908 19.8172 15.116 19.8288 14.8161 19.5431C14.5161 19.2574 14.5046 18.7827 14.7902 18.4828L20.25 12.75L2 12.75C1.58579 12.75 1.25 12.4142 1.25 12C1.25 11.5858 1.58579 11.25 2 11.25L20.25 11.25L14.7902 5.51724C14.5046 5.2173 14.5161 4.74256 14.8161 4.4569Z'
              fill='currentColor'
              fillRule='evenodd'
              clipRule='evenodd'
            ></path>
          </svg>
        </div>
        <p>{description}</p>
      </div>
    </Link>
  );

  return (
    <Layout description='Pingback API Documentation for Devs. Build with Pingback'>
      <main className={styles.main}>
        <section className={styles.section}>
          <span className={styles.badge}>FROM DEVELOPERS TO DEVELOPERS</span>

          <h1 className={styles.title}>
            <span id='shine-1' className='text-shine'>
              Build.
            </span>
            <br />
            <span id='shine-2' className=''>
              Ship.{' '}
            </span>
            <span id='shine-3' className=''>
              Repeat.
            </span>
          </h1>

          <p className={styles.subtitle}>
            Explore Pingback's products and start building with us.
          </p>

          <div className={styles.products}>
            <ProductCard
              title='API Reference'
              description='Integrate Pingback services into your application.'
              href='/docs/api/introduction'
            />
            <ProductCard
              title='Embeddable Form'
              description='Embed a form in your website to collect user data.'
              href='/docs/embed/v2/introduction'
            />
            <ProductCard
              title='Email Verification Library'
              description='Verify email addresses using SMTP connection.'
              href='/docs/email-verification-library/introduction'
            />
          </div>
        </section>
      </main>
    </Layout>
  );
}
