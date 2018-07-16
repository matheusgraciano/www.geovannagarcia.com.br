import React, { Component } from 'react'
import $ from 'jquery'
import InlineSVG from 'svg-inline-react'

import './menu.css'

class Menu extends Component {
	constructor(props){
		super(props)
		this.configs = {
			'senseSpeed'    : 5,
			'previusScroll' : 0,
			'imediate'      : 10,
			'openMenu'      : false,
		}
		this.logoSvg = '<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 313.2 70.2"><style>.st10{fill:#f2e9e4}</style><g id="LOGO"><linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="4.625" y1="36.826" x2="51.216" y2="48.443"><stop offset="0" stop-color="#af7634"/><stop offset=".274" stop-color="#c48c3d"/><stop offset=".57" stop-color="#f2e375"/><stop offset=".729" stop-color="#dcb961"/><stop offset=".877" stop-color="#e9de90"/><stop offset="1" stop-color="#c89a4d"/></linearGradient><path d="M54.7 34.6H36.4c-.5-1.2-1.2-2.4-1.9-3.4l-.9-1.2c-2.5-3.1-5.8-5-9.4-5.3h-.7c-8 0-14.6 8.5-14.8 19v.6c0 6.8 2.6 12.8 6.6 16.3 2.9 3.1 6.6 5.1 10.6 5.7-.8.1-1.6.2-2.4.2C12.7 66.5 3.9 56 3.9 43.1s8.8-23.4 19.6-23.4c.8 0 1.6.1 2.4.2 1.4.2 2.7.6 4 1.1 4 1.7 7.5 4.8 9.8 9h8c-3.1-5.4-8.1-9.2-13.8-10.1.8-.1 1.6-.2 2.4-.2 6.8 0 12.7 4.1 16.2 10.2.1.1.1.2.2.3 0 .1.1.2.1.3 0 .1.1.1.1.2s.1.1.1.2l.3.6c0 .1.1.1.1.2.1.3.3.6.4.9 0 .1.1.1.1.2.1.2.1.3.2.5 0 .1.1.1.1.2s.1.1.1.2.1.2.1.3l.3.6c-.1 0 0 0 0 0z" fill="url(#SVGID_1_)"/><linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="15.813" y1="43.499" x2="54.368" y2="53.112"><stop offset="0" stop-color="#af7634"/><stop offset=".274" stop-color="#c48c3d"/><stop offset=".57" stop-color="#f2e375"/><stop offset=".729" stop-color="#dcb961"/><stop offset=".877" stop-color="#e9de90"/><stop offset="1" stop-color="#c89a4d"/></linearGradient><path d="M56 43.1v1.2c-.1 1.5-.2 2.9-.5 4.3s-.7 2.7-1.2 4c-3.1 8.1-9.9 13.8-17.9 13.8-.8 0-1.6-.1-2.4-.2-9.7-1.4-17.2-11.3-17.2-23.2v-.7c.1-2.8.6-5.5 1.4-8 1.1-2.8 2.9-4.9 5-5.9.9-.4 1.9-.7 2.9-.7.6 0 1.3.1 1.9.3-3.7 3.3-6.1 8.8-6.1 14.9 0 4.9 1.6 9.4 4.1 12.7.7 1 1.6 1.8 2.4 2.6 2.3 1.9 5.1 3.1 8.1 3.1 5.3 0 9.9-3.5 12.5-8.8.6-1.2 1.1-2.6 1.5-4 .4-1.4.6-2.8.7-4.3H34.6v4.3h7.8c-.3 1.4-.8 2.8-1.4 4-1.7 3.5-4.5 5.7-7.6 5.7-.6 0-1.2-.1-1.8-.3 1.7-.8 3.3-2.8 4.4-5.5h-6.1l-.1-12.9h26c.1 1.4.2 2.5.2 3.6z" fill="url(#SVGID_2_)"/><linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="20.996" y1="6.446" x2="25.338" y2="8.853"><stop offset="0" stop-color="#afb0af"/><stop offset=".696" stop-color="#c7c6c6"/><stop offset="1" stop-color="#e8e7e7"/></linearGradient><path fill="url(#SVGID_3_)" d="M22.5 3.8l2.7 5.3h-5.7z"/><linearGradient id="SVGID_4_" gradientUnits="userSpaceOnUse" x1="36.366" y1="6.446" x2="40.708" y2="8.853"><stop offset="0" stop-color="#afb0af"/><stop offset=".696" stop-color="#c7c6c6"/><stop offset="1" stop-color="#e8e7e7"/></linearGradient><path fill="url(#SVGID_4_)" d="M34.9 9.1l3-5.3 2.6 5.3z"/><linearGradient id="SVGID_5_" gradientUnits="userSpaceOnUse" x1="28.724" y1="6.446" x2="33.067" y2="8.853"><stop offset="0" stop-color="#afb0af"/><stop offset=".696" stop-color="#c7c6c6"/><stop offset="1" stop-color="#e8e7e7"/></linearGradient><path fill="url(#SVGID_5_)" d="M27.3 9.1l2.9-5.3 2.7 5.3z"/><linearGradient id="SVGID_6_" gradientUnits="userSpaceOnUse" x1="23.365" y1="3.792" x2="27.707" y2="6.199"><stop offset="0" stop-color="#afb0af"/><stop offset=".696" stop-color="#c7c6c6"/><stop offset="1" stop-color="#e8e7e7"/></linearGradient><path fill="url(#SVGID_6_)" d="M29.2 3.5l-3 5.4-2.7-5.4z"/><linearGradient id="SVGID_7_" gradientUnits="userSpaceOnUse" x1="31.093" y1="3.792" x2="35.435" y2="6.199"><stop offset="0" stop-color="#afb0af"/><stop offset=".696" stop-color="#c7c6c6"/><stop offset="1" stop-color="#e8e7e7"/></linearGradient><path fill="url(#SVGID_7_)" d="M36.9 3.5l-3 5.4-2.6-5.4z"/><linearGradient id="SVGID_8_" gradientUnits="userSpaceOnUse" x1="19.284" y1="10.32" x2="28.544" y2="15.453"><stop offset="0" stop-color="#afb0af"/><stop offset=".696" stop-color="#c7c6c6"/><stop offset="1" stop-color="#e8e7e7"/></linearGradient><path d="M27.8 16.8c-1 .1-1.9.2-2.6.3l-5.8-7h6.2l2.2 6.7z" fill="url(#SVGID_8_)"/><linearGradient id="SVGID_9_" gradientUnits="userSpaceOnUse" x1="33.419" y1="11.921" x2="38.136" y2="14.536"><stop offset="0" stop-color="#afb0af"/><stop offset=".696" stop-color="#c7c6c6"/><stop offset="1" stop-color="#e8e7e7"/></linearGradient><path d="M40.5 10.2l-5.9 7.1c-.7-.2-1.6-.3-2.5-.4l2.3-6.7h6.1z" fill="url(#SVGID_9_)"/><linearGradient id="SVGID_10_" gradientUnits="userSpaceOnUse" x1="26.356" y1="10.878" x2="32.438" y2="14.25"><stop offset="0" stop-color="#afb0af"/><stop offset=".696" stop-color="#c7c6c6"/><stop offset="1" stop-color="#e8e7e7"/></linearGradient><path d="M33.3 10.2L31 16.8h-2.1l-2.2-6.6h6.6z" fill="url(#SVGID_10_)"/></g><path class="st10" d="M94.8 30.4c0-1.9-.1-2.1-1-2.4-.2 0-.6-.1-.8-.1-.1 0-.2 0-.2-.1s.1-.2.4-.2c1 0 2.5.1 2.6.1.1 0 1.6-.1 2.2-.1.3 0 .4 0 .4.2 0 .1-.1.1-.2.1-.2 0-.3 0-.6.1-.6.1-.8.5-.8 1.3v5c0 1 0 1.1-.3 1.2-1.5.8-3.5 1-4.9 1-1.7 0-5-.2-7.5-2.5-1.4-1.2-2.7-3.7-2.7-6.5 0-3.7 1.8-6.3 3.8-7.5 2.1-1.3 4.3-1.4 6.1-1.4 1.4 0 3.1.3 3.5.4.5.1 1.3.2 1.9.2.2 0 .3.1.3.2 0 .3-.2 1-.2 3.3 0 .4 0 .5-.2.5-.1 0-.1-.1-.2-.3 0-.3-.1-1-.5-1.5-.6-.9-2.4-1.9-5.4-1.9-1.4 0-3.2.1-4.9 1.5-1.3 1.1-2.3 3.1-2.3 5.8 0 3.2 1.6 5.6 2.4 6.4 1.8 1.8 3.9 2.5 6 2.5.8 0 2-.1 2.6-.5.3-.2.5-.4.5-.8v-4zm8.3-3.2V23c0-.7-.2-1-.8-1.1h-.7c-.1 0-.2-.1-.2-.2s.1-.2.3-.2h7.1c.4 0 .8-.1.9-.1.1 0 .2-.1.3-.1.1 0 .1.1.1.2s-.1.4-.2.9c0 .2-.1 1.1-.1 1.3 0 .1-.1.2-.2.2s-.2-.1-.2-.3c0-.1 0-.5-.1-.7-.1-.3-.3-.5-1.4-.6-.3 0-2.7-.1-2.9-.1-.1 0-.1.1-.1.2v5.3c0 .1 0 .2.1.2h3.4c.5 0 .8-.1 1-.3.1-.1.2-.3.3-.3.1 0 .1 0 .1.2 0 .1-.1.4-.2 1.1 0 .4-.1 1.1-.1 1.3 0 .2 0 .4-.2.4-.1 0-.1-.1-.1-.2 0-.2 0-.4-.1-.6-.1-.3-.3-.5-1-.6-.6-.1-2.7-.1-3.1-.1-.1 0-.1.1-.1.1v4.9c0 1.3.4 1.6 2.4 1.6.5 0 1.5 0 2-.2s.8-.6.9-1.4c0-.2.1-.3.2-.3s.1.2.1.3-.2 1.5-.3 1.9c-.1.5-.3.5-1.1.5-1.5 0-2.7 0-3.5-.1h-3.8c-.2 0-.3 0-.3-.2 0-.1 0-.2.2-.2s.4-.1.6-.1c.4-.1.4-.5.5-1 .1-.8.1-2.3.1-4.2v-3.2zm18.4-6c4.5 0 8 2.8 8 7.3 0 4.4-3.2 8-8.1 8-5.5 0-7.9-4.2-7.9-7.7 0-3.1 2.4-7.6 8-7.6zm.4 14.5c1.8 0 5.5-1 5.5-6.6 0-4.7-2.8-7.1-6-7.1-3.4 0-5.8 2.1-5.8 6.4-.1 4.5 2.7 7.3 6.3 7.3zm16.6-2c1.2-2.6 3.8-9.3 4.2-10.7.1-.3.2-.6.2-.7 0-.2-.1-.3-.3-.4-.2-.1-.5-.1-.7-.1-.1 0-.2-.1-.2-.2s.1-.2.5-.2h3.6c.2 0 .3 0 .3.1s-.1.2-.2.2-.6 0-1 .2c-.3.2-.6.5-1.1 1.8-.2.6-1.2 2.9-2.2 5.3-1.2 2.8-2.1 5-2.6 5.9-.6 1.2-.7 1.5-.9 1.5-.2 0-.4-.3-.8-1.2l-5-12c-.5-1.1-.7-1.3-1.4-1.5-.3-.1-.7-.1-.8-.1-.1 0-.2-.1-.2-.2s.2-.1.5-.1h4.3c.4 0 .6 0 .6.1s-.1.2-.2.2c-.2 0-.6 0-.7.1-.2.1-.2.2-.2.3 0 .3.3.8.6 1.6l3.7 10.1zm12.1-11.8c.3-.6.3-.8.5-.8s.3.3.5.7c.4.8 3.6 8.9 4.8 11.8.7 1.7 1.3 2 1.7 2.1.3.1.6.1.8.1.1 0 .3 0 .3.2s-.2.2-.5.2h-3.2c-.4 0-.7 0-.7-.1s0-.1.1-.1.3-.2.2-.5l-1.8-4.5c0-.1-.1-.1-.2-.1h-4.7c-.1 0-.2 0-.2.2l-1.1 3.1c-.2.5-.3 1-.3 1.3 0 .4.3.5.7.5h.2c.2 0 .2.1.2.2s-.1.2-.3.2c-.5 0-1.6-.1-1.8-.1-.2 0-1.2.1-2 .1-.3 0-.4 0-.4-.2 0-.1.1-.2.2-.2h.6c.9-.1 1.3-.8 1.7-1.8l4.7-12.3zm2.2 8.1c.1 0 .1 0 .1-.1l-2-5.3c-.1-.3-.2-.3-.3 0l-1.9 5.3c0 .1 0 .1.1.1h4zm9.9 3.6c0 1.6.2 2.1.8 2.2.4.1.8.1 1 .1.1 0 .2.1.2.2s-.1.2-.4.2c-1.1 0-1.9-.1-2.1-.1-.2 0-1 .1-1.9.1-.2 0-.3 0-.3-.2 0-.1.1-.2.2-.2.2 0 .5 0 .8-.1.5-.1.6-.7.6-2.4V22.2c0-.8.1-1 .3-1 .2 0 .6.4.8.6.3.3 3.3 3.4 6.4 6.7 2 2.1 4.2 4.4 4.8 5l-.2-9.8c0-1.3-.1-1.7-.8-1.8-.4-.1-.8-.1-1-.1-.1 0-.2-.1-.2-.2s.2-.1.4-.1h3.8c.2 0 .4 0 .4.1s-.1.2-.2.2h-.5c-.7.1-.7.5-.7 1.7v11.4c0 1.3 0 1.4-.2 1.4s-.4-.2-1.5-1.2l-5.3-5.3c-2.3-2.5-4.6-4.8-5.2-5.5v9.3zm18.6 0c0 1.6.2 2.1.8 2.2.4.1.8.1 1 .1.1 0 .2.1.2.2s-.1.2-.4.2c-1.1 0-2-.1-2.1-.1-.2 0-1 .1-1.9.1-.2 0-.3 0-.3-.2 0-.1.1-.2.2-.2.2 0 .5 0 .8-.1.5-.1.6-.7.6-2.4V22.2c0-.8.1-1 .3-1 .2 0 .6.4.8.6.3.3 3.3 3.4 6.4 6.7 2 2.1 4.2 4.4 4.8 5l-.2-9.8c0-1.3-.1-1.7-.8-1.8-.4-.1-.8-.1-1-.1-.1 0-.2-.1-.2-.2s.2-.1.4-.1h3.8c.2 0 .4 0 .4.1s-.1.2-.2.2h-.5c-.7.1-.7.5-.7 1.7v11.4c0 1.3 0 1.4-.2 1.4s-.4-.2-1.5-1.2l-5.3-5.3c-2.3-2.5-4.6-4.8-5.2-5.5v9.3zm21.4-11.7c.3-.6.3-.8.5-.8s.3.3.5.7c.4.8 3.6 8.9 4.8 11.8.7 1.7 1.3 2 1.7 2.1.3.1.6.1.8.1.1 0 .3 0 .3.2s-.2.2-.5.2h-3.2c-.4 0-.7 0-.7-.1s0-.1.1-.1.3-.2.2-.5l-1.8-4.5c0-.1-.1-.1-.2-.1h-4.7c-.1 0-.2 0-.2.2l-1.1 3.1c-.2.5-.3 1-.3 1.3 0 .4.3.5.7.5h.2c.2 0 .2.1.2.2s-.1.2-.3.2c-.5 0-1.6-.1-1.8-.1-.2 0-1.2.1-2 .1-.3 0-.4 0-.4-.2 0-.1.1-.2.2-.2h.6c.9-.1 1.3-.8 1.7-1.8l4.7-12.3zm2.2 8.1c.1 0 .1 0 .1-.1l-2-5.3c-.1-.3-.2-.3-.3 0l-1.9 5.3c0 .1 0 .1.1.1h4zm27.9.4c0-1.9-.1-2.1-1-2.4-.2 0-.6-.1-.8-.1-.1 0-.2 0-.2-.1s.1-.2.4-.2c1 0 2.5.1 2.6.1.1 0 1.6-.1 2.2-.1.3 0 .4 0 .4.2 0 .1-.1.1-.2.1-.2 0-.3 0-.6.1-.6.1-.8.5-.8 1.3v5c0 1 0 1.1-.3 1.2-1.5.8-3.5 1-4.9 1-1.7 0-5-.2-7.5-2.5-1.4-1.2-2.7-3.7-2.7-6.5 0-3.7 1.8-6.3 3.8-7.5 2.1-1.3 4.3-1.4 6.1-1.4 1.4 0 3.1.3 3.5.4.5.1 1.3.2 1.9.2.2 0 .3.1.3.2 0 .3-.2 1-.2 3.3 0 .4 0 .5-.2.5-.1 0-.1-.1-.2-.3 0-.3-.1-1-.5-1.5-.6-.9-2.4-1.9-5.4-1.9-1.4 0-3.2.1-4.9 1.5-1.3 1.1-2.3 3.1-2.3 5.8 0 3.2 1.6 5.6 2.4 6.4 1.8 1.8 3.9 2.5 6 2.5.8 0 2-.1 2.6-.5.3-.2.5-.4.5-.8v-4zm11.4-8.5c.3-.6.3-.8.5-.8s.3.3.5.7c.4.8 3.6 8.9 4.8 11.8.7 1.7 1.3 2 1.7 2.1.3.1.6.1.8.1.1 0 .3 0 .3.2s-.2.2-.5.2h-3.2c-.4 0-.7 0-.7-.1s0-.1.1-.1.3-.2.2-.5l-1.8-4.5c0-.1-.1-.1-.2-.1H242c-.1 0-.2 0-.2.2l-1.1 3.1c-.2.5-.3 1-.3 1.3 0 .4.3.5.7.5h.2c.2 0 .2.1.2.2s-.1.2-.3.2c-.5 0-1.6-.1-1.8-.1-.2 0-1.2.1-2 .1-.3 0-.4 0-.4-.2 0-.1.1-.2.2-.2h.6c.9-.1 1.3-.8 1.7-1.8l4.7-12.3zm2.3 8.1c.1 0 .1 0 .1-.1l-2-5.3c-.1-.3-.2-.3-.3 0l-1.9 5.3c0 .1 0 .1.1.1h4zm8.9-2.8V23c0-.7-.2-1-.8-1.1h-.7c-.1 0-.2-.1-.2-.2s.1-.2.3-.2h4.9c1.3 0 2.7.1 3.8.8.5.4 1.4 1.3 1.4 2.7 0 1.4-.6 2.8-2.5 4.4 1.7 2.1 3.1 3.8 4.2 5 1.1 1.1 1.7 1.3 2.2 1.4.4.1.6.1.7.1s.2.1.2.2-.1.2-.5.2h-1.3c-1.1 0-1.7-.1-2.2-.4-.9-.5-1.6-1.4-2.8-2.9-.8-1.1-1.7-2.3-2.2-2.8-.1-.1-.1-.1-.3-.1H257c-.1 0-.1 0-.1.2v.5c0 1.9 0 3.4.1 4.2.1.6.2.9.8 1 .3 0 .7.1.9.1.1 0 .2.1.2.2s-.1.2-.3.2c-1.1 0-2.4-.1-2.5-.1 0 0-1.4.1-2 .1-.2 0-.3 0-.3-.2 0-.1 0-.2.2-.2s.4 0 .6-.1c.4-.1.4-.5.5-1 .1-.8.1-2.3.1-4.2v-3.6zm1.8 1.6c0 .1 0 .2.1.3.3.2 1.3.3 2.2.3.5 0 1 0 1.5-.3.7-.5 1.2-1.5 1.2-3 0-2.4-1.3-3.8-3.5-3.8-.6 0-1.2.1-1.4.1-.1 0-.2.1-.2.2v6.2zm14.1 5.6c-2-1.7-2.5-3.9-2.5-5.8 0-1.3.5-3.6 2.3-5.3 1.2-1.2 3.1-2.1 6.1-2.1.8 0 1.9.1 2.9.2.8.1 1.4.3 2.1.3.2 0 .3.1.3.2 0 .2 0 .4-.1 1.1v2c0 .3-.1.4-.2.4s-.2-.1-.2-.4c0-.8-.3-1.5-.8-2-.7-.6-2.2-1.1-4-1.1-2.6 0-3.8.7-4.5 1.4-1.5 1.4-1.8 3.1-1.8 5.1 0 3.7 3 7.1 7.3 7.1 1.5 0 2.5-.1 3.3-.9.4-.4.7-1.3.8-1.6 0-.2.1-.3.2-.3s.2.1.2.3-.3 1.8-.5 2.5c-.1.4-.2.4-.5.6-.8.3-2.3.4-3.6.4-3.1 0-5.2-.7-6.8-2.1zm18-3.8c0 1.9 0 3.4.1 4.2.1.6.1.9.7 1 .3 0 .7.1.9.1.1 0 .2.1.2.2s-.1.2-.3.2c-1.1 0-2.4-.1-2.5-.1-.1 0-1.4.1-2 .1-.2 0-.3 0-.3-.2 0-.1 0-.2.2-.2s.4 0 .6-.1c.4-.1.5-.5.5-1 .1-.8.1-2.3.1-4.2V23c0-.7-.2-1-.6-1.1-.2 0-.5-.1-.6-.1-.1 0-.2-.1-.2-.2s.1-.2.3-.2h4c.2 0 .3 0 .3.2 0 .1-.1.2-.2.2h-.5c-.5.1-.7.4-.7 1.1v7.7zm10.1-8.7c.3-.6.3-.8.5-.8s.3.3.5.7c.4.8 3.6 8.9 4.8 11.8.7 1.7 1.3 2 1.7 2.1.3.1.6.1.8.1.1 0 .3 0 .3.2s-.2.2-.5.2h-3.2c-.4 0-.7 0-.7-.1s0-.1.1-.1.3-.2.2-.5l-1.8-4.5c0-.1-.1-.1-.2-.1h-4.7c-.1 0-.2 0-.2.2l-1.1 3.1c-.2.5-.3 1-.3 1.3 0 .4.3.5.7.5h.2c.2 0 .2.1.2.2s-.1.2-.3.2c-.5 0-1.6-.1-1.8-.1-.2 0-1.2.1-2 .1-.3 0-.4 0-.4-.2 0-.1.1-.2.2-.2h.6c.9-.1 1.3-.8 1.7-1.8l4.7-12.3zm2.3 8.1c.1 0 .1 0 .1-.1l-2-5.3c-.1-.3-.2-.3-.3 0l-1.9 5.3c0 .1 0 .1.1.1h4zM121.5 53.3h-4.6l-.9 2.2h-1l3.8-8.5h1l3.8 8.5h-1.1l-1-2.2zm-.4-.9l-1.9-4.4-1.9 4.4h3.8zm6.1-4.5c-1.1 0-1.8.4-1.8 1.2 0 2.2 4.8 1.1 4.8 4.1 0 1.4-1.2 2.3-3.1 2.3-1.2 0-2.4-.5-3.2-1.3l.4-.8c.8.8 1.9 1.2 2.8 1.2 1.2 0 2-.5 2-1.3 0-2.3-4.8-1.1-4.8-4.1 0-1.3 1.2-2.2 2.9-2.2 1 0 2 .3 2.7.8l-.4.9c-.7-.6-1.6-.8-2.3-.8zm7.4 0c-1.1 0-1.8.4-1.8 1.2 0 2.2 4.8 1.1 4.8 4.1 0 1.4-1.2 2.3-3.1 2.3-1.2 0-2.4-.5-3.2-1.3l.4-.8c.8.8 1.9 1.2 2.8 1.2 1.2 0 2-.5 2-1.3 0-2.3-4.8-1.1-4.8-4.1 0-1.3 1.2-2.2 2.9-2.2 1 0 2 .3 2.7.8l-.4.9c-.7-.6-1.6-.8-2.3-.8zm10.7-.9v.9h-4.8v2.8h4.3v.9h-4.3v3h4.9v.9h-5.9V47h5.8zm4.6.9c-1.1 0-1.8.4-1.8 1.2 0 2.2 4.8 1.1 4.8 4.1 0 1.4-1.2 2.3-3.1 2.3-1.2 0-2.4-.5-3.2-1.3l.4-.8c.8.8 1.9 1.2 2.8 1.2 1.2 0 2-.5 2-1.3 0-2.3-4.8-1.1-4.8-4.1 0-1.3 1.2-2.2 2.9-2.2 1 0 2 .3 2.7.8l-.4.9c-.8-.6-1.7-.8-2.3-.8zm7.4 0c-1.1 0-1.8.4-1.8 1.2 0 2.2 4.8 1.1 4.8 4.1 0 1.4-1.2 2.3-3.1 2.3-1.2 0-2.4-.5-3.2-1.3l.4-.8c.8.8 1.9 1.2 2.8 1.2 1.2 0 2-.5 2-1.3 0-2.3-4.8-1.1-4.8-4.1 0-1.3 1.2-2.2 2.9-2.2 1 0 2 .3 2.7.8l-.4.9c-.8-.6-1.7-.8-2.3-.8zm13 3.3c0 2.4-2 4.3-4.4 4.3-2.5 0-4.4-1.9-4.4-4.3s2-4.3 4.4-4.3c2.4.1 4.4 1.9 4.4 4.3zm-7.9 0c0 1.9 1.6 3.4 3.5 3.4s3.4-1.5 3.4-3.4-1.5-3.4-3.4-3.4-3.5 1.5-3.5 3.4zm15.2 4.2l-1.8-2.7H173v2.7h-1V47h3.2c2.1 0 3.3 1 3.3 2.8 0 1.4-.7 2.3-1.9 2.7l2 2.9h-1zm-2.4-3.5c1.5 0 2.4-.7 2.4-2s-.9-2-2.4-2H173v4h2.2zm6.5-4.9v8.5h-1V47h1zm8 6.3H185l-.9 2.2h-1l3.8-8.5h1l3.8 8.5h-1.1l-.9-2.2zm-.4-.9l-1.9-4.4-1.9 4.4h3.8zm15.1-1.2c0 2.4-1.9 4.2-4.4 4.2h-3.4V47h3.4c2.5 0 4.4 1.8 4.4 4.2zm-1 0c0-1.9-1.5-3.4-3.4-3.4h-2.4v6.7h2.5c1.9.1 3.3-1.4 3.3-3.3zm8.5-4.2v.9h-4.8v2.8h4.3v.9h-4.3v3h4.9v.9h-5.9V47h5.8zm11.5 0v.9h-4.8v2.8h4.3v.9h-4.3v3h4.9v.9h-5.9V47h5.8zm2 0l2.9 7.4 2.9-7.4h1l-3.5 8.5h-1l-3.4-8.5h1.1zm14 0v.9h-4.8v2.8h4.3v.9h-4.3v3h4.9v.9h-5.9V47h5.8zm3.1 0l5.1 6.9V47h1v8.5h-1l-5.1-6.9v6.9h-1V47h1zm14 0v.9h-2.8v7.6h-1v-7.6H250V47h6.5zm8.9 4.2c0 2.4-2 4.3-4.4 4.3-2.5 0-4.4-1.9-4.4-4.3s2-4.3 4.4-4.3c2.4.1 4.4 1.9 4.4 4.3zm-7.9 0c0 1.9 1.6 3.4 3.5 3.4s3.4-1.5 3.4-3.4-1.5-3.4-3.4-3.4-3.5 1.5-3.5 3.4zm12.1-3.3c-1.1 0-1.8.4-1.8 1.2 0 2.2 4.8 1.1 4.8 4.1 0 1.4-1.2 2.3-3.1 2.3-1.2 0-2.4-.5-3.2-1.3l.4-.8c.8.8 1.9 1.2 2.8 1.2 1.2 0 2-.5 2-1.3 0-2.3-4.8-1.1-4.8-4.1 0-1.3 1.2-2.2 2.9-2.2 1 0 2 .3 2.7.8l-.4.9c-.7-.6-1.6-.8-2.3-.8z"/></svg>'
	}
	componentDidMount() {
		this.setDebounce()
		this.setHamburguer()
		this.setLinks()
	}
	debounce(func, wait, immediate){
		let timeout
		return function() {
			let context = this, args = arguments
			let later = function() {
				timeout = null
				if (!immediate) func.apply(context, args)
			}
			let callNow = immediate && !timeout
			clearTimeout(timeout)
			timeout = setTimeout(later, wait)
			if (callNow) func.apply(context, args)
		}
	}
	setHamburguer(){
		$(".hamburguer").on("click", function(e) {
			e.preventDefault()
			$(this).toggleClass("active")
			$(".menu-mobile").toggleClass("active")
			setTimeout(function () {
				$(".menu-mobile").toggleClass("end")
			}, 500)
		})
	}
	setDebounce() {
		const self = this
		$(document).scroll(self.debounce(function () {
			self.go()
		}, self.configs.imediate))
	}
	go() {
		let scroller = $(document).scrollTop()
		let offset = $(window).height() * 1 / 6
		if (scroller - this.configs.senseSpeed > this.configs.previousScroll && scroller > offset) {
			$('#header-menu').addClass('off')
			$('#header-menu').removeClass('on')
			if ($(".menu-mobile").hasClass('active')) {
				$(".hamburguer").toggleClass("active")
				$(".menu-mobile").toggleClass("active")
				setTimeout(function () {
					$(".menu-mobile").toggleClass("end")
				}, 500)
			}
		} else if (scroller + this.configs.senseSpeed < this.configs.previousScroll && scroller > offset) {
			$('#header-menu').addClass('on')
			$('#header-menu').removeClass('off')
		}
		this.configs.previousScroll = scroller
	}
	setLinks(){
		$('[data-menu="true"]').on("click", function (e) {
			e.preventDefault()
			if ($(".menu-mobile").hasClass('active')) {
				$(".hamburguer").toggleClass("active")
				$(".menu-mobile").toggleClass("active")
				setTimeout(function () {
					$(".menu-mobile").toggleClass("end")
				}, 500)
			}
			let o = $(this)
			$("html, body").stop().animate({
				scrollTop: $(o.attr("href")).offset().top
			}, 1000)
		})
	}
	goStart(){
		$("html, body").stop().animate({ scrollTop: 0 }, 1000)
	}
	render() {
		return (
			<nav id="header-menu">
				<div className="container">
					<header>
						<div title="Menu" className="hamburguer d-xs-block d-sm-block d-md-block d-lg-none">
							<span></span>
						</div>
						<a className="a-header" onClick={this.goStart}>
							<InlineSVG src={this.logoSvg} />
						</a>
					</header>
					<nav className="menu-desktop bg-transparent bg-shared d-none d-md-block">
						<div className="menu-container nav navbar-nav">
							<ul>
								<li className="menu-item">
									<a href="#presentation" data-menu="true">Apresentação</a>
								</li>
								<li className="menu-item">
									<a href="#about" data-menu="true">Sobre</a>
								</li>
								<li className="menu-item">
									<a href="#services" data-menu="true">Serviços</a>
								</li>
								<li className="menu-item">
									<a href="#testmonials" data-menu="true">Depoimentos</a>
								</li>
								<li className="menu-item">
									<a href="#contact" data-menu="true">Contato</a>
								</li>
							</ul>
						</div>
					</nav>
					<nav className="menu-mobile bg-transparent bg-shared d-xs-block d-sm-block d-md-block d-lg-none">
						<div className="menu-container nav navbar-nav">
							<ul>
								<li className="menu-item">
									<a href="#presentation" data-menu="true">Apresentação</a>
								</li>
								<li className="menu-item">
									<a href="#about" data-menu="true">Sobre</a>
								</li>
								<li className="menu-item">
									<a href="#services" data-menu="true">Serviços</a>
								</li>
								<li className="menu-item">
									<a href="#testmonials" data-menu="true">Depoimentos</a>
								</li>
								<li className="menu-item">
									<a href="#contact" data-menu="true">Contato</a>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</nav>
		)
	}
}

export default Menu