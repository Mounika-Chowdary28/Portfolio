export const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`bg-slate-800 border border-slate-700 rounded-xl shadow-xl hover:border-amber-400/50 hover:shadow-2xl transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  )
}

export const CardContent = ({ children, className = "" }) => {
  return <div className={className}>{children}</div>
}
