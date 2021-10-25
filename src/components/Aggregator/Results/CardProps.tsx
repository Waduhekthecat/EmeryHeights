import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBlock, 
CardTitle, CardSubtitle, Button } from 'reactstrap';
import CardPropMain from './CardPropMain';


class CardProps extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    render() {
        let { id, platform, price, quantity, expiry, strike} = this.props.result;
        return (
            <div>
                <Card>
                    <CardImg/>
                    <CardBlock>
                        <CardTitle platform={platform}>Platform={platform}</CardTitle>
                        <CardSubtitle price={price}>Option Cost: {price}</CardSubtitle>
                        <CardText quantity={quantity}>Quantity: {quantity}</CardText>
                        <CardText expiry={expiry}>Expiry: {expiry}</CardText>
                        <CardText strike={strike}>Strike: {strike}</CardText>
                        <Button color="danger" onClick = {() => this.props.removeResult(id)}>Select</Button>
                    </CardBlock>
                </Card>

            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardProps);