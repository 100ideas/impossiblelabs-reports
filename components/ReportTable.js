



export default ({sheet}) => (

  <section className="pa4 bg-black o-70 center" style={{ width: '980px' }}>

    {/* <pre className="white">
      {JSON.stringify(sheet)}
    </pre> */}

    {sheet.map((row, index) =>
      <div className="fl w-100" key={index}>

        <div className="fl w-10 pa2">
          <img src={row.logo} alt={`${row.name} logo`} />
        </div>

        <div className="fl w-90 pa2 white">
          <a href={row.url}>
            <h1 className="dib v-top avenir fw2 blue">{row.name}</h1>
          </a>
          <p>{row.location}</p>
          <p>{row.tags}</p>
          <p>{row.description}</p>
        </div>

      </div>
    )}

  </section>

)
