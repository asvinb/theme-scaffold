// import foo from './components/bar';
import Vue from 'vue';
import Vuex from 'vuex';
import * as d3 from 'd3';

Vue.use( Vuex );

const square = d3.selectAll( 'rect' );
square.style( 'fill', 'orange' );