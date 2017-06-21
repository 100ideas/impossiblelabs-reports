// Node core 'url' package - Legacy API mode
const url = require('url');

const getlogo = (path = '') => {
  return path === '' ?
    '/static/logo_128x128.png' :
    'http://logo.clearbit.com/' + url.parse(path).host
}

// const loadDefaultImg = (e) => e.target.src = 'http://www.fillmurray.com/128/128'
const loadDefaultImg = (e) => e.target.style = 'display: none'

export default ({ path }) => (

  <img src={getlogo(path)} className="db w-100" onError={loadDefaultImg} />

)
