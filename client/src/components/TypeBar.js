import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "..";
import ListGroup from 'react-bootstrap/ListGroup';


const TypeBar = observer(() => {
    const {product} = useContext(Context)

    return (
        <ListGroup>
            {product.types.map(type =>
                <ListGroup.Item 
                style={{cursor: 'pointer',
                backgroundColor: type.id === product.selectedType.id ? '#27AE60' : '',
                color: type.id === product.selectedType.id ? 'white' : '',
            }}
                activ={type.id === product.selectedType.id}
                onClick={() => product.setSelectedType(type)}
                key={type.id}
                
                >
                    {type.name}
                </ListGroup.Item>
                
                )}
        </ListGroup>
    );
});

export default TypeBar;