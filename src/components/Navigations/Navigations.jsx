import { NavLink } from "react-router-dom";
import clsx from 'clsx';
import css from './Navigations.module.css'

const getLinkClass = ({ isActive }) => {
  return clsx(css.btn, isActive && css.active);
};

export default function Navigations() {

  return (
    <nav className={css.mainNav} >
      <NavLink className={getLinkClass} to='/'>Home</NavLink>
      <NavLink className={getLinkClass} to='/movies'>Movies</NavLink>
    </nav>
  )
}