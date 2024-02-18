import { Link, useNavigate} from "react-router-dom";

const Login = () => {
    let navigate = useNavigate();

    return (
        <div>
            <h2 className="text-slate-900  text-5-l">Login</h2>
            <div>
                <button type="submit" onClick={() => {navigate('/home')}} className="hover:underline"> Login useNavigate</button>
                <Link to='/home' className="houver:underline mx-4">Login por Link</Link>
            </div>
        </div>

    )
}

export default Login 