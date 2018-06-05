import React from 'react';
import { withState } from 'recompose';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.label`
	position: relative;
	display: inline-block;
	width: 2.3rem;
	height: 1.5rem;

	input {
		visibility: hidden;
	}
`;

const Slider = styled.span`
	position: absolute;
	background-color: ${({ checked, theme, disabled }) => {
		if (disabled) {
			return theme.colors.rad;
		}

		return checked ? theme.colors.rad : theme.colors.white;
	}};
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	transition-property: color;
	transition: .4s;
	border-radius: 2.125rem;
	border: 1px solid ${({ theme, checked }) => checked ? 'transparent' : theme.colors.grey2};

	&:before {
		position: absolute;
		content: "";
		height: 1.25rem;
		width: 1.25rem;
		left: ${({ checked }) => (checked ? '14.5px' : '1px')};
		bottom: 1px;
		background-color: ${({ theme }) => theme.colors.white};
		transition-property: color;
		transition-timing-function: ease-in-out;
		transition: 200ms;

		transition-timing-function: cubic-bezier(0.64, 0.57, 0.67, 1.53);
		transition-duration: 250ms;

		border-radius: 50%;
		box-shadow: 0.5px 0.5px 5px ${({ theme, checked }) => checked ? theme.colors.grey4 : theme.colors.grey2};
	}
`;

const Toggle = ({
	onToggle, checked, ...props
}) => (
		<Container>
			<input
				type="checkbox"
				{...props}
				value={checked}
				checked={checked}
				onChange={() => props.input.onChange && props.input.onChange(!checked)}
				onClick={() => {
					props.input.onChange && props.input.onChange(!checked)
					onToggle(!checked);
				}}
			/>
			<Slider
				disabled={checked}
				checked={checked}
			/>
		</Container>
	);

Toggle.propTypes = {
	checked: PropTypes.bool,
	disabled: PropTypes.bool,
	onToggle: PropTypes.func,
};

Toggle.defaultProps = {
	checked: false,
	disabled: false,
	onToggle: () => false,
};

export default withState('checked', 'onToggle', ({ checked }) => checked)(Toggle);
