import Image from 'next/image'

import Style from './Style'
import OurMedical from './OurMedical'
import Service from './Service'
import Doctor from './Doctor'
import Offer from './Offer'
import Appointment from './Appointment'
import CarouselComponent from './Components/Carosel'
import Footer from './Footer'
import Lookingfor from './Lookingfor'


export default function Home() {
  return (
    <main className="">
<CarouselComponent></CarouselComponent>
      <OurMedical></OurMedical>
  <Service></Service>
  <Lookingfor></Lookingfor>
  <Doctor></Doctor>
  <Offer></Offer>
<Appointment></Appointment>
<Footer></Footer>
    </main>
  )
}
