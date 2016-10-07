import React from 'react'

const Hello =  React.createClass( {
    constructor(props) {
        super(props);
        this.displayName = ' hello';
    }
    render() {
        return <div> hello</div>;
    }
})

export default  Hello;
