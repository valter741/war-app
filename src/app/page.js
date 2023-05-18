"use client"; 

import Image from 'next/image'
import styles from './page.module.css'
import bg from '../../assets/back.jpg'
import React from 'react';

export default function Home() {
  const [warCount, setWarCount] = React.useState(0);

  return (
    <main className={styles.main} style={{
      backgroundImage: `url(${bg.src})`,
      width: '100%',
      height: '100%',
    }}>
        <div className={styles.grid}>
          <div className={styles.card}  onClick={() => setWarCount(warCount-1)}>
            <h2>
              <span>&lt;-</span> Decrease
            </h2>
          </div>

          <div className={styles.card3}>
            <h4>BlackBurn WarCount</h4>
            <h2>
              {warCount}
            </h2>
          </div>

          <div className={styles.card2} onClick={() => setWarCount(warCount+1)}>
            <h2>
              Increase <span>-&gt;</span>
            </h2>
          </div>
        </div>
    </main>
  )
}
