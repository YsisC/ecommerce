import path from 'path'
import { FC } from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

interface Props {
  images: String[]
}
const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px'
}

export const ProductSlideshow: FC<Props> = ({ images }) => {
  return (
    <div className="slide-container">
    <Slide
      easing='ease'
      duration={7000}
      indicators>

      {
        images.map(image => {
          const url = `/products/${image}`
          return (
            <div className='??' key={image}>
              <div style={{...divStyle,
                backgroundImage: `url( ${url})`,
              
              }}>

              </div>
            </div>
          )
        })
      }
    </Slide>
    </div>
  )
}
