import css from './Film.module.css'

export default function Film({ data }) {
    const imgPath = data?.backdrop_path
    return (
        <div>
            <h2 className={css.filmTitle}>{data.title}</h2>
        </div>
    )
}
