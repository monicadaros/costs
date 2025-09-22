
import { useState, useEffect } from 'react';
import styles from './Message.module.css'

function Message({type, msg}) {

  const [visible, setVisible] = useState(false);
useEffect(() => {
    if (!msg) {
      setVisible(false);
      console.log('1');
      return;
    }
    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
      console.log('2');
    }, 3000);

    return () => clearTimeout(timer);

}, [msg])

    return (
      <>
      {visible && (
      <div className={`${styles.message} ${styles[type]}`}>{msg}</div>
    )}
      </>
    )
}

export default Message;