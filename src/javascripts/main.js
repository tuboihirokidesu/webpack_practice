import "./reactApp.jsx";
import my from "./my.js";
import "../stylesheets/main.scss";

import Vue from 'vue';
import VueApp from './VueApp.vue';

import add from './add.ts';
// 追加
console.log(add(3, 9));

console.log("This is index.js");
my();
    new Vue({
      el: '#vue-root',
      render: (h) => h(VueApp),
    })
