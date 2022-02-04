
export default function Login() {

return (
<>
    <div>Login Component</div>    
    <input
        className={"input m-1 "}
        type="text"
        placeholder={"User Name"}
        //onChange={}
        //value={}
    />
    <input
        className={"input m-1 "}
        type="text"
        placeholder={"your secret word"}
        //onChange={}
        //value={}
    />
    <button 
        className={"btn-primary m-1"}
        //OnClick={}
    > Log me in! </button>
</>
)
}
