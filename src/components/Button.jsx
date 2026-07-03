/**
 * Botón reutilizable con dos variantes (primary / secondary) y soporte
 * para renderizarse como <a> o <button>. Incluye estados hover/focus
 * accesibles.
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
    'group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950'

  const variants = {
    primary:
      'bg-brand-gradient text-navy-950 shadow-glow hover:shadow-glow-gold hover:-translate-y-0.5 focus-visible:ring-emerald-brand',
    secondary:
      'border border-white/15 bg-white/5 text-white backdrop-blur hover:border-emerald-brand/60 hover:bg-white/10 hover:-translate-y-0.5 focus-visible:ring-white/60',
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
