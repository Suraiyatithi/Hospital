import Image from 'next/image'
import CarouselComponent from './Components/Carosel'
import Style from './Style'
import OurMedical from './OurMedical'
import Service from './Service'
import Doctor from './Doctor'

export default function Home() {
  return (
    <main className="">
     
      <CarouselComponent></CarouselComponent>
      <OurMedical></OurMedical>
  <Service></Service>
  <Doctor></Doctor>

    </main>
  )
}
