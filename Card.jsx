function Card(props) {
  return (
      <div className="product">
          <h2>{props.product.title}</h2>
          <p>
              <span className="old-price">Rs:{props.product.oldPrice}</span> Rs:{props.product.price}
          </p>
          <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi ea odio, perferendis, fugit nostrum
              ducimus repellat minima at, sapiente corrupti quia? Non fuga perferendis maiores nemo, accusantium illo?
              Quas, nostrum.
          </p>
      </div>
  )
}

export default Card