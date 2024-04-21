const Button = ({onClick, text}) => {
    const renderButton = () => (
      <button className="border-b-4 bg-violet-800 h-12" onClick={onClick}>
          {text}
      </button>
    )
    return renderButton();
  }
  
  export default Button