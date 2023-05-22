import React from "react";

class Form extends React.Component {
    state = {
        searchTerm: "",
    };

    handleChange = (e) => {
        this.setState({ searchTerm: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const searchTerm = this.state.searchTerm;

        this.setState({ searchTerm: "" });
        this.props.handleSubmit(searchTerm);
    };
    render() {
        return (
            <div className='form'>
                <form onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.handleChange}
                        value={this.state.searchTerm}
                    />
                </form>
            </div>
        );
    }
}

Form.displayName = 'Form'

export default Form