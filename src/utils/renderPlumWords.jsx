const DEFAULT_PLUM_WORD_PATTERN =
  /(zdravje|zdravja|prihodnost|prihodnosti|partnerji|partnerstvo|partnerstva|skupaj|skupnosti|skupnost|ambasadorji|vizija)/i

export default function renderPlumWords(text, pattern = DEFAULT_PLUM_WORD_PATTERN) {
  if (typeof text !== 'string' || text.length === 0) {
    return text
  }

  const baseFlags = pattern.flags.replace(/g/g, '')
  const globalRegex = new RegExp(pattern.source, `${baseFlags}g`)
  const output = []
  let cursor = 0
  let keyIndex = 0

  for (const match of text.matchAll(globalRegex)) {
    const start = match.index ?? 0
    const end = start + match[0].length

    if (start > cursor) {
      output.push(<span key={`text-${keyIndex++}`}>{text.slice(cursor, start)}</span>)
    }

    output.push(
      <span className="plum-word-bold" key={`plum-${keyIndex++}`}>
        {match[0]}
      </span>,
    )

    cursor = end
  }

  if (cursor < text.length) {
    output.push(<span key={`text-${keyIndex++}`}>{text.slice(cursor)}</span>)
  }

  return output.length ? output : text
}
