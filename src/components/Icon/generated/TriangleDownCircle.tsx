import React from 'react'

function SvgTriangleDownCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 12c0 4.411 3.59 8 8 8 4.411 0 8-3.589 8-8 0-4.41-3.589-8-8-8-4.41 0-8 3.59-8 8zm-2 0C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm5.852-2h8.72a.3.3 0 01.23.492l-4.36 5.231a.3.3 0 01-.46 0l-4.36-5.23a.3.3 0 01.23-.493z"
      />
    </svg>
  )
}

export default SvgTriangleDownCircle
