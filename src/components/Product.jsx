export default function Product(props){
    let product = props.data
return(
    <div className="product">
<h2>
    
{product.name}
    {/* {product.sale ? <span className ="sale"> sale</span>  : " not in sale" } */}
    
{product.sale && <span className="sale">sale</span> } 
</h2>
<p>Rs:{product.price}</p>
<p>Lorem ipsum dolor  elit. Aliquam consectetur vero quia! Temporibus itaque aspernatur obcaecati doloremque, similique praesentium quasi dolorum numquam perferendis delectus? Error dolorem dolorum facilis commodi ea.</p>
{/* <a href="">facebook</a>
<a href=""> instagram</a> */}
</div>

)
}
