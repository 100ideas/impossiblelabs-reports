# google spreadsheet -> table view w/ tachyons

demo https://impossiblelabs-reports.now.sh

## architecture
+ tachyons css via [mikker/nextjs-with-tachyons](https://github.com/mikker/nextjs-with-tachyons)
+ dynamic fetching of google sheet data with [tabletop](https://github.com/jsoma/tabletop)
+ [example pdf](https://github.com/100ideas/impossiblelabs-reports/blob/master/static/impossiblelabs-reports.now.sh.pdf)  printed-to-pdf from browser styled w/ `@media print` css

![screenshot](https://github.com/100ideas/impossiblelabs-reports/raw/master/static/2017-06-17_impossiblelabs-reports-screenshot.png)

## todo
- consider how caching might work (simple memory db? or fs?)
  - convert [tabletop caching/local.py](https://github.com/jsoma/tabletop/blob/master/caching/local.py) script to node
  - serialize sheet to json on successful fetch
  - keep json in memory when server starts
  - populate table from memory && request via rest
  - if rest fails, ok, we have cached
  - if rest succeeds, update json file if memory copy diff than res
- directly render & serve pdf (print stylesheets + render-to-pdf?)

## done
+ add simple table page to render sheet data
+ "controller" component to fetch and pass table
+ basic css for print media -> pdf?
+ advanced css for print media
+ print theme is also reponsive (++1) - unless it's actually getting printed
+ web "print" view & normal view are responsive
+ web view navbar uses client's styles (bootstrap) w/o messing up tachyons
+ reimplement/extend client's theme w/ tachyons

## misc
- mock sheet https://docs.google.com/spreadsheets/d/1cV3TS_3zZMfydUjCLUnRpMfo7GnN0Zc6iCPeibYTbDE/edit
- bootstrap + tachyons css collision hell: https://impossiblelabs-reports-cssfight.now.sh
  - (resolved - I think? - by only including jquery + bootstrap.js; no bootstrap.css)
