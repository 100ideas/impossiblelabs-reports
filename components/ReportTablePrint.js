import Link from 'next/link'
import Header from '../components/Header'
import GetLogo from '../components/GetLogo'

const ReportTablePrint = ({props, viewStateToggler}) => (

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
        #subtitle h1 {
          font-size: 3rem;
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
          padding-bottom: 0 !important;
        }
        #subtitle img {
          display: none;
        }
        screen and (min-width: 34em) {
          #subtitle h1 {
            font-size: 3rem;
          }
        }
        screen and (max-width: 34em) {
          #subtitle h1 {
            font-size: 1.5rem;
          }
        }
        #print {
          margin: 0rem;
        }
      }
    `}</style>

    <Header />

    <section className="pv3 w-100 flex flex-row items-center content-center justify-center" id="subtitle">
      <img className="dib w-25 flex-none onlyprint" src='/static/logo.png' alt='impossible labs' />
      <h1 className="dib flex-none mv2 v-mid f1-ns fw9 b lh-solid tracked-tight sans-serif ttu">Project 2050 Report</h1>
    </section>

      <h2 className="noprint mv2 tc db link bg-animate hover-dark-red pointer sans-serif f5 fw3 tracked light-silver"
        onClick={(e)=>{viewStateToggler()}}>
          switch back to screen layout
      </h2>

    <section className="cf" id="print">

      {props.sheet.map((row, index) =>
        <article className="fl w-100 pv4 o-100 dt avenir bt b--black" key={index}>

          <div className="dtc pt1 w-10">
            <GetLogo path={row.Url}/>
          </div>

          <div className="dtc v-top pl3 black w-90">

            <div className="v-top dib mb1 w-100 relative">
              <h1 className="dib f4 fw6 lh-title mv0 ttu tracked">{row.Name}</h1>
              <h2 className="absolute-ns top-0-ns right-0-ns tr-ns tl flr f6 fw4 mt2 mb0 underline">{row.Url}</h2>
            </div>

            <div className="dib v-top mb3 pl0 black w-30">
              <h2 className="f6 fw4 mv1 lh-copy i">{row.Location}</h2>
              <h2 className="f6 fw4 mv1 lh-copy">{row.Type}</h2>
              <h2 className="f6 fw4 mv1 lh-copy">{row.Domain}</h2>
            </div>

            <div className="dib pt1 pl3 pr0-ns pr2 black w-70 f5-ns f6 fw4 lh-copy" style={{textAlign: 'justify'}}>
              {row.Description}
            </div>

          </div>

        </article>
      )}

    </section>
  </div>
)

export default ReportTablePrint
