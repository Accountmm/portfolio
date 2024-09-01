import React from 'react'
import { BentoGrid, BentoGridItem } from './Ui/BondoGrid';
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section id='about'>
      <BentoGrid>
        {
          gridItems.map(({ className, description, id, img, imgClassName, spareImg, title, titleClassName, }) => (
            <BentoGridItem
              key={id}
              title={title}
              description={description}
              className={className}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
              id={id}
            />
          ))
        }
      </BentoGrid>
    </section>
  )
}

export default Grid