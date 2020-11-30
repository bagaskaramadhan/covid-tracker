import React from 'react'
import { Card } from 'react-bootstrap'

const Cards = () => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Kasus</Card.Title>
                <Card.Text>1000</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">Orang</Card.Subtitle>
                <Card.Text>Jumlah angka kasus COVID-19</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Cards