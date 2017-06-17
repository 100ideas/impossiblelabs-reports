// import Tabletop from 'tabletop';
import TabletopMockData from '../components/MockTable'
import ReportTable from '../components/ReportTable'

const Index = (props) => (
  <main className="cover">

    <style jsx>{`
      main {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        @media screen {
          background: url(/static/dark-stars.jpg) no-repeat center fixed;
        }
      }
    `}</style>

    <section className="pv2 tc">
      <img className="dib v-mid" src='/static/logo.png' alt='impossible labs' />
      <h1 className="dib v-mid avenir fw2 blue">FUCKING SHIP IT</h1>
    </section>
    <ReportTable sheet={props.sheet}/>

  </main>
)

Index.getInitialProps = async function() {

  // var table;
  // Tabletop.init({
  //   key: '1cV3TS_3zZMfydUjCLUnRpMfo7GnN0Zc6iCPeibYTbDE',
  //   callback: function(data, tabletop) {
  //     table = data;
  //   },
  //   simpleSheet: true
  // });
  //
  // const res = await fetch('https://hook.io/100ideas/fakerjs-storyprinter?numstories=6')
  // const data = await res.json()
  //
  // console.log(`tabletop fetched ${data.length} rows`)

  return {
    // sheet: data
    sheet: TabletopMockData
  }
}

export default Index
