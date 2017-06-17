
<article class="mt2">
    <a class="link dt w-100 bb b--black-10 dim blue" href="#0">
      <div class="dtc w3">
        <img src="http://mrmrs.github.io/images/0010.jpg" class="db w-100"/>
      </div>
      <div class="dtc v-top pl2">
        <h1 class="f6 f5-ns fw6 lh-title black mv0">A History of Visual Communication (Geschichte der visuellen Kommunikation)</h1>
        <h2 class="f6 fw4 mt2 mb0 black-60">Josef Müller-Brockmann</h2>
        <dl class="mt2 f6">
          <dt class="clip">Price</dt>
          <dd class="ml0">$15.00</dd>
        </dl>
      </div>
    </a>
  </article>


export default ({sheet}) => (

  <div className="center mw8-ns">
    <section className="ph4 bg-black o-80 mh5-ns cf">

      {sheet.map((row, index) =>
        <article className="fl w-100 pv4 o-100 dt-ns dt--fixed-ns avenir bb b--white-10" key={index}>

          <div className="dtc w-10">
            {row.logo != '' &&
              <img src={row.logo} alt={`${row.name} logo`} className="db w-100"/>
            }
          </div>

          <div className="dtc v-top pl3 pl4-ns white w-90">

            <div className="v-top dib mb1 w-100">
              <a href={row.url} className="link">
                {/* <h1 className="dib v-top avenir fw2 blue">{row.name}</h1> */}
                <h1 className="f4 fw6 lh-title blue mv0 ttu tracked">{row.name}</h1>
              </a>
            </div>

            <div className="dib v-top mb3 pl0 white w-100 w-30-ns">
              <h2 className="f6 fw4 mt2 mb0">{row.location}</h2>
              <h2 className="f6 fw4 mt2 mb0">{row.tags}</h2>
            </div>

            <div className="dib pt1 pl2-ns white w-100 w-70-ns f5 fw4 measure-wide-ns lh-copy" style={{textAlign: 'justify'}}>
              {row.description}
            </div>

          </div>

        </article>
      )}

    </section>
</div>

)
