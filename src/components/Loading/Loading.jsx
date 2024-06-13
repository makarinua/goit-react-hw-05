import css from './Loading.module.css'

export default function Loading() {
    return (
        <div className={css.wrapper}>
            <span>Завантаження...</span>
        </div>
    )
}