import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchActors } from '../../fetch/fetch'
import Actor from "../Actor/Actor";
import Error from "../Error/Error";
import css from './MovieCast.module.css'

export default function MovieCast() {

  const { movieId } = useParams()
  const [fullCast, setFullCast] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {

    async function getCast() {
      if (movieId) {
        try {
          setFullCast([])
          setError(false)
          const data = await fetchActors(movieId)
          setFullCast(data.data.cast)
        } catch (error) { setError(true) }
      }

    }
    getCast()
  }, [movieId])

  return (
    <>
      {!error ? (
        <ul className={css.castList}>
          {fullCast.map(item => (<li key={item.id}><Actor data={item}></Actor></li>))}
        </ul>
      ) : <Error></Error>}
    </>
  )
}