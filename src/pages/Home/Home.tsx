import Banner from './components/Banner'
import Categories from './components/Categories'

export default function Home() {
  return (
    <section>
      <div className='container'>
        <Banner />
        <Categories />
      </div>
    </section>
  )
}
