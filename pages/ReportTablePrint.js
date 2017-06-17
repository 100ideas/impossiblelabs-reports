import TabletopMockData from '../components/MockTable'
import Link from 'next/link'
import Header from '../components/Header'

export default ({sheet = TabletopMockData}) => (

  <div className="center" id="main">

    {/* @page directive is hacky way to disable the header/footer chrome inserts in print view */}
    <style global jsx>{`
      @media print {
        @page { margin: 0; size: letter portrait; }
        body  { margin: 1cm; }
        html {
          font-size: 0.8em;
        }
        #main {
          width: 100%;
        }
        #subtitle {
          -webkit-print-color-adjust: exact;
          background: black;
          color: white;
        }
        header {
          display: none;
        }
        #print {
          height: 100%;
          background-color: white;
        }
        #print article {
          page-break-inside: avoid;
        }
        .noprint {
          display: none;
        }
      }
      @media screen {
        #main {
          max-width: 64em;
          padding-top: 76px;
        }
        header {
          background: black !important;
        }
        #subtitle {
          color: black;
        }
        #subtitle img {
          display: none;
        }
        #print {
          margin: 0rem;
        }
      }
    `}</style>

    <Header />

    <section className="pv3 w-100 flex flex-row items-center content-center justify-center" id="subtitle">
      <img className="dib w-25 flex-none onlyprint" src='/static/logo.png' alt='impossible labs' />
      <h1 className="dib flex-none mb0 f1 fw9 b lh-solid tracked-tight sans-serif ttu">Project 2050 Report</h1>
    </section>

    <Link href="/" className="noprint">
      <h2 className="noprint mv2 tc db link bg-animate hover-dark-red pointer sans-serif f5 fw3 tracked white">switch back to screen layout</h2>
    </Link>

    <section className="cf" id="print">

      {sheet.map((row, index) =>
        <article className="fl w-100 pv4 o-100 dt avenir bt b--black" key={index}>

          <div className="dtc w-10">
            {row.logo != '' &&
              <img src={row.logo} alt={`${row.name} logo`} className="db w-100"/>
            }
          </div>

          <div className="dtc v-top pl3 black w-90">

            <div className="v-top dib mb1 w-100 relative">
              <h1 className="dib f4 fw6 lh-title mv0 ttu tracked">{row.name}</h1>
              <h2 className="absolute top-0 right-0 tr flr f6 fw4 mt2 mb0 underline">{row.url}</h2>
              {/* <h2 className="dib f6 black underline pl3">{row.url}</h2> */}
            </div>

            <div className="dib v-top mb3 pl0 black w-30">
              <h2 className="f6 fw4 mv1 lh-copy i">{row.location}</h2>
              <h2 className="f6 fw4 mv1 lh-copy">{row.tags}</h2>
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
