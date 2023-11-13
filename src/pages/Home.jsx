import juiceImg from '../assets/jusorange.png'
import leafImg from '../assets/et.svg'
import cowbg from '../assets/cowbg.png'
import Dobg from '../assets/Dobg.png'
import homeImg from '../assets/liquid-fruit.png'

import apple1 from '../assets/et.svg'
import apple2 from '../assets/apple2.png'

import orange1 from '../assets/et.svg'
import orange2 from '../assets/or8.png'
import ananas1 from '../assets/an9.png'
import ananas2 from '../assets/an8.png'

import peach from '../assets/peach.png'


import cowImg from '../assets/milk.svg'
import { motion ,AnimatePresence} from "framer-motion"

import prod1 from '../assets/t1.png'
import prod2 from '../assets/s2.svg'
import prod3 from '../assets/s3.svg'
import prod4 from '../assets/s4.svg'

import MaidaLogo from '../assets/s3.svg'


import myVideo from '../assets/vid.mp4';
import { Link } from 'react-router-dom'
import Transiton from '../comp/Transiton'
import { useState,useEffect } from 'react'

const Home = () => {

  const productImages = [prod1, prod2, prod3,prod4];


  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % productImages.length);
    }, 8050);

    return () => clearInterval(interval);
  }, []);

  return (


    
    <>
      <Transiton />

      <motion.div initial={{ opacity: 0}} animate={{ opacity: 1, }}
        exit={{ opacity: 0, }} transition={{ ease: "easeInOut", duration: 0.1, delay: .5 }}>
        <main className="main">

          <section className="home">


            {/* back omg texteur
               <img src={shapefImg} alt="" className="home__shape-bg" />
                */ }

            <div className="home__container container">
              <div className="home__data">
                <h1 className="home__title">
                Votre 
                  <span>satisfaction </span>
                  notre priorité.
                </h1>
                <p className="home__description">
                Spark Agency
        
                </p>
                {/* fix the hover */}
                <a href="#" className="home__button">
                Détails 
                </a>
              </div>

              <div className="home__images">
        
                 <AnimatePresence mode='wait'>
                 <motion.div
        key={0} // Add the key prop here
        initial={{ opacity: 0,scale: .5 , y:50 }}
        animate={{ opacity: 1,scale: 1, y:0 }}
        exit={{opacity: 0, scale: .5,y:50  }}
        transition={{ duration: .5 , ease: "easeInOut"}}
        className="home__juice-animation"
      >
        <img
          src={prod2}
          className="home__juice"
          alt={`Product 1`}
        />
      </motion.div>
                 </AnimatePresence>


             
       
             

                <motion.img initial={{ y: -100, opacity: 0 }} transition={{ type: "tween", duration: 1.2, delay: 1.2 }} animate={{ y: 15, rotate: -4, opacity: 1 }} src={apple1} alt="" className="home__apple1" /> 

                <motion.img initial={{ y: -100, opacity: 0 }} transition={{ type: "tween", duration: 1.2, delay: 1 }} animate={{ y: 15, rotate: -4, opacity: 1 }} src={orange1} alt="" className="home__apple2" />    <div>
                  <motion.img initial={{ y: -100, opacity: 0 }} transition={{ type: "tween", duration: 1.2, delay: .6 }} animate={{ y: 15, rotate: -4, opacity: 1 }} src={leafImg} alt="" className="home__leaf" />
                  <motion.img initial={{ y: -100, opacity: 0 }} transition={{ type: "tween", duration: 1.2, delay: .5 }} animate={{ y: 0, rotate: -36, opacity: 1 }} src={leafImg} alt="" className="home__leaf" />
                  <motion.img initial={{ y: -100, opacity: 0 }} transition={{ type: "tween", duration: 1.2, delay: .4 }} animate={{ y: 0, rotate: 25, opacity: 1 }} src={leafImg} alt="" className="home__leaf" />
                  <motion.img initial={{ y: -100, opacity: 0 }} transition={{ type: "tween", duration: 1.2, delay: .5 }} animate={{ y: 0, rotate: 45, opacity: 1 }} src={leafImg} alt="" className="home__leaf" />
                  <motion.img initial={{ y: -100, opacity: 0 }} transition={{ type: "tween", duration: 1.2, delay: .7 }} animate={{ y: 0, rotate: 16, opacity: 1 }} src={leafImg} alt="" className="home__leaf" />


                </div> 

           


              </div>


            </div>
          </section>
        </main>

        <section className="aboutmain">


          <section className="about" id="about">

            <div className="container">

              <div className="about-top">

                <h2 className="h2 section-title">Solutions Créatives, Évolution Digitale</h2>

                <p className="section-text">
                Chez "Spark", nous croyons en la puissance de la créativité pour stimuler la réussite. Notre approche repose sur l'innovation, la personnalisation et la recherche constante de solutions qui mettent en lumière votre marque et dépassent les attentes
                </p>

                <ul className="about-list">

                  <li>
                    <div id='first' className="about-card">

                      <br />



                      <div className="flip">

                        <div className="front three">

                          <h1 className="text-shadow">Innovant</h1>
                          <Link className='btn-gradient-2' >
                          EN SAVOIR PLUS
                          </Link>
                        </div>

                        <div className="back three">
                          <h2>Innovant</h2>
                          <p>Spark incarne une culture d'innovation constante, cherchant inlassablement des approches créatives et novatrices pour les solutions digitales et marketing. </p>
                        </div>
                      </div>



                    </div>
                  </li>

                  <li>
                    <div id='second' className="about-card">

                  
                      <br />




                      <div className="flip">

                        <div className="front two">

                          <h1 className="text-shadow">Personnalisé</h1>

                          <Link id='btn2' className='btn-gradient-2' >
                          EN SAVOIR PLUS
                          </Link>
                        </div>

                        <div className="back two">
                          <h2>Personnalisé</h2>
                          <p>Chez Spark, chaque collaboration client est abordée avec une approche personnalisée</p>
                        </div>

                      </div>

                    </div>

                  </li>

                  <li>
                    <div id='third' className="about-card">


                     
                      <br />
                      <br />
                      <br />


                      <div className="flip ">

                        <div className="front one">

                          <h1 className="text-shadow">Dépassant les Attentes</h1>
                          <Link id='btn3' className='btn-gradient-2' >
                          EN SAVOIR PLUS
                          </Link>
                        </div>

                        <div className="back one ">
                          <h2>Dépassant les Attentes</h2>
                          <p>Chez Spark, notre objectif est de dépasser les attentes à chaque projet. Nous ne nous contentons pas d'atteindre les objectifs, nous nous efforçons toujours d'aller plus loin</p>
                        </div>

                      </div>
                    </div>
                  </li>

                </ul>

              </div>

              <div className="about-bottom">

                <figure className="about-bottom-banner">
                  <img src={MaidaLogo} alt="about banner" className="about-banner" />
                </figure>

                <div className="about-bottom-content">

                  <h2 className="h2 section-title">Mission : Inspire la Créativité Lumineuse.</h2>

                  <p className="section-text">
                  Chez Spark, notre mission est d'allumer une créativité brillante qui transcende les frontières. Nous sommes déterminés à remodeler le monde du numérique et du marketing en tissant innovation, personnalisation et un engagement inébranlable envers des solutions qui mettent en lumière les marques et dépassent les attentes. Notre engagement n'est pas seulement d'atteindre des objectifs mais de les surpasser constamment, en créant des expériences qui persistent dans l'esprit de nos clients. 
                  </p>

                  <Link  className="btn btn-secondary"  to="/About">
                  Découvrez nous
                </Link>

                </div>

              </div>

            </div>
          </section>
        </section>


        {/* vertical flip img 
                     <div className="testy">

     
        <div className="flip flip-vertical">

          <div className="front">

            <h1 className="text-shadow">MOUNTAIN</h1>
          </div>

          <div className="back">
            <h2>Angular</h2>
            <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
          </div>


        </div>
      </div>
                */ }
      </motion.div>
    </>
  )
}

export default Home