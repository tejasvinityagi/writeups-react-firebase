import { Input } from "postcss"






const Signin = ()=>{
    return(
        <>
        <div >email, username
        <input
        type={'text'}
        placeholder={"Enter your email or username"}
        
        />
        </div>


        <div>password
            <input
            type={'password'}
            placeholder={'Password'}
            
            />
        </div>

        <div>login with google</div>
        
        </>
    )
}

export default Signin