// Renders a heading whose words animate individually on scroll.
// Words are real text nodes, so screen readers and SEO see a normal heading.
//   default: words rise out of a mask    lit: words fade from dim to bright
export default function SplitHeading({ as: Tag = 'h2', text, className = '', style, lit = false }) {
  const words = text.split(' ')

  if (lit) {
    return (
      <Tag className={className} style={style} data-reveal="lit">
        {words.map((word, i) => (
          <span key={i} data-lit className="inline-block">
            {word}
            {'\u00A0'}
          </span>
        ))}
      </Tag>
    )
  }

  return (
    <Tag className={className} style={style} data-reveal="words">
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom pb-[0.08em] -mb-[0.08em]">
          <span data-word className="inline-block will-change-transform">
            {word}
            {'\u00A0'}
          </span>
        </span>
      ))}
    </Tag>
  )
}
