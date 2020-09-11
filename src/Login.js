import React,{useState} from 'react'
import Loading from './loading.js'
import swal from 'sweetalert';
function Login(props) {

    
    const url ="https://eventmanager-backend21.herokuapp.com/"


    const [LoginUsername, setLoginUsername] = useState("")
    const [LoginPassword, setLoginPassword] = useState("")
    const [RegisterUsername , setRegisterUsername] = useState("")
    const [RegisterPassword1 , setRegisterPassword1] = useState("")
    const [RegisterPassword2 , setRegisterPassword2] = useState("")
    const[loading,setLoading] = useState(false)
    

    
    async function submitLogin(e){
        localStorage.clear();

        e.preventDefault();
setLoading(true);
        console.log("name :",LoginUsername)
        console.log("Password :",LoginPassword)

        
        try{
            let output = await fetch(url,{
                method:"POST",
                headers: {"Content-type":"application/json"},
                body: JSON.stringify({name : LoginUsername,password : LoginPassword, SubmitType:"Login"})
            })

            let value = await output.json();

            
            if(Object.keys(value.dataUser).length === 0){
                setLoading(false);
                swal("User Not Found")
            }else{
                
                if(value.result === true){
                    setLoading(false);
                    
                   
                    props.setstate("Homepage")
                    localStorage.setItem("name", value.dataUser[0].Username);
                    props.setName(value.dataUser[0].Username)
                    
             
                }
                else{
                    setLoading(false);
                    swal("Password Incorrect")
                }
            }
        }catch(err){
            console.log(err)
        }

    }

    async function submitRegister(e){
        localStorage.clear();
        setLoading(true);

        e.preventDefault();

        
        if(RegisterPassword1 === RegisterPassword2){
            try{

               
                let output = await fetch(url,{
                    method:"POST",
                    headers: {"Content-type":"application/json"},
                    body: JSON.stringify({name : RegisterUsername,password : RegisterPassword1, SubmitType:"Register"})
                })
    
                let value = await output.json();
                console.log("Value in Register : ",value)
                setLoading(false);
                swal("User Sucessfully Registered,You Can Login Now")
              

                //Clearing Input Feilds
                setRegisterUsername("")
                setRegisterPassword1("")
                setRegisterPassword2("")

            }catch(err){
                console.log(err)
            }
        }else{
            
            setLoading(false);
            swal("Passwords Do Not Match")
        }
            }

    return (
        <div id="main">
            <h1 className="mainheading"><center>Event Manager</center></h1>
{/* Login */}
            <div className="content">
                <div className="heading">Login</div>
                <div>
                    <input type="text" id="LoginName"  placeholder="Enter Your User Name" onChange={e => setLoginUsername(e.target.value)} ></input>
                </div>
                <div>
                    <input type="password" id="LoginPassword"  placeholder="Enter Your Password" onChange={e => setLoginPassword(e.target.value)}></input>
                </div>
                    <button type="submit" id="btn" onClick={submitLogin}>Submit</button>
                    {loading === true ? <Loading /> :null}
            </div>

{/*Registration */}
            <div className="content">
                <div className="heading">Registration</div>
                <div>
                    <input type="text" id="RegisterName"  placeholder="Enter A User Name" onChange={e => setRegisterUsername(e.target.value)} value={RegisterUsername}></input>
                </div>
                <div>
                    <input type="password" id="RegisterPassword1"  placeholder="Enter A Password" onChange={e => setRegisterPassword1(e.target.value)} value={RegisterPassword1} ></input>
                </div>
                <div>
                    <input type="password" id="RegisterPassword2"  placeholder="Enter The Password Again" onChange={e => setRegisterPassword2(e.target.value)} value={RegisterPassword2} ></input>
                </div>
                    <button type="submit" id="btn1" onClick={submitRegister}>Submit</button>
                    {loading === true ? <Loading /> :null}
            </div>
        </div>
    )
}

export default Login

