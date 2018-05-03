# Convert a Jquery App to VueJS

the objective from this repository is to understand how VueJS have more advantanges from Jquery.
We will compare same applications written in Jquery and we will try to do the same for VueJS.

# How to check the samples
first of all you need to make sure that you have the latest nodejs and npm package management tool. 
you can find it at https://nodejs.org also try to install npm (node package management tool )
after cloning the repository you need to enter the folder conver-a-jquery-app-to-vuejs and write the following command:

`npm install`

once installed run the following command to make light server run properly.

`npm run dev`

# Simple Task
You can find it in folder simple, a way to understand how we can manipulate the dom comparing jquery with Vue.js.
Vue.js is a modern JavaScript framework for building user interfaces. In short, it makes jQuery obsolete. 
I'll show you some reasons why it makes sense to migrate your jQuery code to Vue.

# Form
Forms are an obvious reason for migrating to Vue.js. Yes, using jQuery is so much better than the raw DOM API, but Vue makes working with forms a breeze.

# Converting jQuery Plugins (accordion folder)
If we're migrating jQuery-based code to Vue.js, it's obvious that we'll need to rewrite some plugins. We'll look at converting a simple accordion plugin.

# Wrapping a jQuery Plugin (wrapper folder)
Conversion isn't always an option. We may be working with a very complex plugin, or we may have a third-party plugin that we can't feasibly convert.
In those cases, we can wrap the plugin with a Vue.js component.