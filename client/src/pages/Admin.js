import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import CreateType from "../components/modals/CreateType";
import CreateBrand from "../components/modals/CreateBrand";
import CreateProduct from "../components/modals/CreateProduct";

const Admin = () => {
    const [brandVissible, setBrandVisible] = useState(false)
    const [typeVissible, setTypeVisible] = useState(false)
    const [productPagVissible, setProductPagVisible] = useState(false)

    return (
        <Container className="d-flex flex-column">
            <Button 
            variant={"outline-dark"} 
            className="mt-4 p-2"
            onClick={() => setTypeVisible(true)}
            >
                Добавить тип
            </Button>
            <Button 
            variant={"outline-dark"} 
            className="mt-4 p-2"
            onClick={() => setBrandVisible(true)}
            >
                Добавить бренд
            </Button>
            <Button 
            variant={"outline-dark"} 
            className="mt-4 p-2"
            onClick={() => setProductPagVisible(true)}
            >
                Добавить продукт
            </Button>
            <CreateBrand show={brandVissible} onHide={() => setBrandVisible(false)} />
            <CreateProduct show={productPagVissible} onHide={() => setProductPagVisible(false)} />
            <CreateType show={typeVissible} onHide={() => setTypeVisible(false)} />
        </Container>

    );
};

export default Admin;