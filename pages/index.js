// import Tabletop from 'tabletop';
import Layout from '../components/Layout'
import TabletopMockData from '../components/MockTable'
import ReportTable from '../components/ReportTable'

const Index = (props) => (
  <Layout>

    <ReportTable sheet={props.sheet}/>

  </Layout>
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
