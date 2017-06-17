export default () => (

  <header className="sans-serif">

  <style jsx>{`
    header {
      width: 100%;
      height: 76px;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 100;
      background: rgba(3, 53, 132, .5);
    }
    #logo {
      margin: 20px;
      float: left;
      width: 200px;
      height: 40px;
      background: url(/static/logo.png) no-repeat center;
      display: block;
    }
    nav {
      float: right;
      padding: 20px;
    }
    nav ul {
      margin-top: 0;
      margin-bottom: 10px;
      list-style: none;
    }
    nav ul li {
        display: inline-block;
        float: left;
        padding: 10px;
    }
    nav a {
      color: white;
      text-decoration: none;
      font-weight: bold;
      transition: all 200ms ease-in;
      font-size: 14px;
      font-family: 'Lato' , Helvetica, Arial, sans-serif;
      line-height: 20px;
      transition: all 200ms ease-in;
    }
    nav a:hover {
      color: grey;
      text-decoration: none;
    }
  `}</style>

    <a href="/" className="grow" id="logo"></a>

    <nav>
      <ul className="">
        <li><a href="/">HOME</a></li>
        <li><a href="http://impossiblelabs.io/manifesto">MANIFESTO</a></li>
        <li><a href="http://impossiblelabs.io/team">TEAM</a></li>
        <li><a href="https://medium.com/impossible-labs" target="_blank">BLOG</a></li>
      </ul>
    </nav>

  </header>
)
