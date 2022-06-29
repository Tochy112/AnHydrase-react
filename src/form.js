import React, {Component}  from 'react';


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ""};
        this.handleChange= this.handleChange.bind(this)
        this.handleSubmit= this.handleSubmit.bind(this)
    }

    handleChange = (e) => {
        this.setState({value: e.target.value})
        console.log("Not working")
    }
    handleSubmit = (e) =>{
        alert("Welcome" +" " + this.state.value +" " + "to your dashboard");
        console.log("There is no problem")

        e.preventDefault();
    }


    render() {
        return (
            <div>
                <form onSubmit= {this.handleSubmit}>
                <div>
                    <label> Username: </label>
                    <input  type="text" placeholder ="unique ID" />

                </div>
                <div>
                    <label> Password: </label>
                    <input type="password" placeholder ="password" />
                </div>
                <div>
                    <label> Review: </label>
                    <textarea value={this.state.value} cols="30" rows="10" onChange={this.handleChange} />
                </div>
                
                </form>

                
            </div>
        )
    }
}

export default Form