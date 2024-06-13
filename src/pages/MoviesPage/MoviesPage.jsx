import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchByName } from '../../fetch/fetch'
import SearchBar from '../../components/SearchBar/SearchBar'
import MovieList from '../../components/MovieList/MovieList'
import Loading from '../../components/Loading/Loading'
import css from './MoviesPage.module.css'

export default function MoviePage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const mainParam = searchParams.get('qwery')
  const [films, setFilms] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [noFilm, setNoFilm] = useState(false)
  const [keyWord, setKeyWord] = useState(() => { if (mainParam) { return mainParam } return '' })

  useEffect(() => {
    async function getInfo() {
      if (keyWord) {
        try {
          setLoading(true)
          setFilms([])
          setError(false)
          const data = await fetchByName(keyWord)
          setFilms(data.data.results)
          data.data.results.length === 0 && setNoFilm(true)
          setLoading(false)
        } catch (error) {
          setError(true)
          setLoading(false)
        }
      }
    }
    getInfo()
  }, [keyWord])


  function submitHandler(data) {
    setKeyWord(data.search.trim())
    setSearchParams({ qwery: data.search.trim() })
  }

  return (
    <div>
      <SearchBar onSubmit={submitHandler}></SearchBar>
      {loading && <Loading></Loading>}
      {!error && <MovieList data={films}></MovieList>}
      {(noFilm) && <p className={css.noFilm}>Ми не знайшли такого фільма.</p>}
    </div>
  )
}