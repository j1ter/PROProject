import React from "react";
import {Button, Card, Col, Container, Image, Row} from 'react-bootstrap'
import bigStar from'../assets/bigStar.png'

const ProductPage = () => {
    const product = {id: 2, name: 'Peppermint Fluoride-Free Toothpaste', price: 10, rating: 5, img: 'f70eb146-c249-4198-aa9b-31b55eec07d7.jpg'}
    const description = [
        {id:1, title: 'Компания', description: 'Seventh Generation'},
        {id:2, title: 'Изготовлен', description: 'Кокосовое масло, ши, эфирные масла'},
        {id:3, title: 'Дополнительное', description: 'Антисептические свойства'},
        {id:4, title: 'Тип кожи', description: 'Для всех типов кожи'},
        {id:5, title: 'Вес', description: '100 грамм'},
    ]

    return (
        <Container className="mt-3">
            <Row>

            
            <Col md={4}>
                <Image width={300} height={300} src={product.img} />

            </Col>
            <Col md={4}>
                <Row className="d-flex flex-column align-items-center">
                    <h2>{product.name}</h2>
                    <div
                    className="d-flex align-items-center justify-content-center"
                    style={{background: `url(${bigStar}) no-repeat center center`, width:240, height: 240,backgroundSize: 'cover', fontSize:64}}
                    
                    >
                        {product.rating}
                    </div>
                </Row>
                
            </Col>
            <Col md={4}>
                <Card
                className="d-flex flex-column align-items-center justify-content-around"
                style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                >
                    <h3>{product.price}</h3>
                    <Button variant="outline-dark">Добавить в корзину</Button>
                </Card>
                
            </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>Подробная информация</h1>
                {description.map((info, index) => 
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}, 
                    </Row>
                    )}
            </Row>

        </Container>
    );
};

export default ProductPage;