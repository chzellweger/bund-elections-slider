# Changelog React Base Project

## Upcoming

## 0.2.0 – 2016-10-19
### Important
- Changed version numbering scheme: This base project will only use 0.x.x 
version numbers. Final apps that base on this project are advised to use x.x
.x version numbers – this way, those two ranges shouldn't clash.

### New
- Added yarn.lock file
- Added .npmrc file to stop `npm/yarn version` to tag the version.
- Use `useDimensionWatcher` flag in `src/config.json` in order to include the
 DimensionWatcher script in your `index.html`.
- Use a fancy dashboard when running `npm run start`. Normal output is used 
when running `npm run serve`.

### Changed


## 1.1.1 - 2016-08-23
### Changed
- Fixed dev config, so it won't throw as many errors in console anymore

### New
- Added readme and changelog.

## 1.1.0 - 2016-08-11
### New
- Default loader for CSV files. Based on D3-dsv, so it provides neatly organised JSON objects by default.

## 1.0.1 - 2016-08-11
### Changed
- Fix in config so that the dev server works again.

## 1.0.0 - 2016-08-10

First release; includes a base project with the following components:

- Masthead
- Copyright notice
- Analytics/Trackers
- Standalone Share Buttons
- Feedback Notice
