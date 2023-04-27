import React, { useContext, useState } from "react";
import { Col, Dropdown, Form, FormControl, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Context } from "../..";

const CreateProduct = ({show, onHide}) => {
    const {product} = useContext(Context)
    const [info, setInfo] = useState([])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }



    return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить новый тип
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Dropdown className="mt-2 mb-2">
                <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
                <Dropdown.Menu>
                    {product.types.map(type =>
                        <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                        )}
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="mt-2 mb-2">
                <Dropdown.Toggle>Выберите брэнд</Dropdown.Toggle>
                <Dropdown.Menu>
                    {product.brands.map(brand =>
                        <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                        )}
                </Dropdown.Menu>
            </Dropdown>
            <Form.Control 
                className="mt-3"
                placeholder="Введите название продукта"
            />
            <Form.Control 
                className="mt-3"
                type="number"
            />
            <Form.Control 
                className="mt-3"
                placeholder="Введите название продукта"
                type="file"
            />
            <hr/>
            <Button
              variant="outline-dark"
              onClick={addInfo}
            >
                Добавить новое свойство
            </Button>
            {
                info.map(i =>
                    <Row className="mt-4" key={i.number}>
                        <Col md={4}>
                            <FormControl
                            placeholder="Введите название свойства"
                            

                            />
                        
                        </Col>
                        <Col md={4}>
                            <FormControl
                            placeholder="Введите описание свойства"
                            
                            
                            />
                        
                        </Col>
                        <Col md-4>
                            <Button
                             variant={"outline-danger"}
                             onClick={() => removeInfo(i.number)}
                             
                             >
                                Удалить
                            </Button>
                        
                        </Col>
                    </Row>
                    )
            }
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
        <Button variant="outline-success" onClick={onHide}>Добавить</Button>
      </Modal.Footer>
    </Modal>
    );
};

export default CreateProduct;