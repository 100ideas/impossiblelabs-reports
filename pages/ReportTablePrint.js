import TabletopMockData from '../components/MockTable'

export default ({sheet = TabletopMockData}) => (

  <div className="center w-100">

    <style jsx>{`
      body {
        text-size-adjust: 75%;
        line-height: 0.8em;
        font-size: 0.75em;
        height: 100%;
        background-color: white;
      };
    `}</style>

    <section className="ph4 mh5-ns cf">

      {sheet.map((row, index) =>
        <article className="fl w-100 pv4 o-100 dt avenir bb b--black" key={index}>

          <div className="dtc w-10">
            {row.logo != '' &&
              <img src={row.logo} alt={`${row.name} logo`} className="db w-100"/>
            }
          </div>

          <div className="dtc v-top pl3 pl4-ns black w-90">

            <div className="v-top dib mb1 w-100 relative">
              <h1 className="dib f4 fw6 lh-title mv0 ttu tracked">{row.name}</h1>
              <h2 className="absolute top-0 right-0 tr flr f6 fw4 mt2 mb0 underline">{row.url}</h2>
              {/* <h2 className="dib f6 black underline pl3">{row.url}</h2> */}
            </div>

            <div className="dib v-top mb3 pl0 black w-30">
              <h2 className="f6 fw4 mt2 mb0">{row.location}</h2>
              <h2 className="f6 fw4 mt2 mb0">{row.tags}</h2>
            </div>

            <div className="dib pt1 pl3 black w-70 f5 fw4 lh-copy" style={{textAlign: 'justify'}}>
              {row.description}
            </div>

          </div>

        </article>
      )}

    </section>
</div>

)
