'use client'
import Photo1 from '@/assets/photo1.jpeg'
import Photo2 from '@/assets/photo2.jpeg'
import Photo3 from '@/assets/photo3.jpeg'
import Image from 'next/image'
import { Fade, Slide } from 'react-awesome-reveal'

const CardsData = [
  {
    id: 1,
    img: Photo1,
    title: 'Sunset',
    desc: 'Each character will appear one by one',
  },
  {
    id: 2,
    img: Photo2,
    title: 'Dog',
    desc: 'Each character will appear one by one',
  },
  {
    id: 3,
    img: Photo3,
    title: 'Sunrise',
    desc: 'Each character will appear one by one',
  },
]

function AnimatedCard() {
  return (
    <div className='container  mx-auto'>
      <h1 className='text-center text-white font-bold text-3xl mb-14 mt-5 sm:mt-0'>
        Responsive Animated Card
      </h1>

      <main className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-6'>
        {CardsData.map((card) => (
          <div
            key={card.id}
            className=' text-white shadow-md rounded-lg overflow-hidden px-4 sm:px-0 relative group'
          >
            <Image
              src={card.img}
              alt='card-img'
              className='w-full max-w-[300px] sm:h-[350px] '
            />
            <div className='absolute left-0 top-[-100%] opacity-0 group-hover:opacity-100 group-hover:top-0 p-4 w-full h-full bg-black/60 group-hover:backdrop-blur-sm divide-neutral-500 duration-500'>
              <div className='space-y-4'>
                <Slide cascade>
                  <h3 className='text-3xl font-semibold'>{card.title}</h3>
                  <Fade cascade damping={0.05} className='text-sm'>
                    {card.desc}
                  </Fade>
                  <div>
                    <button className='border border-white px-4 py-1 text-sm rounded-lg hover:bg-black/40 duration-200'>
                      View
                    </button>
                  </div>
                </Slide>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  )
}

export default AnimatedCard
