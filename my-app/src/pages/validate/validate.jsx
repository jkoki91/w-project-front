import { useEffect } from "react";
import Button from "react-bootstrap/esm/Button";
import { useNavigate, useSearchParams } from "react-router-dom";



function Validate() {
    const [queryParams] = useSearchParams();
    const param = queryParams.get('token')
    const navigate = useNavigate()

    const handleValidate = ()=>{
        navigate('/')
   }
    useEffect(() => {
        // fetch(`http://localhost:4000/auth/validate?token=${param}`)
        fetch(`https://mysterious-retreat-85632.herokuapp.com/auth/validate?token=${param}`)
            .then(d => d.json())
            .then(data => console.log(data))

    },[]);


    return <Button onClick={handleValidate}>Volver</Button>


}

export default Validate;