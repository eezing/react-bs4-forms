
import React from 'react';
import Label from '../elements/Label';
import Fieldset from '../elements/Fieldset';
import Select from '../elements/Select';

export default React.createClass({
	propTypes: {
		name: React.PropTypes.string.isRequired,
		onUpdate: React.PropTypes.func.isRequired,
		label: React.PropTypes.string.isRequired,
		options: React.PropTypes.array.isRequired,
		placeholder: React.PropTypes.string,
		value: React.PropTypes.string,
		valid: React.PropTypes.bool
	},
	render,
	shouldComponentUpdate
});

function render() {

	const { label, valid, ...elProps } = this.props;

	return (
        <Fieldset valid={this.props.valid}>
            <Label
				id={this.props.id || this.props.name}
				text={this.props.label}
				required={this.props.required}
			/>
			<Select {...elProps} />
        </Fieldset>
    );
}

function shouldComponentUpdate(nextProps) {
	return (nextProps.value !== this.props.value || nextProps.valid !== this.props.valid);
}
