import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import google from "../../asset/images/googleIcon.svg";
import facebook from "../../asset/images/facebook.svg";
import FromtOtpInput from "./OtpInput";
function LoginFrom() {
  return (
    <Form>
      <h1 className="heading5 my-3">Create Account </h1>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="number" placeholder="Enter Number" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      {/* <h1 className="heading5 my-3 text-center">Enter Otp </h1>
            
      <FromtOtpInput />
       */}
      <div className="d-flex justify-content-center m-2 mt-4">
        <button className="btn1 modalsignup">Sign up</button>
      </div>
      <div className="py-5 mt-3">
        <p className="text-center mb-4 ">or</p>
        <div className="d-flex justify-content-around">
          <button className="btn3">
            {" "}
            <img src={google} alt="" /> Google
          </button>
          <button className="btn3">
            <img src={facebook} alt="" /> FalceBook
          </button>
        </div>
        <p className="smallText3 mt-5 text-center">
          By singing up you accept the <span className="blue"> Team </span> of{" "}
          <span className="blue"> Service </span> and{" "}
          <span className="blue"> Privacy Policy </span>
        </p>
      </div>
    </Form>
  );
}

export default LoginFrom;
