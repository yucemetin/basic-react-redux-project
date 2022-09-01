import React, { Component } from 'react'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as cartAction from "../../redux/actions/cartActions"
import { Table, Button } from "reactstrap"
import alertify from 'alertifyjs'

class CartDetail extends Component {

    removeItemFromCart = product => {
        this.props.actions.removeFromCart(product)
        alertify.error(product.productName + " Remove From Cart...", 1.5)
    }

    render() {
        return (
            <div>
                <Table striped>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Unit Price</th>
                            <th>Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.cart.map(cartItem => {

                                return (<tr key={cartItem.product.id}>
                                    <td>{cartItem.product.productName}</td>
                                    <td>{cartItem.product.unitPrice}</td>
                                    <td>{cartItem.product.quantity}</td>
                                    <td><Button color='danger' outline onClick={() => this.removeItemFromCart(cartItem.product)}>X</Button></td>
                                </tr>)
                            })}

                    </tbody>
                </Table>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            removeFromCart: bindActionCreators(cartAction.removeFromCart, dispatch),
        }
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cartReducer
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartDetail)