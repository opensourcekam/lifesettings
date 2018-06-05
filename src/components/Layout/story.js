import React from 'react';
import { storiesOf } from '@storybook/react';
import Layout from './';

storiesOf('Layout', module)
	.add('base', () =>
		<Layout>Component</Layout>
	);
