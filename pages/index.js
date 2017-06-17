import React from 'react'
var Tabletop = require('tabletop');
import TabletopMockData from '../components/MockTable'
import Layout from '../components/Layout'
import ReportTable from '../components/ReportTable'

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sheet: [] };
  }

  componentDidMount() {
    this.setState({sheet: TabletopMockData});

    Tabletop.init({
      debug: 'true',
      key: '1cV3TS_3zZMfydUjCLUnRpMfo7GnN0Zc6iCPeibYTbDE',
      callback: function(data, tabletop) {
        this.setState({sheet: data});
        console.dir(data);
      }.bind(this),
      simpleSheet: true
    });
  }

  render() {
    // return <div>{JSON.stringify(this.state.sheet)}</div>
    return <Layout> <ReportTable sheet={this.state.sheet}/> </Layout>
    // return <Layout> {JSON.stringify(this.state.sheet)} </Layout>
  }
}
