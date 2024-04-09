import {  FC, useState } from 'react'
import logoPremia from '../../assets/logo-premia.svg'
import  logo  from '../../assets/logo.svg'
import miniArrow from '../../assets/miniArrow.svg'
import burger from '../../assets/burger.svg'
import xBtn from '../../assets/xBtn.svg'
import './Header.scss'

interface IHeaderProps {
    isMobile: boolean
}

export const Header: FC<IHeaderProps> = ({isMobile}) => {
    const [isOpen,setIsOpen] = useState(false)
    const [burgerOpen, setBurgerOpen] = useState(false)

    const openBurger = () => {
        setBurgerOpen(!burgerOpen)
        document.body.style.overflowY = 'hidden';
    }
    const closeBurger = () => {
        setBurgerOpen(!burgerOpen)
        document.body.style.overflowY = 'auto';
    }
    return (
        <header className='Header'>
            <div className={(burgerOpen === true) ? 'Header__wrapper active' : 'Header__wrapper'}>
                <div className='Header__logolang'>
                    <img className='Header__logolang-pic' src={logo} alt="" />
                    <select className='Header__selection' name="" id="">
                        <option value="">Рус</option>
                        <option value="">Каз</option>
                    </select>
                    <button className='Header__burgerMob' 
                    onClick={() => openBurger()}
                    style={{display: `${((isMobile === false) ? 'none' : ((burgerOpen === true) ? 'none' : 'block'))}`}}>
                        <img src={burger} alt="" />
                    </button>
                    <button className='Header__burgerMob' 
                    onClick={() => closeBurger()}
                     style={{display: `${((burgerOpen === true) ? 'block' : 'none')}`}}>
                        <img src={xBtn} alt="" />
                    </button>
                </div>
                <nav className='Header__navBar' 
                style={{display: `${((isMobile === false) ? 'flex' : ((burgerOpen === true) ? 'flex' : 'none'))}`}}
                >
                    <button className='Header__navBar-button' 
                    onClick={() => setIsOpen(!isOpen)} 
                    style={{color: `${((burgerOpen === true) ? '#32334C' : '#9D097C')}`}} 
                    >О портале
                    <img 
                    style={{display: `${((burgerOpen === true) ? 'block' : 'none')}`, 
                    transform: `${(isOpen === true ? 'rotate(270deg)' : 'rotate(90deg)')}`}}
                    src={miniArrow} alt="" /></button>

                    <div className='Modal' style={{display: `${((isOpen === true) ? 'flex' : 'none')}`}}>
                        <span className='Modal__title'>О портале</span>
                        <div className='Modal__wrapper'>
                            <button className='Modal__wrapper-button'>Продукты КМФ</button>
                            <img 
                            style={{display: `${((burgerOpen === true) ? 'none' : 'block')}`}}
                            src={miniArrow} alt="" />
                        </div>
                        <div className='Modal__wrapper'>
                            <button className='Modal__wrapper-button'>Новости / Анонсы</button>
                            <img 
                            style={{display: `${((burgerOpen === true) ? 'none' : 'block')}`}}
                            src={miniArrow} alt="" />
                        </div>
                        <div className='Modal__wrapper'>
                            <button className='Modal__wrapper-button'>О программе KMF Isker Hanymy</button>
                            <img 
                            style={{display: `${((burgerOpen === true) ? 'none' : 'block')}`}}
                            src={miniArrow} alt="" />
                        </div>
                        <div className='Modal__wrapper'>
                            <button className='Modal__wrapper-button'>Истории успеха</button>
                            <img 
                            style={{display: `${((burgerOpen === true) ? 'none' : 'block')}`}}
                            src={miniArrow} alt="" />
                        </div>
                    </div>

                    <button className='Header__navBar-button'>Бизнес
                        <img 
                        style={{display: `${((burgerOpen === true) ? 'block' : 'none')}`, transform: 'rotate(90deg)'}}
                        src={miniArrow} alt="" />
                    </button>
                    <button className='Header__navBar-button'>Обучение
                        <img 
                        style={{display: `${((burgerOpen === true) ? 'block' : 'none')}`, transform: 'rotate(90deg)'}}
                        src={miniArrow} alt="" />
                    </button>
                    <button className='Header__navBar-button'>Забота о себе
                        <img 
                        style={{display: `${((burgerOpen === true) ? 'block' : 'none')}`, transform: 'rotate(90deg)'}}
                        src={miniArrow} alt="" />
                    </button>
                    <button className='Header__navBar-buttonExtra'>Премия KMF Isker hanymy</button>
                    <img src={logoPremia} alt="" />
                </nav>
            </div>
        </header>
    )
}