# Seismic Audio Mozu Theme Audit

prepared by James Zetlen, Volusion, Inc

### Background
The Seismic Audio Mozu Theme was the first production theme developed for a Mozu client, and it used the best practices known and understood at the time. However, as the Mozu platform and the best, most sustainable theme developer habits for it have evolved in tandem, it became necessary to revisit the Seismic Audio theme and streamline it, for current stability and future maintainability.

### Objectives
 - Fix persistent bugs in:
    - Sorting and pagination of products
    - Cart and checkout functionality
    - Shipping estimator functionality
 - Increase performance and reduce load time
 - Remove "dead code" and reduce in codebase, to aid upgrades in the future
 - Determine what new Core theme functionality could be "brought in" to the theme

### Method
Mozu senior theme development resources went through every file in the Seismic Audio theme. Each file was diffed with its current counterpart in the Core theme, and the history of that file in the Core theme, in order to determine the intent of the changes. We modified the Seismic audio theme file to represent only the necessary change to maintain the Seismic look, feel, and functionality.

In updating theme files to reflect more recent versions of their Core theme base files, we were able to fix many persistent bugs that had long been fixed in the core theme. We were also able to determine that many overrides were unnecessary, since:
 - They were made early, without being necessary in the first place, before the override system was understood
 - They existed to correct Core theme bugs that are now corrected in the Core theme
 - They were "too aggressive", overriding the wrong files or too many files to achieve the same functionality

As a result, we were able to delete several dozen files from the Seismic theme codebase, with no loss of functionality. Specifically deleted files can be viewed in the commit history of this repository.

In addition, we went through the JavaScript files used by the theme, determined which ones could be concatenated together into a smaller and faster build resource, and adjusted the `build.js` file to do so--for this release and all future compilations of the Seismic theme.

Lastly, we made small CSS corrections, and observed that there is some new Core theme functionality that Seismic Audio has not folded into their theme; however, Seismic may not want or need this functionality, so we did not merge it in without consultation.

### Findings

1. We deleted 48 files that were no longer necessary according to the criteria above.
2. We removed several outdated, unnecessary, or confusing theme properties, theme settings and theme UI controls from the `theme.json` and `theme-ui.json` files.
3. We corrected many small errors or examples of strange usage in the JavaScript modules, fixing multiple loading, rendering and functionality bugs around the site. Sorting, paging, shipping estimation, and many other small pieces of functionality should now work as expected.
4. We optimized the JavaScript load by adding commonly used scripts to the module definitions in `build.js`; now, a Category page loads an average of **17 JavaScript files in production mode (for 380 KB)** instead of an average of **81 files (for 700 KB)**.
5. We observed that the Digital Credit / Gift Card functionality that is now available in the Core theme is not merged into the Seismic Audio theme. **If Seismic Audio is satisfied with their extant Store Credit functionality and does not require the additional Gift Card functionality, then nothing needs to be done about this.**

### Further Recommendations

1. Take the distribution package zipfile from the current release of this repository, create a new Theme in the Seismic Audio production developer account, install and activate it on the Seismic Audio production site, and perform a round of user acceptance testing to ensure there are no regressions or discrepancies.
2. Take the source package from the current release of this repository, or fork this repository for use by further developers working on the Seismic Audio theme. It represents an effective "fresh start".

 