import { useEffect, useState } from "react"
import ProductCard from "../Components/ProductCard"
import { axiosInstance } from "../Config/axiosinstance"

const ProductPage = () => {
  const [productData, setProductData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  let getProductsData = async ()=>{
    try {
      let res = await  axiosInstance.get('/products')
      console.log(res)
      setProductData(res.data)
      setIsLoading(false)
    } catch (error) {
      console.log("erro in prodicts api",error)
      
    }
  }

  useEffect(()=>{
    getProductsData()
  },[])

  if(isLoading) return <h1 className="font-bold text-3xl "> Product is Loading</h1>


  return (
    <div className="grid grid-cols-4 gap-5">
      { productData.map((val)=>(
        <ProductCard key={val.id} product={val}/>
      ))
      }
    </div>
  )
}

export default ProductPage
