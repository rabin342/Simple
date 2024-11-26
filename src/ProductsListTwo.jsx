import Product from "./components/Product"
export default function ProductsListTwo() {
  let products =[
    
      {
        name:"watch",
        price:1000,
        sale: true,
    },
    {
      sale:true,
      name:"watch-1",
      price:1000,
  },
  {
    featured:true,
    name:"watch-2",
    price:1000,
}, {
  
  name:"watch-3",
  price:1000,
}


  ]
  
  //   let featuredProducts=[
  //   {
  //     featured: true,
  //     name:"phone-1",
  //     price:1000,
  //   },
  //   {
  //     featured: true,
  //     name:"phone-2",
  //     price:1000,
  //   },
  //   {
  //     featured: true,
  //     name:"phone-3",
  //     price:1000,
  //   }
  // ]
  // let featuredProducts = products.filter((el) =>{
  //   if(el.featured){
  //     return true
  //   }
  // })
  let featuredProducts = products.filter((el)=> el.featured)
  

// let normalProducts = products.filter((el) => {
//   if (!el.featured) {
//     return true
//   }
// })
let normalProducts = products.filter((el)=> !el.featured)
  

  
    return   (
        <div>
        <h1>featured products List</h1>
        <div className="products-list">
        
       {/* {featuredProducts.map((product) => {
      return <Product data={product}/>
      
    })}
       */}
            {products 
            .filter((el) =>el.featured)
                    .map((el) => {
                        return <Product data={el}/>
                    
                })}
            
      
       </div>
       <h1>Normal products List</h1>
        <div className="products-list">
        {
       normalProducts.map((product) => {
          return  <Product data={product}/>
      })}
        </div>
       
       
      </div>
    ) 
    
}


