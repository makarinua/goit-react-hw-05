import css from './Review.module.css'

export default function Review({ data }) {

    return (
        <div>
            <h4 className={css.name}>{data?.author_details?.name || data?.author_details?.username || "Author"}</h4>
            <p>{data?.content}</p>
        </div>

    )
}