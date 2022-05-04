/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import edit from './edit';
// import save from './save';
import '../style.css';


// Destructure the json file to get the name and settings for the block
// For more information on how this works, see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

// Register the block
registerBlockType( 'gutenberg-contact-form-block/contact-form-block', {
	apiVersion: '2',
	title: 'CF Block',
	icon: {
		// Specifying a background color to appear with the icon e.g.: in the inserter.
		background: 'rgb(87 174 183)',
		// Specifying a color for the icon (optional: if not set, a readable color will be automatically defined)
		foreground: '#fff',
		// Specifying an icon for the block
		src: <span class="dashicons dashicons-format-status"></span>,
	} ,
	category: 'layout',
	keywords: ['contact us', 'contact form','form'],
	attributes: {
		align: {
			type: 'string',
			default: 'none'
		},
		title: {
			type: 'string',			
		},
		subtitle:{
			type:'string',
		},
		receipenamecolor: {
            type: 'string',
            default: '#111',
        },			
		subtitlecolor:{
			type: 'string',
            default: '#111',
		},
		bordercolor:{
			type: 'string',
            default: '#111',
		},
		borderradiousvalue:{
			type: 'string'
		},
		paddingtop:{
			type: 'string'
		},
		paddingright:{
			type: 'string'
		},
		paddingbottom:{
			type: 'string'
		},
		colorv: {
			type: "string",
			default: 'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)'
		},
		gradientv: {
			type: "string",
			default: '#f00'
		},	
		paddingleft:{
			type: 'string'
		},
		blockcolor:{
			type: 'string',
            default: '#ffffff',
		},
		border_style:{
			type: 'string',
		},
		subcontentcolor:{
			type: 'string',
            default: '#111',
		},		
		isFirstNameChecked:{
			type: 'Boolean',
		},
		isLastNameChecked:{
			type: 'Boolean',
		},
		iswhatgender:{
			type:'Boolean',
		},
		isEmailChecked:{
			type: 'Boolean',
		},
		isPhonenumChecked:{
			type: 'Boolean',
		},
		isMessageChecked:{
			type: 'Boolean',
		},
		isAddressChecked:{
			type: 'Boolean',
		},
		isRecaptchaEnable:{
			type:"Boolean",
		},
		sitekey:{
			type:'string'
		},
		secretkey:{
			type:'string'
		},
		email_to:{
			type:'string'
		},
		email_subject:{
			type:'email_subject'
		},
		formlayout:{
			type: "string",
		},
		gender_type:{
			type:"string",
		}
		

	},
	edit, // Object shorthand property - same as writing: edit: edit,
	save: props => {
		return null;
	}, // Object shorthand property - same as writing: save: save,
} );
