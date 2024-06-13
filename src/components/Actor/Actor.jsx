import css from './Actor.module.css'


export default function Actor({ data }) {
    const imgPath = data?.profile_path
    const imgUrl = `https://image.tmdb.org/t/p/w200${imgPath}`
    const defImg = 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png'
    return (
        <div className={css.actorContainer}>
            <img className={css.photo} src={imgPath ? imgUrl : defImg} alt={data?.name} />
            <h4>{data.name}</h4>
            <p>as: {data?.character}</p>
        </div>
    )
}