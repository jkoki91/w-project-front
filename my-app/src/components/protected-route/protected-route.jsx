import {Navigate} from 'react-router-dom';

function ProtectedPage({children}){
    const access_token = localStorage.getItem('access_token'); 
    
    if(access_token===null){ 
        return <Navigate to={'/'} replace></Navigate>
    }
    return children; 
}

export default ProtectedPage;