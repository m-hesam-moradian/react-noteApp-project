import React, { Component } from 'react'

export default class Note extends Component {
let 
    render() {
                const { id, title, color } = this.props.obj;

        return (
            <div className="card shadow-sm rounded" style={{ backgroundColor: color }}><p className="card-text p-3">{ title}</p></div>
        )
    }
}
