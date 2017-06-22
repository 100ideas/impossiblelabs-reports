import React from 'react'
var Tabletop = require('tabletop');
import TabletopMockData from '../components/MockTable'
import Layout from '../components/Layout'
import ReportTable from '../components/ReportTable'
import ReportTablePrint from '../components/ReportTablePrint'

export default class extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { sheet: TabletopMockData, printView: false };
    this.state = { sheet: [], printView: false };
  }

  viewStateToggler = (value, e) => {
    console.log(e, value);
    this.setState((prevState, props) => ({
      printView: !prevState.printView
    }));
  };

  componentDidMount() {
    // this.setState({sheet: TabletopMockData});

    // Expected column names:
      // Active: "N"
      // City: ""
      // Contact Name: "NA"
      // Description: "fooobar"
      // Domain: "Research Consortium"
      // Last Updated: "5/30/17"
      // Name: "Carbon Disclosure Project"
      // State or Country: "CA"
      // Timestamp: "5/30/17"
      // Type: "Knowledge Generator"
      // URL: "http:/www.cdp.net/en"

    Tabletop.init({
      debug: 'true',
      // key: '1cV3TS_3zZMfydUjCLUnRpMfo7GnN0Zc6iCPeibYTbDE',   // mock data
      key: '1JBk_BOSJjym3PWzrsgyylFrvAU5zeRLigyqkfFFif94',      // real data
      orderby: 'name',
      simpleSheet: true,
      callback: function(data, tabletop) {
        this.setState({sheet: data});
      }.bind(this)
    });
  }

  render() {

    return (
      <div>
        {this.state.printView ? (
          <ReportTablePrint props={this.state} viewStateToggler={this.viewStateToggler} />
        ) : (
          <Layout> <ReportTable props={this.state} viewStateToggler={this.viewStateToggler}/> </Layout>
        )}
      </div>
    )

  }
}
