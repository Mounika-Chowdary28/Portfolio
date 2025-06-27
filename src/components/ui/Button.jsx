const Button = ({ variant = "default", size = "md", className = "", children, ...props }) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-slate-950 disabled:opacity-50 disabled:cursor-not-allowed"

  const variants = {
    default:
      "bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-slate-950 shadow-lg hover:shadow-xl transform hover:scale-105",
    outline: "border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-950 bg-transparent",
    ghost: "text-amber-400 hover:bg-amber-400/10 hover:text-amber-300",
  }

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-8 py-3 text-lg",
    icon: "p-2 w-10 h-10",
  }

  return (
    <button className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  )
}

export default Button
