import React from 'react'
import PageContainer from '../components/PageContainer'
import styles from "../styles/Home.module.scss"

const Home = () => {
  return (
    <PageContainer classOption={styles.home}>
        <h1>Svante Pålsson</h1>
        <h3>Fullstack Developer</h3>
    </PageContainer>
  )
}

export default Home