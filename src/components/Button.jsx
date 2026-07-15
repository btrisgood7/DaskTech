/**
 * Botón reutilizable con tres variantes (primary / secondary / ghost) y
 * soporte para renderizarse como <a> o <button>. Estilo del tema claro:
 * primario en navy sólido — limpio y confiado, sin glows pesados.
 */
export default function Button({
  as = 'a',
  variant = 'primary',
  href,
  onClick,
  children,
  className = '',
  icon: Icon,
  ...rest
}) {
  const base =
    'group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white'

  const variants = {
    primary:
      'bg-navy-900 text-white shadow-soft hover:-translate-y-0.5 hover:bg-navy-800 hover:shadow-lift focus-visible:ring-navy-900',
    secondary:
      'border border-navy-900/15 bg-white text-navy-900 hover:-translate-y-0.5 hover:border-emerald-brand hover:shadow-soft focus-visible:ring-navy-900/40',
    ghost: 'text-navy-900 hover:text-navy-900/60 focus-visible:ring-navy-900/40',
  }

  const classes = `${base} ${variants[variant]} ${className}`
  const content = (
    <>
      {children}
      {Icon && (
        <Icon
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      )}
    </>
  )

  if (as === 'button') {
    return (
      <button type="button" onClick={onClick} className={classes} {...rest}>
        {content}
      </button>
    )
  }

  return (
    <a href={href} onClick={onClick} className={classes} {...rest}>
      {content}
    </a>
  )
}
