import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navigations from "./components/Navigations/Navigations";

const HomePage = lazy(() => import('./pages/HomePage/HomePage'))
const MoviePage = lazy(() => import('./pages/MoviesPage/MoviesPage'))
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage/MovieDetailsPage'))
const MovieCast = lazy(() => import('./components/MovieCast/MovieCast'))
const MovieReviews = lazy(() => import('./components/MovieReviews/MovieReviews'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'))
const Loading = lazy(() => import('./components/Loading/Loading'))

export default function App() {
  return (
    <div>
      {<Navigations></Navigations>}
      <Suspense fallback={<Loading></Loading>}>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/movies' element={<MoviePage></MoviePage>}></Route>
          <Route path='/movies/:movieId' element={<MovieDetailsPage></MovieDetailsPage>}>
            <Route path='cast' element={<MovieCast></MovieCast>}></Route>
            <Route path='reviews' element={<MovieReviews></MovieReviews>}></Route>
          </Route>
          <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
        </Routes>
      </Suspense>
    </div>
  )
}