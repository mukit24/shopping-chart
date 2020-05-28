import React, { Component } from 'react';

class Forms extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            id: 0,
            value: 0,
            product_name: ''
        };

        this.state = this.initialState;

    }
    handleChange = event => {
        const { value } = event.target;

        this.setState({
            product_name : value,
            id:this.props.id_num+1
        });
    }
    onFormSubmit = event => {
        event.preventDefault();
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }
    render() { 
        const { product_name } = this.state
        return ( 
            <form onSubmit={this.onFormSubmit}>
                <label for="name">Product Name: </label>
                <input 
                    type="text" 
                    name="product_name" 
                    id="product_name"
                    value={product_name} 
                    onChange={this.handleChange} />
                <button className="btn btn-primary m-2" type="submit">
                    Submit
                </button>
            </form>
         );
    }
}
 
export default Forms;