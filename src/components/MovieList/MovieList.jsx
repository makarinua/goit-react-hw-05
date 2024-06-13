import { Link, useLocation } from "react-router-dom";
import css from './MovieList.module.css'
import Film from "../Film/Film";

export default function MovieList({ data }) {

    const location = useLocation()

    return (
        <ul className={css.movieList}>
            {data.map(item => (<li className={css.film} key={item.id}><Link to={`/movies/${item.id}`} state={location}><Film data={item}></Film></Link></li>))}
        </ul>

    )
}
