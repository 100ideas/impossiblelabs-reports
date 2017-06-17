import Link from 'next/link'

export default ({sheet}) => (

  <div className="center mw8-ns">

    <section className="pt3 w-100 center">
      <h1 className="tc white f1 fw9 b lh-solid tracked-tight sans-serif ttu">Project 2050 Report</h1>
      <Link href="/ReportTablePrint">
        <h2 className="mv2 tc db link bg-animate hover-dark-red pointer sans-serif f5 fw3 tracked silver">switch to print layout</h2>
      </Link>
    </section>

    <section className="ph4 bg-black o-80 mh5-ns cf print">

      {sheet.map((row, index) =>
        <article className="fl w-100 pv4 o-100 dt-ns dt--fixed-ns avenir bb b--white-10 print" key={index}>

          <div className="dtc w-10">
            {row.logo != '' &&
              <a href={row.url} className="grow db">
                <img src={row.logo} alt={`${row.name} logo`} className="db w-100"/>
              </a>
            }
          </div>

          <div className="dtc v-top pl3 pl4-ns white w-90">

            <div className="v-top dib mb1 w-100">
              <a href={row.url} className="link blue hover-red">
                <h1 className="f4 fw6 lh-title mv0 ttu tracked">{row.name}</h1>
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
