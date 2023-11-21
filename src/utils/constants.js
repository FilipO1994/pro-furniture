import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text:
      'Our goal  is to provide high-quality, innovative, and stylish furniture solutions that enhance the functionality and aesthetics of living spaces, creating a comfortable and inspiring environment for customers.',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text:
      'Pro furniture envisions becoming a leading industry innovator, consistently pushing the boundaries of design and functionality, while maintaining a commitment to sustainability and customer satisfaction',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text:
      'Our company was founded in 1995 by visionary artisans, embarked on a journey steeped in passion and commitment to redefine the furniture landscape.',
  },
]

// https://api.airtable.com/v0/apphoHAKiAVSHZClG/products'

export const products_url = '/.netlify/functions/products'

// export const single_product_url = `https://course-api.com/react-store-single-product?id=`
export const single_product_url = `/.netlify/functions/single-product?id=`


