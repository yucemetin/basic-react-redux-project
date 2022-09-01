import React, { Component } from 'react'
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Badge
} from 'reactstrap';
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as cartAction from "../../redux/actions/cartActions"
import alertify from 'alertifyjs';
import { Link } from "react-router-dom"

class CartSummary extends Component {

    removeItemFromCart = product => {
        this.props.actions.removeFromCart(product)
        alertify.error(product.productName + " Remove From Cart...", 1.5)
    }


    renderCart() {
        return <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
                Cart <Badge color='dark'>{this.props.cart.length}</Badge>
            </DropdownToggle>
            <DropdownMenu>
                {
                    this.props.cart.map(cartItem => {
                        return <DropdownItem key={cartItem.product.id}>
                            <Badge onClick={() => this.removeItemFromCart(cartItem.product)} style={{ margin: "0 5px 0 0 " }} color='danger'>X</Badge>
                            {cartItem.product.productName}
                            <Badge style={{ margin: "0 0 0 5px " }} color='success'>{cartItem.quantity}</Badge>
                        </DropdownItem>
                    })
                }
                <DropdownItem divider />
                <DropdownItem>
                    <Link to="cart">
                        Go to Cart Detail
                    </Link>
                </DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>
    }
    render() {
        return (
            <div>
                {
                    this.props.cart.length > 0 ? this.renderCart() : null
                }

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


export default connect(mapStateToProps, mapDispatchToProps)(CartSummary)