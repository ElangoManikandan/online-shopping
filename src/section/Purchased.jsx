import { useNavigate } from "react-router-dom"
function Purchased(){
    const navigate=useNavigate();
    setTimeout(()=>{
        navigate('/Products')
    },3000)
    return<>
    <p className="products-loading">Purchased Successfully..Thank You. You will be redirected to Products Page</p></>

}
export default Purchased