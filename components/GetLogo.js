// clearbit web api to get logo URLs from company URLs
//
// better to run tabletop post-process?
// - update; can't get postProcess hook to apply to loaded table elements
// - https://github.com/jsoma/tabletop#postprocess

// Node core 'url' package - Legacy API mode
const url = require('url');

const getlogo = (path = '') => {
  // return path === '' ?
  //   '/static/logo_128x128.png' :
  //   'http://logo.clearbit.com/' + url.parse(path).host
  return 'http://logo.clearbit.com/' + url.parse(path).host
}

// lol
// const loadDefaultImg = (e) => e.target.src = 'http://www.fillmurray.com/128/128'
const hideMissingImg = (e) => {
  e.target.style = 'display: none';
  e.target.onload = (e) => e.target.style = 'display: inherit';
}

export default ({ path }) => (

  <img src={getlogo(path)} className="db w-100" onError={hideMissingImg} />

)
