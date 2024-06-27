"useClient";

const Button = ({ title, styles, handleClick, data }) => {
  return (
    <button type="button"
            className={`${styles} + button`}
            onClick={handleClick}
            data-text={data}
            >
            {title}</button>
  )
}
export default Button
