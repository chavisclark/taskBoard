import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import Board from '../containers/Board';
import styles from '../sass/app';
import classNames from 'classnames/bind';
//I'm importing individually because of a problem importing foundation js in webpack
//see: //https://github.com/zurb/foundation-sites/issues/7386
import foundation from "babel!foundation-sites/js/foundation.core";
import 'babel!what-input/what-input.js';
import "babel!foundation-sites/js/foundation.util.mediaquery.js";
import "babel!foundation-sites/js/foundation.util.nest.js";
import "babel!foundation-sites/js/foundation.util.box.js";
import "babel!foundation-sites/js/foundation.util.keyboard.js";
import "babel!foundation-sites/js/foundation.util.motion.js";
import "babel!foundation-sites/js/foundation.util.timerandimageloader.js";
import "babel!foundation-sites/js/foundation.util.touch.js";
import "babel!foundation-sites/js/foundation.util.triggers.js";
import 'babel!foundation-sites/js/foundation.offcanvas.js';
import 'babel!foundation-sites/js/foundation.dropdownMenu.js';
import 'babel!foundation-sites/js/foundation.dropdown.js';
import 'babel!foundation-sites/js/foundation.equalizer.js';

const cx = classNames.bind(styles);
const store = configureStore({
  task: {
  	tasks: []
  }
});
const App = () => {
  return (
      <Provider store={store}>
        <Board />
      </Provider>
  );
};


export default App
