import { ImageResponse } from 'next/og'
 
// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/svg+xml'
 
// Executed when generating the icon
export default function Icon() {
  return new ImageResponse(
    (
      // Navbar-er SVG concept-ti akhane choto version e dewa hoyeche
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
        <g stroke="url(#faviconGrad)" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <path d="M 40,150 L 40,60 L 85,110 L 130,60" />
          <path d="M 130,60 L 130,150 M 130,105 L 170,105 M 170,60 L 170,150" />
        </g>
        {/* Gradients code */}
        <defs>
          <linearGradient id="faviconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#A855F7" />
          </linearGradient>
        </defs>
      </svg>
    ),
    // ImageResponse options
    {
      ...size,
    }
  )
}