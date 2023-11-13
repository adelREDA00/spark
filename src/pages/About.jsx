import React, { useState, useRef, useEffect } from 'react'
import bg1 from '../assets/family.jpg'
import bg2 from '../assets/s1.svg'
import bg3 from '../assets/ml.webp'
import bg4 from '../assets/5.png'
import bg5 from '../assets/6.png'
import bg6 from '../assets/fam2.jpg'

import YourComponent from '../comp/YourComponent'
import  { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';

import rb from '../assets/rb3.png'
import pur from '../assets/bgs.png'
import Transiton from '../comp/Transiton'
import { motion, transform } from "framer-motion"
import { Link } from 'react-router-dom'

const About = () => {
  //slider
  const sliderContainer = useRef(null)

  const [currentSlidePos, setCurrentSlidePos] = useState(0)
  const [move, setMove] = useState(0)

  const handleSlide = (e) => {
    let btn = e.currentTarget.dataset.id
    const theEnd = sliderContainer.current.childElementCount - 1;
    const slideEnd = currentSlidePos >= theEnd


    if (btn === "1") {

      if (slideEnd) {
        return setCurrentSlidePos(0)
      } else {
        setCurrentSlidePos((prev) => {
          return prev + 1
        })
      }
    }
    if (btn === "0") {
      if (currentSlidePos <= 0) {
        return setCurrentSlidePos(theEnd)
      } else {
        setCurrentSlidePos((prev) => {
          return prev - 1
        })
      }
    }
  }







  useEffect(() => {

    let adjust = sliderContainer.current.children[currentSlidePos].offsetLeft
    setMove(adjust)
  }, [currentSlidePos]);

  //accordation
  const [clicked, setClicked] = useState("0")

  const handleAccord = (e) => {
    let target = e.currentTarget.dataset.id;
    setClicked(target)
  }

  return (

    <>
      <Transiton />
      <motion.div initial={{ opacity: 0, }} animate={{ opacity: 1, }}
        exit={{ opacity: 0, }} transition={{ ease: "easeInOut", duration: 0.1, delay: .5 }} className="about-page ">

        {/* bg image here on the section div
                */ }
        <section className="section hero has-bg-image" aria-label="home"
          style={{ backgroundImage: `url(${pur})` }} >
          <div className="container">

            <div className="hero-content">

              <h1 className="h1 hero-title">Équipe</h1>

              <p className="hero-text">
              Bienvenue dans l'univers créatif de Spark, où la magie du code rencontre l'art du design ! Faites la connaissance de notre duo dynamique : Reda, notre sorcier du web, et Gaya, notre génie du design. Avec Reda qui donne vie aux sites web et Gaya ajoutant cette touche de magie visuelle, nous sommes l'équipe de rêve derrière les merveilles digitales de Spark. Préparez-vous à découvrir la simplicité et la créativité qui nous animent, transformant les idées en expériences en ligne captivantes. Rencontrez les visages derrière les pixels 
              </p>

              <div className="btn-wrapper">

                <Link className="btn btn-primary" to="/collections">
                  Explorez
                </Link>

         

                <Link className="btn btn-outline" to="/contact">
                  Contactez-nous
                </Link>


              </div>

            </div>

            <div className="hero-slider" data-slider>

              <div className="slider-inner">
                <ul ref={sliderContainer} className="slider-container" style={{ transform: `translateX(-${move}px)` }}>



                  <li className="slider-item">

                    <figure className="img-holder" >
                      <img src={bg5} alt="" className="img-cover" />
                    </figure>

                  </li>

                  <li className="slider-item">

                    <figure className="img-holder" >
                      <img src={bg4} alt="" className="img-cover" />
                    </figure>

                  </li>

                </ul>
              </div>

              <button onClick={handleSlide} className="slider-btn prev" aria-label="slide to previous" data-id="0">
                <ion-icon name="arrow-back"></ion-icon>
              </button>

              <button onClick={handleSlide} className="slider-btn next" aria-label="slide to next" data-id="1">
                <ion-icon name="arrow-forward"></ion-icon>
              </button>

            </div>

          </div>
        </section>

        <section className="about" aria-labelledby="about-label">
          <div className="container">

            <figure className="about-banner">
              <img src={bg2} loading="lazy" alt="about banner"
                className="w-100" />
            </figure>

            <div className="about-content">

              <p className="section-subtitle" id="about-label">Historique</p>

              <h2 className="h2 section-title">
              Le Parcours de Spark : D'Arles à Paris
              </h2>

              <ul>

                <li className="about-item">
                  <div className={`accordion-card ${clicked == "0" ? 'expanded' : ''}`}>

                    <h3 className="card-title">

                      <button data-id="0" className="accordion-btn" onClick={handleAccord}>

                        <ion-icon name="chevron-down-outline" aria-hidden="true" className="down"></ion-icon>

                        <span className="span h5">
2020  </span>

                      </button>

                    </h3>

                    <p className="accordion-content">
                    C'est en 2020 que Spark voit le jour dans la ville pittoresque d'Arles, où une petite équipe de visionnaires, Reda et Gaya, décide de mettre en commun leurs talents pour allumer une étincelle créative dans le monde numérique. Avec une passion partagée pour le développement web et le design, ils entreprennent de révolutionner la scène locale.
                    </p>

                  </div>
                </li>

                <li className="about-item">
                  <div className={`accordion-card ${clicked == "1" ? 'expanded' : ''}`} >

                    <h3 className="card-title">
                      <button data-id="1" className="accordion-btn" onClick={handleAccord}>
                        <ion-icon name="chevron-down-outline" aria-hidden="true" className="down"></ion-icon>

                        <span className="span h5">2021</span>
                      </button>
                    </h3>

                    <p className="accordion-content">
                    L'année suivante, Spark gagne rapidement du terrain en collaborant avec des entreprises locales à Arles. Leur dévouement à la création de sites web uniques et à des stratégies marketing innovantes attire l'attention de la communauté, établissant Spark comme l'agence de référence pour l'excellence numérique dans la région.
                    </p>

                  </div>
                </li>

                <li className="about-item">
                  <div className={`accordion-card ${clicked == "2" ? 'expanded' : ''}`} >

                    <h3 className="card-title">
                      <button data-id="2" className="accordion-btn" onClick={handleAccord}>
                        <ion-icon name="chevron-down-outline" aria-hidden="true" className="down"></ion-icon>

                        <span className="span h5">2022  </span>
                      </button>
                    </h3>

                    <p className="accordion-content">
                    L'année 2022 marque une étape significative pour Spark alors que sa réputation grandit, dépassant les frontières d'Arles. Spark déploie ses ailes vers une autre ville, et les lumières scintillantes de Paris les attirent. L'engagement de l'agence envers la créativité et les solutions personnalisées attire des clients de diverses industries, solidifiant leur statut d'étoile montante dans le paysage numérique.
                    </p>

                  </div>
                </li>

                   <li className="about-item">
                  <div className={`accordion-card ${clicked == "3" ? 'expanded' : ''}`} >

                    <h3 className="card-title">
                      <button data-id="3" className="accordion-btn" onClick={handleAccord}>
                        <ion-icon name="chevron-down-outline" aria-hidden="true" className="down"></ion-icon>

                        <span className="span h5">2023 

</span>
                      </button>
                    </h3>

                    <p className="accordion-content">
                    En 2023, Spark réalise un exploit remarquable en sécurisant une collaboration prestigieuse avec rien de moins que le Musée du Louvre. L'équipe travaille étroitement avec l'institution emblématique pour optimiser et redessiner son site web, fusionnant art et technologie de manière transparente. Ce projet met en avant non seulement l'expertise technique de Spark, mais confirme également leur position de pionniers dans le domaine numérique, laissant une empreinte indélébile sur la capitale culturelle du monde
                    </p>

                  </div>
                </li>

              </ul>

            </div>

          </div>
        </section>


        <section className="section feature" aria-labelledby="feature-label">
          <div className="container">

            <figure className="feature-banner">
              <img src={bg3} loading="lazy" alt="feature banner"
                className="w-100" />
            </figure>

            <div className="feature-content">

              <p className="section-subtitle" id="feautre-label">NOS PARTENAIRE</p>

              <h2 className="h2 section-title">
              Musée du Louvre

              </h2>

              <p className="section-text">
              Le Musée du Louvre, situé au cœur de Paris, incarne un trésor culturel inestimable. Avec une étendue de près de 60 600 m², le Louvre abrite environ 35 000 objets, couvrant une gamme impressionnante de l'histoire, de la préhistoire au 21e siècle. En tant que l'un des plus grands musées du monde, il accueille plus de 8 millions de visiteurs chaque année, offrant une expérience immersive à travers des siècles d'art et d'histoire.

Ce monument emblématique repose sur les fondations du Palais du Louvre, une forteresse construite au 12e siècle, dont les vestiges sont encore visibles dans ses sous-sols. Au fil des siècles, le Louvre a évolué, passant de résidence royale à l'Académie des Inscriptions et Belles-Lettres pendant la Révolution française, jusqu'à devenir le musée que nous connaissons aujourd'hui.

L'ouverture du Louvre en 1793 a marqué le début d'une aventure culturelle sans précédent. Au fil du temps, sous Napoléon, Louis XVIII, Charles X, et à travers le Second Empire français, la collection a prospéré, gagnant en envergure et en diversité.
              </p>

              <h2>Description des actions</h2>
              <p className="section-text">
              Le Musée du Louvre a pour mission principale de conserver, protéger, restaurer et présenter au public les œuvres de ses collections.
              <br />
              <br />

              Il favorise la connaissance de ses collections, développe la fréquentation, et assure des études scientifiques.
              </p>

              <h3>Historique</h3>
              <p className="section-text">
              À l'origine construit comme un palais royal au XIIe siècle, il a été transformé en musée public lors de la Révolution française en 1793. Depuis lors, il s'est développé pour devenir une institution emblématique, en constante évolution et expansion de ses collections.
              <br />
              <br />

              le musée a été fermé en 1796, avant de rouvrir en 1801.
              </p>

              <h3>ORGANIGRAMME</h3>
              <p className="section-text">
                <strong>   la Présidente-Directrice du musée du Louvre :  </strong>
            Laurence des Cars 
              <br />
              <br />

              <strong>quatre représentants de l’Etat :  </strong>


le directeur général des patrimoines ou son représentant : Jean-François Hébert,
un autre représentant de la direction générale des patrimoines ou la directrice chargée des musées de France : Christelle Creff,
<br />
              <br />
              <strong>le secrétaire général du ministère chargé de la culture ou son représentant :  </strong>
 Luc Allaire,
 <br />
              <br />
              <strong>le directeur du budget au ministère chargé du budget ou son représentant :  </strong>
   Mélanie Joder,


             

   
              </p>

              <h2>Public cible</h2>
              <br />
              <h3> public principal</h3>

                <ul>
                  <li> Les Amateurs d'Art</li>
                  <li> Les Passionnés d'Histoire
</li>

                  <li> Les Touristes
</li>
                  <li> Les Étudiants</li>

                </ul>
                <br />
              <h3> Public Secondaire</h3>

                <ul>
                  <li> Les Chercheurs
</li>
                  <li> Les Familles

</li>


                  <li> Les Visiteurs Internationaux
</li>

                </ul>
             


              <br />
              <br />

              <h3>Identité visuelle </h3>
              <p className="section-text">
              <strong>           Logo : </strong>

     Le logo du Musée du Louvre est sobre et élégant. Il arbore souvent l'image de la pyramide de verre, qui est devenue un symbole mondial du musée. Ce logo incarne l'esprit du Louvre en associant la modernité de la pyramide à l'histoire riche du musée.
              <br />
              <br />
              <strong> Couleurs : </strong>
              Les couleurs associées au Louvre sont souvent riches et profondes, rappelant les tons classiques de l'art et de l'histoire. Les nuances de doré, de rouge, de bleu et de vert sont fréquemment utilisées pour évoquer une esthétique à la fois raffinée et tradition
              </p>

              <h3>pistes d’amélioration</h3>
              <br />
              <ul className="feature-list">

                <li>
                  <div className="feature-card">

                    <div className="card-icon">
                      <ion-icon name="checkmark" aria-hidden="true"></ion-icon>
                    </div>

                    <span className="span">
                    Expansion des programmes éducatifs
                    </span>

                  </div>
                </li>

                <li>
                  <div className="feature-card">

                    <div className="card-icon">
                      <ion-icon name="checkmark" aria-hidden="true"></ion-icon>
                    </div>

                    <span className="span">
                      Mobile App
                    </span>

                  </div>
                </li>

                <li>
                  <div className="feature-card">

                    <div className="card-icon">
                      <ion-icon name="checkmark" aria-hidden="true"></ion-icon>
                    </div>

                    <span className="span">
                    Amélioration de l'engagement des visiteurs
                    </span>

                  </div>
                </li>

         

              </ul>

            </div>

          </div>
          
  
        </section>

        <section className="stats" aria-label="our stats">


          <div className="container">
          <h3 >Réseaux sociaux</h3>
            <ul className="stats-card has-bg-image" style={{ backgroundImage: `url(${rb})` }}>

              <li>
                <p className="card-text">
                  <span className="h1">2.7M</span>

                  <span className="span">Facebook</span>
                </p>
              </li>

              <li>
                <p className="card-text">
                  <span className="h1">5M</span>

                  <span className="span">Instagram</span>
                </p>
              </li>

              <li>
                <p className="card-text">
                  <span className="h1">1.5M</span>

                  <span className="span">X</span>
                </p>
              </li>

              <li>
                <p className="card-text">
                  <span className="h1">1.77K</span>

                  <span className="span">Youtube</span>
                </p>
              </li>

            </ul>

          </div>
          <br />
          <br />


        </section>


       <div className="td">
       <YourComponent />
       </div>


      </motion.div>
    </>
  )
}

export default About