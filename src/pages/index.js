import React, { useState, useEffect } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";

import styles from "./index.module.css";

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
    const shine1 = document.getElementById("shine-1");
    const shine2 = document.getElementById("shine-2");
    const shine3 = document.getElementById("shine-3");

    if (shine1 && shine2 && shine3) {
      shine1.classList.remove("text-shine");
      shine2.classList.remove("text-shine");
      shine3.classList.remove("text-shine");

      if (shine === 1) {
        shine1.classList.add("text-shine");
      } else if (shine === 2) {
        shine2.classList.add("text-shine");
      } else if (shine === 3) {
        shine3.classList.add("text-shine");
      }
    }
  }, [shine]);

  return (
    <Layout description='Pingback API Documentation for Devs. Build with Pingback'>
      <main className={styles.main}>
        <section className={styles.section}>
          <span className={styles.badge}>FROM DEVS TO DEVS</span>

          <h1 className={styles.title}>
            <span id='shine-1' className='text-shine'>
              Build.
            </span>
            <br />
            <span id='shine-2' className=''>
              Ship.{" "}
            </span>
            <span id='shine-3' className=''>
              Repeat.
            </span>
          </h1>

          <p className={styles.subtitle}>Get started with the Pingback API and integrate with your product.</p>

          <Link to='/docs/api/introduction' className={clsx("button button--primary", styles.button)}>
            Get Started
          </Link>
        </section>
      </main>
    </Layout>
  );
}
