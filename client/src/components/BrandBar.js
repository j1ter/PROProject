import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "..";
import { Card, Row } from "react-bootstrap";

const BrandBar = observer(() => {
    const {product} = useContext(Context)

    
    return (
        <Row  className="d-flex">
            {product.brands.map(brand => 
                <Card
                style={{ cursor: "pointer", width: "200px", margin: "10px" }}
                key={brand.id}
                className="p-3"
                onClick={() => product.setSelectedBrand(brand)}
                border={brand.id === product.selectedBrand.id ? 'danger' : 'light'}
                
                >
                    {brand.name}
                </Card>
                )}

        </Row>
    );
});

export default BrandBar;