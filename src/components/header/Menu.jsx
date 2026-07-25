import { Link } from "react-router";
import styled from "./Menu.module.css";

function Menu({title, subtitle}) {
  return (
    <header className={styled.header}>
        <ul>
            <li className={styled.titleStyle}>{title}</li>
            {
                subtitle?.map(value => (
                    <li key={value.id}><Link to={value.link}>{value.text}</Link></li>
                ))
            }
        </ul>
    </header>
  );
}

export default Menu;