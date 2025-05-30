import styles from "./Button.module.css";

const Button = ({title}) => {
  return (
    <button className="btn">{title}</button>
  )
}

export default Button;