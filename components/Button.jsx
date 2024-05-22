"useClient";

const Button = ({ title, styles, handleClick }) => {
  return (
    <button type={"button"}
      className={`${styles} + button`}
      onClick={handleClick}
            >
            {title}</button>
  )
}
export default Button
