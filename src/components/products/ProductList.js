import React, { Component } from 'react'
import { connect } from "react-redux"
import { Badge, Table, Button } from "reactstrap"
import { bindActionCreators } from "redux"
import * as productAction from "../../redux/actions/productAction"
import * as cartActions from "../../redux/actions/cartActions"
import alertify from "alertifyjs"

class ProductList extends Component {

  componentDidMount() {
    this.props.actions.getProducts()

  }

  addToCart = (product) => {
    this.props.actions.addToCart({ quantity: 1, product })
    alertify.success(product.productName + " Added to Cart", 1.5)
  }

  render() {
    return (
      <div>
        <h3>Products <Badge color='info'>{this.props.currentCategory.categoryName}</Badge> </h3>
        <Table striped>
          <thead>
            <tr>
              <th>Id</th>
              <th>Product Name</th>
              <th>Quantity Per Unit</th>
              <th>Unit Price</th>
              <th>Units In Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.products.map(product => {

                return (<tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.productName}</td>
                  <td>{product.quantityPerUnit}</td>
                  <td>{product.unitPrice}</td>
                  <td>{product.unitsInStock}</td>
                  <td><Button color='success' outline onClick={() => this.addToCart(product)}>add</Button></td>
                </tr>)
              })}

          </tbody>
        </Table>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productAction.getProducts, dispatch),
      addToCart: bindActionCreators(cartActions.addToCart, dispatch),
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
