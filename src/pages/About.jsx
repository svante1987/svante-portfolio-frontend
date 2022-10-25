import React from 'react'
import Slider from "react-slick";
import Slide from "../components/Slide"
import {
  People,
  Logos,
  TestimonialsSliderSettings,
  ClientSliderSetting,
} from "../settings/sliderConfig";
import PageContainer from '../components/PageContainer'
import { BigTitle, SmallTitle } from "../components/Title"

//Styles
import { BsShop, BsPencil, BsLaptop, BsFlag } from "react-icons/bs";
import { BsHeart, BsClock, BsStar } from "react-icons/bs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from '../styles/About.module.scss'

const About = () => {

  const calcAge = () => {
    const myBirth = new Date("11/18/1987")
    const monthDiff = Date.now() - myBirth.getTime()
    const ageDateTime = new Date(monthDiff)
    const year = ageDateTime.getUTCFullYear()
    const age = Math.abs(year - 1970);
    
    return age
  }

  return (
    <PageContainer>
      {/* {Section1} */}
      <section className={styles.section1}>
        <BigTitle>About Me</BigTitle>
        <div className={styles.info}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Magni, quidem! Molestias reprehenderit tempora nulla laboriosam maxime 
            officia earum saepe quaerat doloribus voluptatibus minima, labore quod 
            ad corrupti aspernatur eaque quae.
          </p>
            <div className={styles.moreInfo}>
              <ul>
                <li>
                  <span>Age</span>
                  <span>{calcAge()}</span>
                </li>
                <li>
                  <span>Residence</span>
                  <span>Halmstad, Sweden</span>
                </li>
                <li>
                  <span>E-mail</span>
                  <span>svantepalsson1987@gmail.com</span>
                </li>
              </ul>
            </div>
        </div>
      </section>

      {/* {Section2} */}
      <section className={styles.section2}>
        <SmallTitle>What I Do</SmallTitle>
        <div className={styles.moreInfoContainer}>
          {/* { Left Side} */}
          <div className={styles.left}>
            <div className={styles.info}>
              <BsShop className={styles.icon} />
              <h4>E-Commerce</h4>
              <p className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci rem aliquam commodi expedita optio perferendis totam,
                magnam sit quasi ad?
              </p>
            </div>
            <div className={styles.info}>
              <BsLaptop className={styles.icon} />
              <h4>Web Design</h4>
              <p className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci rem aliquam commodi expedita optio perferendis totam,
                magnam sit quasi ad?
              </p>
            </div>
          </div>
          {/* Right Side */}
          <div className={styles.right}>
          <div className={styles.info}>
              <BsPencil className={styles.icon} />
              <h4>Copywriting</h4>
              <p className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci rem aliquam commodi expedita optio perferendis totam,
                magnam sit quasi ad?
              </p>
            </div>
            <div className={styles.info}>
              <BsFlag className={styles.icon} />
              <h4>Project Lead</h4>
              <p className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci rem aliquam commodi expedita optio perferendis totam,
                magnam sit quasi ad?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className={styles.section3}>
        <SmallTitle>Testimonials</SmallTitle>
        <Slider {...TestimonialsSliderSettings}>
          {People.map((person, index)=>(
            <div key={index}>
              {console.log(person)}
              <Slide
                info={{
                  imageSource: person,
                  quote: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                  assumenda, sequi cum eum autem eaque nihil error`,
                  name: `Robert Watkins`,
                  company: `Endicott Shoes`,
                }}
              />
            </div>
          ))}
        </Slider>
      </section>
    </PageContainer>
  )
}

export default About