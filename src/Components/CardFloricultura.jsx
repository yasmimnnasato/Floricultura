
import React, { useState, useEffect } from 'react';
import './CardFloricultura.css'

export default function CardFloricultura({ dados }) {

    return (

        <div className="card">
            <h1>{dados.categoria}</h1>
            <h1>{dados.preco}</h1>
            <h1>{dados.descricao}</h1>
            <h1>{dados.estoque}</h1>
        </div>

    );
}

