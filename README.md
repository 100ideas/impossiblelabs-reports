simple spreadsheet -> table view w/ tachyons


## architecture
+ tachyons css via [mikker/nextjs-with-tachyons](https://github.com/mikker/nextjs-with-tachyons)
- dynamic fetching of google sheet data with [tabletop](https://github.com/jsoma/tabletop)

## todo

- skip react, just do it clientside??
  - https://www.celljs.org

+ add simple table page to render sheet data
+ "controller" component to fetch and pass table
+ integrate tachyons best practices
- consider how caching might work (simple memory db? or fs?)
  - serialize sheet to json on successful fetch
  - keep json in memory when server starts
  - populate table from memory && request via rest
  - if rest fails, ok, we have cached
  - if rest succeeds, update json file if memory copy diff than res

- later
  + basic css for print media -> pdf?
  + pdf rendering (@media print stylesheets)

## misc
- in-browser [CodeSandbox prototype](https://codesandbox.io/s/P177X3Drn).
- mock sheet https://docs.google.com/spreadsheets/d/1cV3TS_3zZMfydUjCLUnRpMfo7GnN0Zc6iCPeibYTbDE/edit
