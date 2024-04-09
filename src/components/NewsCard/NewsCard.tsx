import './NewsCard.scss'

interface NewsCardProps {
    id: number
    title: string
}

export const NewsCard = (props:NewsCardProps) => {

    return (
        <>
            <div className='NewsCard' style={{backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%), url(src/assets/NewsCard${props.id}.png)`}} >
                <span className='NewsCard__title'>{props.title}</span>
            </div>
        </>
    )
}