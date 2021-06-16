import React from 'react';
import AiDrawer from '../src/index.js';

export default {
	component: AiDrawer,
	title: 'AiDrawer',
	argTypes: {
		color: {
			options: ['#ffffff', '#9e9e9e', '#ff9800', '#4caf50', '#03a9f4', '#00bcd4'],
			control: { type: 'select' }
		}
	},
};


const Template = (args) => <AiDrawer {...args} />;

export const Demo = Template.bind({});
Demo.args = {
	opened: false,
	anchor: 'left',
	color: '#ffffff',
	width: 280
};