
import React from 'react'
import Label from '../elements/Label.jsx'
import Fieldset from '../elements/Fieldset.jsx'
import Input from '../elements/Input.jsx'

export default React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        onUpdate: React.PropTypes.func.isRequired,
        label: React.PropTypes.string.isRequired,
		type: React.PropTypes.string,
        placeholder: React.PropTypes.string,
        value: React.PropTypes.string,
        disabled: React.PropTypes.bool,
        valid: React.PropTypes.bool
    },
    render,
    shouldComponentUpdate
})

function render() {
    return (
        <Fieldset valid={this.props.valid}>
            <Label
				id={this.props.id || this.props.name}
				text={this.props.label}
				required={this.props.required}
			/>
            <Input {...this.props} />
        </Fieldset>
    )
}

function shouldComponentUpdate(nextProps) {
    return nextProps.value !== this.props.value
}