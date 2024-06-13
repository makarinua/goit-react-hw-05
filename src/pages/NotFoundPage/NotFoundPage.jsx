import css from './NotFoundPage.module.css'

export default function NotFoundPage() {
  return (
    <>
      <h1 className={css.title}>Вказаної Вами сторінки не існує. Перейдіть на <Link to="/">говну сторінку сайту</Link>!</h1>
    </>
  )
}