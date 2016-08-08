>## Kanban TaskBoard 

### What I've done:
* Integrated Foundation Sites (with Sass)
* Implemented simple responsive design
* Developed editable modal for color and tags
* Implemented drag and drop functionality across lists
* Minimal unit/functional tests


### Usage

```
npm install
npm start
open http://localhost:3000
```


### Things to be improved
* Keep tags from consolidating after list change (possible bug)
* InputBox: Clear input field after after click event. (Currently is only cleared after ENTER)
* Modal: Submit tags on ENTER
* Implement { task, tags, list } remove functionality
* Implement Add New List
* Configure localstorage
* -- These are things that I started, and will implement in the near future --


### Required Dependencies

* React
* Webpack
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* [babel-loader](https://github.com/babel/babel-loader)
* [react-redux](https://github.com/reactjs/redux)
* [react-hot-loader](https://github.com/gaearon/react-hot-loader)
* [react-dnd](https://github.com/gaearon/react-dnd)
* [classnames](https://github.com/JedWatson/classnames)
* [karma-runner](https://github.com/karma-runner/karma) was used for minimal testing
