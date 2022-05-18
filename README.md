# javc-product-card

Este es un paquete de pruebas de despliegue en NPM

### Andres

## Ejemplo

```
import {ProductImage, ProductTitle, ProductButtons } from 'javc-product-card'
```

```
<ProductCard 
    key={ product.id }
    product={ product }
    initialValues={{
        count: 6,
        // maxCount: 10,
    }}
>
    {
        ({ reset, count, isMaxCountReached, maxCount, increaseBy  }) => (
            <>
                <ProductImage/>
                <ProductTitle/>
                <ProductButtons/>
            </>
        )
    }
</ProductCard>
```