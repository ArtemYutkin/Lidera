import { FC, useEffect, useState } from 'react'
import { BusinessCards } from '../../data'
import './Business.scss'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";

interface IBusiness {
    isMobile:boolean
}

export const Business: FC<IBusiness> = (isMobile) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        }
      };

    useEffect(() => {
        if (currentIndex > 3) {
            setCurrentIndex(3)
        }
        if (currentIndex < 0 ) {
            setCurrentIndex(0)
        }
    }, [currentIndex])
    
    return (
        <div className="Business">
            <span className='Business__title'>Бизнес</span>
            <div className='Business__wrapper'>
                <Carousel
                    swipeable={true}
                    draggable={false}
                    showDots={true}
                    responsive={responsive}
                    infinite={true}
                    autoPlay={isMobile ? true : false} 
                    autoPlaySpeed={5000}
                    // customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    deviceType={'desktop'}
                    dotListClass="Business__navigation"
                    itemClass="carousel-item-padding-40-px"
                    renderButtonGroupOutside={true}
                    >
                        {BusinessCards.map((cardInfo) => {
                            const {id,title,adress,subtitle} = cardInfo;

                            return (
                                <div className='Business__cardsRow-card' key={id}>
                                    <div className='Business__cardsRow-card__pic' style={{backgroundImage: `url(src/assets/BusinessCard${id}.png)`}}></div>
                                    <span className='Business__cardsRow-card__title'>{title}</span>
                                    <span className='Business__cardsRow-card__adress'>{adress}</span>
                                    <span className='Business__cardsRow-card__subtitle'>{subtitle}</span>
                                </div>
                            )
                        })}
                </Carousel>;
                
            </div>
        </div>
        
    )
}