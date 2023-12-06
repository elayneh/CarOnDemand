import { useNavigate } from "react-router-dom"

const navigationUtils = {
    navigate: (path)=>{
        const navigate = useNavigate()
        navigate(path)
    }
}

export default navigationUtils