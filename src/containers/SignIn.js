import React, { useEffect,useState } from "react";
import { Button, Checkbox, Form, Input,Switch,Alert } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { userSignIn } from "../appRedux/actions/Auth";
import IntlMessages from "util/IntlMessages";
import InfoView from "components/InfoView";


const SignIn = (props) => {
  const dispatch = useDispatch();
  const token = useSelector(({ auth }) => auth.token);
  const error = useSelector (({common})=> common.error)
  const [clname,setclname] = useState('')
  const [clname1,setclname1] = useState('')
  const [for_tick,setfor_tick] = useState(false)
  const [chumchum,setchumchum] = useState(false)
  const [uname,setuname] = useState(``)
  const [pwd,setpwd]  = useState(``)
  const [messages,setmessages ] = useState(`nomsg`)
  const [types,settypes] = useState(`notp`)
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const onFinish = values => {
    console.log("finish", values)
    // dispatch(userSignIn(values));
  };

  useEffect(() => {
    if (token !== null) {
      props.history.push('/');
    }
  }, [token, props.history]);
  function onChange(checked) {
    if(chumchum == false){
      setchumchum(true)
    }else{
      setchumchum(false)
    }

  }
  useEffect(()=>{
    if(error != ''){
      setmessages('username or password is incorrect')
      settypes('error')
      setTimeout(() => {
        setmessages('nomsg')
      settypes('notp')
      }, 5000);
    }
  },[error])
  function funsubmit(e){
    setmessages('nomsg')
    settypes(`notp`)
    if(uname == `` && pwd == ``){
      setmessages(`fill all fields`)
      settypes(`error`)
    }else if(uname == ``){
      setmessages(`fill username`)
      settypes(`error`)
    }else if(pwd == ``){
      setmessages(`fill password`)
      settypes(`error`)
    }else{
      dispatch(userSignIn({
        email : uname,
        password : pwd
      })); 

    }
    let f = setTimeout(() => {
      setmessages(`nomsg`)
      settypes(`notp`)
    }, 5000); 

  }
  return (
    <div className={`login_page`}>

      <div className={`left_side`}>
        <img className={`left_side_1`} src={`/images/logo192.png`}></img>
      </div >
      <div className={`right_side`}>
        <div className={`login_tab`}>
          <p className={`login_tab_1`}>Login</p>
        </div>
        <div className={`form_part`}>
          <div className={`form_part_content`}>

            <div className={`input_username_parent`}>
            <div className={`input_username ${clname}`} tabIndex={`1`}> 
              <span>username</span> 
              <input  value={uname} onFocus={()=>{
                setclname(`for_focus`)
              }} onBlur={()=>{
                setclname(``)
              }}
              onKeyUp={(e)=>{
                if(e.target.value == ''){
                  setfor_tick(false)
                }else{
                  setfor_tick(true)
                }
                
              }}
              onChange={(e)=>{
                setuname(e.target.value)
              }}
              autoComplete={`off`}
              />
            </div>
            <div className={`right_symbol`}>
            {for_tick ? (<img  src={`/images/Icon_ionic-ios-checkmark-circle.png`}></img>) : `` }
            </div>
            
            </div>
            <div className={`input_username_parent`}>
            <div className={`input_username ${clname1}`} tabIndex={`2`}> 
              <span>password</span> 
              <Input.Password
              value={pwd}
              tabIndex={`1`}
              onFocus={()=>{
                setclname1(`for_focus`)
              }} onBlur={()=>{
                setclname1(``)
              }}
              onChange={(e)=>{
                setpwd(e.target.value)
              }}
              autoComplete={`off`}
      iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
    />
            </div>
            <div className={`right_symbol`}>
            {for_tick ? `` : `` }
            </div>
            
            </div>
            <div className={`forget_section`}>
              <div className={`forget_section_1`}>
              <Switch  checked={chumchum} onChange={onChange} /> <span>Remember me</span>
              </div>
              <div className={`forget_section_2`}>
              <span className={`f_pwd`}>Forgot Password</span>
                </div>
            </div>


              <Button onClick={funsubmit} style={{width : '90%',marginTop : '25px'}} type="primary" className="gx-mb-0" htmlType="submit">
                <IntlMessages id="app.userAuth.signIn" />
              </Button>


          </div>
        </div>
        {messages != `nomsg` ? <Alert style={{position : `absolute`,width : '60%',top : `10px`,zIndex : `100`,left : `50%`,transform : `translateX(-50%)`}} message={messages} type={types} closable/> : ''} 
      </div>



    </div>
  );
};

export default SignIn;
