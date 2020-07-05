import React, { Component } from 'react';

class Counter extends Component {
    //object that includes any data that any component needs
    state = {
        count: 0,
        imageurl: "https://picsum.photos/200",
        tags: ['Item 1', 'Item 2','Item 3']
    };

    renderTags(){
        if (this.state.tags.length === 0) return <p>There are no tags!</p>;

        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>) }</ul>;
    }
    styles={
        fontSize:'20px',
        fontWeight: 'bold'
    };

    /*constructor(){
        super();
        this.handleIncrement=this.handleIncrement.bind(this);
    }*/

    handleIncrement = (product) => {
        console.log(product);
        this.setState({ count: this.state.count + 1 });
    }

    /*doHandleIncrement = () => {
        this.handleIncrement({ id: 1 });
    };*/
    //use this property using {this.styles} in the react fragment below
//<span style={this.styles} className="badge badge-primary m-3">{this.formatCount()}</span>
//<span style={ { fontSize:30 }} className="badge badge-primary m-3">{this.formatCount()}</span>

/*replaced the div with return fragment*/   
    render() { 

        return (
        <React.Fragment>
            <img src={this.state.imageurl} alt="image"></img><br></br>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={() => this.handleIncrement(product)} className="btn btn-secondary btn-sm">Increment</button>
            {this.state.tags.length === 0 && "please create a new tag!"}
            { this.renderTags() }
        </React.Fragment>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;