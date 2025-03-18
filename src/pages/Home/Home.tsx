import Banner from './components/Banner'
import Categories from './components/Categories'
import Historys from './components/Historys/Historys'
import Sale from './components/Sale'
import Suggestions from './components/Suggestions/Suggestions'

export default function Home() {
  return (
    <section>
      <div>
        <Banner />
        <Categories />
        <Sale />
        <Suggestions />
        <Historys />
      </div>
    </section>
  )
}
