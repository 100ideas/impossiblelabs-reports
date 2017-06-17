simple spreadsheet -> table view w/ tachyons


## architecture
- tachyons css via [mikker/nextjs-with-tachyons](https://github.com/mikker/nextjs-with-tachyons)
- dynamic fetching of google sheet data with [tabletop](https://github.com/jsoma/tabletop)

## todo

- skip react, just do it clientside??
  - https://www.celljs.org

- add simple table page to render sheet data
- "controller" component to fetch and pass table
- integrate tachyons best practices
- consider how caching might work (simple memory db? or fs?)
  - fs... maybe

later
  - basic css for print media -> pdf?
  - pdf rendering

## misc
in-browser [CodeSandbox prototype](https://codesandbox.io/s/P177X3Drn).
