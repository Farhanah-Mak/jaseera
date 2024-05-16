import Image from "next/image"
import './ButtonStyles.css'

// const Button = ({type, title, icon}) => {
//   return (
//       <button type={type} className='button'>
//       {icon &&
//         <Image src={icon} width={24} height={24} alt={title} />}
//       <label className="label">
//         {title}
//       </label> 
//       </button>
//   )
// }

// export default Button

const Button = (type, label, icon) => {
  return (
    <>
      <button type={type} className="button">
        {icon && <Image src={icon} width={24} height={24} alt={icon} />}
        <label className="label">
          {label}
        </label>
      </button>
    </>
  )
}

export default Button