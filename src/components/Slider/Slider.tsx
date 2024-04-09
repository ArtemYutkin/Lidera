import { useEffect, useState } from 'react'
import arrowLeft from '../../assets/arrowLeft.svg'
import arrowRight from '../../assets/arrowRight.svg'
import cn from 'classnames'
import './Silder.scss'

export const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        if (currentIndex > 3) {
            setCurrentIndex(0)
        }
        if (currentIndex < 0 ) {
            setCurrentIndex(3)
        }
    }, [currentIndex])

    return (
        <div className='Slider'>
            <div className='Slider__container'>
                <div className='Slider__wrapper'>
                    <div className='Slider__info'>
                        <span className='Slider__info-title'>KMF <br />и Фонд KMF-Демеу</span>
                        <span className='Slider__info-subtitle'>Для нас важно поддерживать социальное предпринимательство</span>
                        <button className='Slider__info-button'>Подробнее</button>
                    </div>
                    <div className='Slider__navigation'>
                        <button className='Slider__navigation-button' onClick={() => setCurrentIndex(prevState => prevState - 1)}>
                            <img src={arrowLeft} alt="" />
                        </button>
                        <button className='Slider__navigation-button' onClick={() => setCurrentIndex(prevState => prevState + 1)}>
                            <img src={arrowRight} alt="" />
                        </button>
                        <div className={currentIndex === 0 ? 'Slider__navigation-dot active' : 'Slider__navigation-dot'}></div>
                        <div className={currentIndex === 1 ? 'Slider__navigation-dot active' : 'Slider__navigation-dot'}></div>
                        <div className={currentIndex === 2 ? 'Slider__navigation-dot active' : 'Slider__navigation-dot'}></div>
                        <div className={currentIndex === 3 ? 'Slider__navigation-dot active' : 'Slider__navigation-dot'}></div>
                    </div>
                </div>
                <div className='Slider__pic-wrapper'>
                    <img 
                        className={cn('Slider__pic', )} 
                        onClick={() => setCurrentIndex(prevState => prevState + 1)} 
                            src={`src/assets/slide${currentIndex + 1}.png`} 
                            alt="" 
                        />
                </div>
            </div>
        </div>
    )
}