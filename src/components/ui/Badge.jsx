const Badge = ({ children, variant = "default", className = "" }) => {
  const baseStyles = "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-colors"

  const variants = {
    default: "bg-amber-400/10 text-amber-400 border border-amber-400/20",
    secondary: "bg-slate-700 text-slate-300 hover:bg-slate-600",
    outline: "border border-amber-400 text-amber-400 bg-transparent hover:bg-amber-400 hover:text-slate-950",
  }

  return <span className={`${baseStyles} ${variants[variant]} ${className}`}>{children}</span>
}

export default Badge
