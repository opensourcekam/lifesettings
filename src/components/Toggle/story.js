import React from 'react';
import { storiesOf } from '@storybook/react';
import Toggle from './';

storiesOf('Toggle', module)
	.add('base', () =>
		<Toggle>Component</Toggle>
	);
