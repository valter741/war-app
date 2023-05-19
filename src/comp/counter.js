"use client"

import styles from '../app/page.module.css'
import React from 'react';

const uploadWarCount =  async ( warCount ) => {
  console.log(warCount)
  const response = await fetch('/api', {
      method: 'POST',
      headers: {
        'Accept': 'application.json',
        'Content-Type': 'application/json'
      },
      body: warCount,
    });
  await console.log(response);
}

export default function Counter( props ) {

    const [warCount, setWarCount] = React.useState(props.props);

    return(
        <div className={styles.grid}>
          <div className={styles.card}  onClick={() => {uploadWarCount(warCount-1); setWarCount(warCount-1)}}>
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

          <div className={styles.card2} onClick={() => {uploadWarCount(warCount+1); setWarCount(warCount+1)} }>
            <h2>
              Increase <span>-&gt;</span>
            </h2>
          </div>
        </div>
    );
}