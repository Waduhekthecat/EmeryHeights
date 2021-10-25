import react, { useState, SetStateAction, Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import  CardProps  from './CardProps';

interface CardPropMain extends React.Props<any> {
    id: any;
    platform: any;
    price: any;
    quantity: any;
    expiry: any;
    strike: any;
};

class CardPropMain extends Component<CardPropMain, any> {
    constructor() {
        super();
        this.state = {
            result:  [
                {   
                    id: 1,
                    platform: "Hegic",
                    price: "$48,500",
                    quantity: "2",
                    expiry: "11/01/2021",
                    strike: "$48,000"
                },
                {   
                    id: 2,
                    platform: "Auctus",
                    price: "$48,500",
                    quantity: "2",
                    expiry: "11/01/2021",
                    strike: "$48,000"
                },
                {   
                    id: 3,
                    platform: "Hedget",
                    price: "$48,500",
                    quantity: "2",
                    expiry: "11/01/2021",
                    strike: "$48,000"
                },
                {   
                    id: 4,
                    platform: "Opium",
                    price: "$48,500",
                    quantity: "2",
                    expiry: "11/01/2021",
                    strike: "$48,000"
                },
                {   
                    id: 5,
                    platform: "Premia",
                    price: "$48,500",
                    quantity: "2",
                    expiry: "11/01/2021",
                    strike: "$48,000"
                },
                {   
                    id: 6,
                    platform: "Opyn",
                    price: "$48,500",
                    quantity: "2",
                    expiry: "11/01/2021",
                    strike: "$48,000"
                }
            ]
        }
    }

    removeResult(id) {
        this.setState({ result: this.state.result.filter(result => result.id !== id)});
    };

    render() {
        let resultCards = this.state.result.map(result => {
            return (
                <Col sm="4">
                <CardProps key={result.id} removeResult={this.removeResult.bind(this)} 
                result={result} />
                </Col>    
            )
        })
        return (
            <Container fluid>
                <Row>
                    {resultCards}
                </Row>
            </Container>
        )
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CardPropMain);