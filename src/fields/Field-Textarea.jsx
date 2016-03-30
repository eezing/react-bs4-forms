
import React from 'react'
import Label from '../elements/El-Label.jsx'
import Fieldset from '../elements/El-Fieldset.jsx'
import Textarea from '../elements/El-Textarea.jsx'

export default React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        onUpdate: React.PropTypes.func.isRequired,
        label: React.PropTypes.string.isRequired,
        rows: React.PropTypes.string,
        placeholder: React.PropTypes.string,
        value: React.PropTypes.string,
        disabled: React.PropTypes.bool,
        valid: React.PropTypes.bool
    },
    render,
    shouldComponentUpdate
})

function render() {

    const textareaProps = {
        id: this.props.name,
        name: this.props.name,
        onUpdate: this.props.onUpdate,
        rows: this.props.rows,
        placeholder: this.props.placeholder,
        value: this.props.value,
        disabled: this.props.disabled
    }

    return (
        <Fieldset valid={this.props.valid}>
            <Label id={this.props.name} text={this.props.label} required={this.props.required} />
            <Textarea {...textareaProps} />
        </Fieldset>
    )
}

function shouldComponentUpdate(nextProps) {
    return nextProps.value !== this.props.value
}
