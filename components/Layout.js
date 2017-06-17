import Link from 'next/link'
import Header from './Header'

export default ({ children, title = 'This is the default title' }) => (

  <main className="cover">

    <style jsx>{`
      main {
        background: url(/static/dark-stars.jpg) no-repeat center fixed;
        padding-top: 76px;
      }
    `}</style>

    <Header />

    { children }

  </main>

)
