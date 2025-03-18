import Banner from './components/Banner'
import Categories from './components/Categories'
import Sale from './components/Sale'

export default function Home() {
  return (
    <section>
      <div>
        <Banner />
        <Categories />
        <Sale />
      </div>
    </section>
  )
}
