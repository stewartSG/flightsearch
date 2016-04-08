# FlightSearch v0.1

# Special Notes:
- Demo Site is available via : http://188.166.212.240/
- Access the styleguide generated via Hologram via : http://188.166.212.240/styleguide/bases.html
- Access the actual flight results page via : http://188.166.212.240/result

## 1.0 Browsers Supported
- In order to be compatible with as many devices as possible, we support the following browsers : Google Chrome, Mozilla Firefox 3.6+, Opera 12+, Safari 5+, Internet Explorer 9 

## 2.0 Frameworks used
- Ruby on Rails > Because its fast, easy to test and templating engines are great to reduce bloat than vanilla HTML, potential to reduce bloat on JS with coffeescript etc
- Twitter Bootstrap > Primarily chosen because of the ability to support the browsers we aim to support, more importantly since this is a short term project, I just want to make sure whoever is a developer not have a hard time maintaining it. More importantly, a lot of rails gems come with bootstrap support that is easy to run functional test / automatic test on.
- Bourbon > Good framework to have a quick way to control our scaling of fonts etc from a global variables POV. Good for CSS styling with SASS Mixins too.

## 3.0 CSS Libraries Used
We add libraries only when existing framework do not support the feature, so we do not bloat up the site with loading multiple CSS libraries. Goal is to be as lean as possible
- Fontawesome > Icon fonts are great. Fontawesome is also pretty robust for all kind of use-cases

## 4.0 JS Libraries used
We rely on JS libraries primarily for widget / interaction purpose that isn't supplied with bootstrap 3
- Ion Rangeslider > Picked this because it has one of the most stars on Github, more importantly it is easy to modify and maintain, some are really a pain to update, supports the browsers we aim to support mentioned above.
- Bootstrap Datepicker > Picked this cause it works well with Bootstrap that we use, also plenty of stars on Github and supports the browser we aim to support. Makes it easy to maintain in future.

## 5.0 Ruby GEMS Used
- Hologram > Picked this so we can generate a living styleguide that everyone can use, nice sublime like editor. Took a while to setup and drop in the SCSS files in but once its up and running its quite useful actually. Used it myself to build the site

## 6.0 UI Structure
- UI has to be responsive from day 1, reliable grid system is important. Bootstrap isn't the best choice for this probably cause its a bit heavy but its probably the quickest, plans to transition into bourbon 100% in future for Grid and Components control but it also depends on how comfortable the development team is with not using bootstrap because existing components may already be bootstrapped.
- UI structure aims to be separated into Components, Modules, Global Elements
- Component - Refers to HTML components that we can re-use easily in any part of the site e.g. input fields, buttons, datepickers etc. We introduce these at the styleguide section so developers can easily drop in to get what they need time to time
- Modules - Made up of a set of components e.g. our flight result card, it consists of components such as buttons , headers etc. Also designed to be re-used
- Global Elements - These SASS Mixins variables found under assets/stylesheets/globals/variables.scss controls all aspect of the site ranging from font size scaling, colors and other variables often re-used in stylesheets

## 7.0 Visual Styleguide
- Introduced to make lives as developers or frontend easier with introduction of helper css classes, quick ability to reduce grids to no margin or with additional margins (refer to http://188.166.212.240/styleguide/utility.html)
- Quick way to drop in on HTML markup for buttons, icons, color schemes etc so its easy to communicate the UI changes to both developers and designers. (refer to http://188.166.212.240/styleguide/bases.html)
- Purposefully generated with Hologram GEM, so we do not need to invest too much time on generating styleguide, next steps is perhaps add GuardReload or Watcher to compile css changes as we write it and then translate it into styleguide changes automatically. 

## 8.0 WIP that is due in next release (likely today, April 8 2016) 
- Refactor existing haml file into modules and represent them in our styleguide generated by Hologram GEM so our developers can easily drop in and use them
- Point libraries to CDN so we have faster loading time, including fonts e.g. Font Awesome used
- Introduce a searchable input field, usually with a list of search results injected (Tried implementing but took too much time, so I passed)
- Introduce bootstrap dropdown for easy selection of number of passengers

## 9.0 To-Do-List in future WIP
- Transition to Bourbon 100%, abandon Bootstrap because too much bloat. 
- Add graceful fallback for IE9 and above / other browsers such as older version of Safari and Firefox with SHIMS etc

## 10.0 Acknolwedgements
- Thank you TW and Infant for giving me the opportunity to work on this. Shall improve on it and push some fixes ASAP! :) 

# Known issues 
- Style guide forms section needs some updating to refresh old components phased out
- Style guide sections for utility has some templating issues that is causing navigational problems

# Usability Test Notes:
- So far, project is tested on iPad Air 2, 15" Macbook Retina on OSX Yosemite on Chrome/Safari, iPhone 6 on Safari / Chrome and seems to be working fine in terms of responsiveness and usability. 

## Prerequisites
- ruby 2.2.3
- nodeJS v0.10.33
- RVM 1.26.11
- Rails 4.2.3
- xCode command line tools

## Development Setup
Install Gems

```
> bundle install --without production
```
Run Hologram to generate styleguide

```
> hologram 
```

Lay back and enjoy the magic :)
