import { useEffect, useState, useId } from "react";
import css from './HomePage.module.css'
import { fetchTrends } from '../../fetch/fetch'
import MovieList from '../../components/MovieList/MovieList';

export default function HomePage() {
    const id = useId()
    const [trends, setTrends] = useState([])
    const [error, setError] = useState(false)
    const [period, setPeriod] = useState(() => {
        const period = localStorage.getItem('period')
        if (period) return period
        return 'day'
    })

    useEffect(() => {
        async function getTrendFilms() {
            try {
                setError(false)
                setTrends([])
                const data = await fetchTrends(period)
                setTrends(data.data.results)
            } catch {
                setError(true)
            }

        }
        getTrendFilms()
    }, [period])

    const delay = 600000

    function changeHandler(event) {
        setPeriod(event.target.value)
        localStorage.setItem('period', event.target.value)
        setTimeout(() => localStorage.removeItem('period'), delay)
    }

    return (
        <div>
            <h1 className={css.title}>Trending today</h1>
            {!error ? <MovieList data={trends}></MovieList> : <p>Щось пішло не так, перезавантажте сторінку.</p>}
        </div>
    )
}