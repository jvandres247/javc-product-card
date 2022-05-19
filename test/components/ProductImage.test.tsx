import React from 'react'
import renderer from 'react-test-renderer'
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/products';


describe('Product image', () => {
  test ('Debe mostrar el componente con la imagen personalizada',() => {
    const wrapper = renderer.create(
      <ProductImage img='https://hola.jpg'></ProductImage>
    )
    expect(wrapper.toJSON()).toMatchSnapshot();
    
  });

  test('Debe de mostrar el componente con la imagen del producto', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>
        {
          () => (
            <ProductImage/>
          )
        }
      </ProductCard>
    )
    expect(wrapper.toJSON()).toMatchSnapshot();
   
  })
});
