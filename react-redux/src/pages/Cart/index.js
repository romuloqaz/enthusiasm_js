import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';
import { Container, ProductTable, Total } from './styles';

function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="https://static.netshoes.com.br/produtos/tenis-adidas-falcon-masculino/26/COL-4399-026/COL-4399-026_zoom2.jpg?ts=1584531781&ims=326x"
                alt="Tenis Massa"
              />
            </td>
            <td>
              <strong>Tenis muito massa</strong>
              <span>R$ 129,00</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#7169c1" />
                </button>
                <input type="number" readOnly value={1} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#7169c1" />
                </button>
              </div>
            </td>
            <td>
              <strong>R$ 258,80</strong>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdDelete size={20} color="#7169c1" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar Pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>R$ 1.920,28</strong>
        </Total>
      </footer>
    </Container>
  );
}

export default Cart;
