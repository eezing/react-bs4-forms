
import React from 'react';
import Label from '../elements/Label';
import Fieldset from '../elements/Fieldset';

export default function (Component) {

	return React.createClass({
		propTypes: {
			id: React.PropTypes.string,
			name: React.PropTypes.string.isRequired,
			label: React.PropTypes.string.isRequired,
			labelHide: React.PropTypes.bool,
			required: React.PropTypes.bool,
			disabled: React.PropTypes.bool,
			valid: React.PropTypes.bool,
			value: React.PropTypes.string,
			className: React.PropTypes.string,
			style: React.PropTypes.object,
			size: React.PropTypes.oneOf(['sm', 'lg'])
		},
		render() {

			const { className, style, labelHide, ...elProps} = this.props;

			return (
				<div className={className} style={style}>
					<Fieldset valid={this.props.valid} size={this.props.size}>
						<Label
							id={this.props.id || this.props.name}
							text={this.props.label}
							required={this.props.required}
							hide={labelHide}
						/>
						<Component {...elProps} />
					</Fieldset>
				</div>
			);
		},
		shouldComponentUpdate(nextProps) {
			return (nextProps.value !== this.props.value || nextProps.valid !== this.props.valid || nextProps.disabled !== this.props.disabled);
		}
	});
}
