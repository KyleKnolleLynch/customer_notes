import { Link } from 'react-router-dom'

const Public = () => {
  const content = (
    <section className='public'>
      <header>
        <h1>
          Welcome to <span className='nowrap'>Tuner Tire Shop!</span>
        </h1>
      </header>
      <main className='public__main'>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum,
          repellat accusantium quibusdam aliquam ut culpa.
        </p>
        <address className='public__addr'>
          Tuner Tire Shop
          <br />
          123 Foo Drive
          <br />
          San Foobar, TX 12345
          <br />
          <a href='tel:+15555555555'>(555) 555-5555</a>
        </address>
        <br />
        <p>Owner: Sarah Connor</p>
      </main>
      <footer>
        <Link to='/login'>Employee Login</Link>
      </footer>
    </section>
  )
  return content
}
export default Public
