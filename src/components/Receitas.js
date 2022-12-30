import React, { Component } from 'react';
import axios from 'axios';
import '../components/Receitas.css';

export default class Receitas extends Component {
    state = {
        receitas: []
    }

    componentDidMount() {
        axios.get('http://localhost:8000/api/receitas')
            .then(res => {
                const receitas = res.data;
                this.setState({ receitas })
            })
    }

    render() {
        return (
            <div>
                {this.state.receitas.map((p, id )=>
                    <div className="CardReceitas" key={id}>
                        <h3>{p.nome}</h3>
                        <p>{p.ingredientes}</p>
                    </div>)}
            </div>
        );
    }
}