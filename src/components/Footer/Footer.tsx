import footerLogo from '../../assets/footerLogo.svg'
import logoPremia from '../../assets/logo-premia.svg'
import facebook from '../../assets/Facebook.svg'
import telegram from '../../assets/telegram.svg'
import instagram from '../../assets/Instagram.svg'
import './Footer.scss'

export const Footer = () => {

    return (
        <footer className='Footer'>
            <div className='Footer__wrapper'>
                <div className='Footer__logos'>
                    <div className='Footer__logos-icons'>
                        <img style={{margin: '0 27px 0 0'}} src={footerLogo} alt="" />
                        <img src={logoPremia} alt="" />
                    </div>
                    <div className='Footer__logos-links'>
                        <a href="">
                            <img style={{margin: '0 8px 0 0'}} src={facebook} alt="" />
                        </a>
                        <a href="">
                            <img style={{margin: '0 8px 0 0'}} src={telegram} alt="" />
                        </a>
                        <a href="">
                            <img src={instagram} alt="" />
                        </a>
                    </div>
                </div>
                <div className='Footer__colInfo-wrapper'>
                    <div className='Footer__colInfo'>
                        <span className='Footer__colInfo-title'>О портале</span>
                        <button className='Footer__colInfo-button'>Продукты КМФ</button>
                        <button className='Footer__colInfo-button'>Новости / Анонсы</button>
                        <button className='Footer__colInfo-button'>О программе KMF Isker Hanymy</button>
                        <button className='Footer__colInfo-button'>Истории успеха</button>
                    </div>
                    <div className='Footer__colInfo'>
                        <span className='Footer__colInfo-title'>Обучение</span>
                        <a className='Footer__colInfo-link' href="">Наставничество</a>
                        <a className='Footer__colInfo-link' href="">Саморазвитие</a>
                        <a className='Footer__colInfo-link' href="">Здоровье</a>
                        <a className='Footer__colInfo-link' href="">Полезные советы</a>
                    </div>
                    <div className='Footer__colInfo'>
                        <span className='Footer__colInfo-title'>Бизнес</span>
                        <a className='Footer__colInfo-link' href="">Каталог</a>
                        <a className='Footer__colInfo-link' href="">Made in KZ</a>
                        <a className='Footer__colInfo-link' href="">Я социальный предприниматель</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}