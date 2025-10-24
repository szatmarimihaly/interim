import React from 'react'

type Props = {
  p1 : string
  p2 : string
  p3 : string
}

const TextSection = ({ p1, p2, p3 } : Props) => {
  return (
    <article className='flex flex-col items-center gap-10 mb-20 p-4'>
        <p className="flood-text">
          {p1}
        </p>
        <p className="flood-text">
          {p2}
        </p>
        <p className="flood-text">
          {p3}
        </p>
    </article>
  )
}

export default TextSection