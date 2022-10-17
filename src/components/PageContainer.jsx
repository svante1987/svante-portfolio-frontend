import React from 'react'
import styles from "../styles/PageContainer.module.scss"

const PageContainer = ({children, classOption}) => {
  return (
    <div className={styles.container}>
        <div className={`styles.content ${classOption}`}>{children}</div>
    </div>
  )
}

export default PageContainer