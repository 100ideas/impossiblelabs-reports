import React from 'react'
var Tabletop = require('tabletop');
import TabletopMockData from '../components/MockTable'
import Layout from '../components/Layout'
import ReportTable from '../components/ReportTable'
import ReportTablePrint from '../components/ReportTablePrint'

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sheet: [], printView: false };
  }

  viewStateToggler = (value, e) => {
    console.log(e, value);
    this.setState((prevState, props) => ({
      printView: !prevState.printView
    }));
  };

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

    return (
      <div>
        {this.state.printView ? (
          <ReportTablePrint props={this.state} viewStateToggler={this.viewStateToggler} />
        ) : (
          <Layout> <ReportTable props={this.state} viewStateToggler={this.viewStateToggler}/> </Layout>
        )}
      </div>
    )
    // return <Layout> {JSON.stringify(this.state.sheet)} </Layout>
  }
}
