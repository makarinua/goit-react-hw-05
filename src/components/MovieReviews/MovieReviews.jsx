import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchReviews } from '../../fetch/fetch'
import Review from "../Review/Review";
import Error from "../Error/Error";
import css from './MovieReviews.module.css'

export default function ReviewList() {

  const { movieId } = useParams()
  const [reviews, setReviews] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    async function getReviews() {

      if (movieId) {
        try {
          setReviews([])
          setError(false)
          const data = await fetchReviews(movieId)
          setReviews(data.data.results)
        } catch (error) { setError(true) }
      }


    }
    getReviews()
  }, [movieId])

  return (
    <>
      {!error ? (reviews.length !== 0 ? (
        <ul className={css.list}>
          {reviews.map(item => <li key={item.id}><Review data={item}></Review></li>)}
        </ul>
      ) : <p>Відгуків немає</p>) : <Error></Error>}
    </>
  )
}