import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { Modal, Button, Checkbox, Form, Input, Select, Spin, Radio,DatePicker } from 'antd';
import { SelectionState } from "react-draft-wysiwyg";
import {createorganization,getlibrary,getcountry,getpackage} from "../../../appRedux/actions/Auth"
function Managecompanypop({ pcback, active_status }) { 
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [start, setstart] = useState(0)
  const [form] = Form.useForm();
  const [compname, setcompname] = useState(``)
  const [typevalue, settypevalue] = useState('');
  const [mainmenu, setmainmenu] = useState("")
  const [email, setemail] = useState("")
  const [state, setstate] = useState("")
  const [country, setcountry] = useState("")
  const [city, setcity] = useState("")
  const [address, setaddress] = useState("")
  const [codenumber, setcodenumber] = useState("86")
  const [phone,setphone] = useState("")
  const [contperson, setcontperson] = useState("")
  const [packages,setpackages] = useState("")
  const [client,setclient] = useState("")
  const [updater,setupdater] = useState("")
  const [viewer,setviewer] = useState("")
  const [survoyor,setsurvoyor] = useState("")
  const [fromdate,setfromdate] = useState("")
  const [todate,settodate] = useState("")
  const [library,setlibrary] = useState("")

  const dispatch = useDispatch();
  const libraries = useSelector(({auth}) => auth.getlibrarys);
  const getcountries = useSelector(({auth}) => auth.getcountries);  
  const getpackages = useSelector(({auth}) => auth.getpackages);    
  const { Option } = Select;
  if(libraries.length === 0){
    dispatch(getlibrary())
  }
  if(getcountries.length === 0){
    dispatch(getcountry())
  }  
  if(getpackages.length === 0){
    dispatch(getpackage())
  }
  // useEffect(()=>{
  //   if(forgetlibrary === 0){
  //     alert(`testing`)
  //     // dispatch(getlibrary())
  //     setgetlibrary(1)
  //   }
  // })     
  if (active_status == 1) {
    if (start == 0) {
      setIsModalVisible(true)
      setstart(1)
      
    }
  }

  const handleOk = () => {
    setIsModalVisible(false);
    pcback(1)
    setstart(0)
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    pcback(1)
    form.resetFields();
    setstart(0)
  };

  const onChange = e => {
    settypevalue(e.target.value);
  };

  const onFinishFailed = errorInfo => {

    console.log('Failed:', errorInfo);
  };
  const onFinish = values => {
    if(fromdate > todate){
      alert("to date is must higher than from date")
      return;
    }
    dispatch(createorganization({ 
      name : compname,
      company_type : typevalue,
      organization_type :mainmenu,
      email :email,
      state:state,
      country:country,
      city :city,
      address:address,
      phone:`${codenumber}  ${phone}`,
      cotact_person:contperson,
      package :packages,
      no_client_admin:client,
      no_updater:updater,
      no_viewer:viewer,
      no_surveyor:survoyor,
      parent_id: "",
      library: library,
      valid_from: fromdate,
      valid_to: todate
      }))
    form.resetFields();
  }
  const onCountry = e => {
    setcountry(e)
    let dd = e.split(`code`)
    // alert()
    form.setFieldsValue({
      prefix : dd[1]
    })
    setcodenumber(dd[1])
  }
  const onState = e => {
    setstate(e)
  }
  const onCity = e => {
    setcity(e)
  }
  const onCurrencyChange = newCurrency => {
    setmainmenu(newCurrency)
  };
  const onCodenumber = newCurrency => {
    setcodenumber(newCurrency)
  };
  const onlibrary = newCurrency =>{
    setlibrary(newCurrency)
  }
  const onpackages = e =>{
    setpackages(e)
    let sep = e.split(`+`)
    setclient(sep[1])
    setupdater(sep[2])
    setsurvoyor(sep[3])
    setviewer(sep[4])
    form.setFieldsValue({
      clients : sep[1],
      updater : sep[2],
      viewer :  sep[4],
      survoyor : sep[3]      
    })
  }
  function onfromChange(date, dateString) {
    setfromdate(date + "----" + dateString);
    
  }
  function ontoChange(date, dateString) {
    settodate(date + "----" + dateString)
    
  }
  let menu_data = [<Option key={1} value={1}>Hospital</Option>, <Option key={2} value={2}>Medical</Option>, <Option key={3} value={3}>Laboratory</Option>]
  // let country_data = [<Option key={1} value={1}>Dhubai</Option>, <Option key={2} value={2}>Southi</Option>, <Option key={3} value={3}>Israel</Option>]
  let country_data = getcountries.map((item,i)=>{
  return(<Option key={i} value={`${item.id}code${item.international_dialing}`}>{item.country}</Option>)
  })
  let state_data = [<Option key={1} value={1}>Abudhabi</Option>, <Option key={2} value={2}>Begirin</Option>, <Option key={3} value={3}>Sharjah</Option>]
  let city_data = [<Option key={1} value={1}>Tamil Nadu</Option>, <Option key={2} value={2}>Andhra</Option>, <Option key={3} value={3}>Telangana</Option>]
  // let packages_data = [<Option key={1} value={1}>Gold</Option>, <Option key={2} value={2}>Silver</Option>, <Option key={3} value={3}>Bronze</Option>]
  let packages_data = getpackages.map((item,i)=>{
      return(
        <Option key={i} value={`${item.id}+${item.no_client_admin}+${item.no_updater}+${item.no_internel_surveyor}+${item.no_viewer}`}>{item.name}</Option>
      )
  })
  // alert(libraries.length)
  // let library_data = [<Option key={1} value={1}>Chabahi</Option>, <Option key={2} value={2}>JCP</Option>, <Option key={3} value={3}>Chap</Option>]
  let library_data = libraries.map((item,i)=>{
    return(<Option key={i} value={item.id}>{item.name}</Option>)
  })  
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select className={`phone_number`} value={codenumber} placeholder={"+86"} onChange={onCodenumber} style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  return (
    <div>
      <Modal header={null} footer={null} className={`for_manage_company_model`} visible={isModalVisible} >
        <Form
          form={form}
          initialValues={{ remember: true }}
          name="acceptor"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className="gx-signin-form gx-form-row0">
          <p className={`form_title`}>Add New Company</p>
          <p className={`form_label`}>Company Name</p>
          <Form.Item
            rules={[{ required: true, message: 'company name is required' }]} name="menu">

            <Input value={compname} onChange={(e) => {
              setcompname(e.target.value)
            }} />
          </Form.Item>
          <p className={`form_label`}>Company Type</p>
          <Form.Item
            rules={[{ required: true, message: 'company type is required' }]} name="company_type">

            <Radio.Group onChange={onChange} className={`accrepro_radios`} value={typevalue}>
              <Radio value={1}>Corporate</Radio>
              <Radio value={2}>Sub Branch</Radio>
              <Radio value={3}>Individual</Radio>
            </Radio.Group>
          </Form.Item>
          <p className={`form_label`}>Organization Type</p>
          <Form.Item
            rules={[{ required: true, message: 'Organization type is required' }]} name="organization_type">
            <Select
              value={mainmenu}
              onChange={onCurrencyChange}
              placeholder="Organization Type"
            >
              {menu_data}
            </Select>
          </Form.Item>
          <p className={`form_label`}>Email</p>
          <Form.Item
            rules={[{ required: true, message: 'Provide correct format', type: "email" }]} name="email">
            <Input value={email} onChange={(e) => {
              setemail(e.target.value)
            }} />
          </Form.Item>
          <p className={`form_label`}>Country</p>
          <Form.Item
            rules={[{ required: true, message: 'Country is required' }]} name="Country">
            <Select
              value={country}
              onChange={onCountry}
              placeholder="Country"
            >
              {country_data}
            </Select>
          </Form.Item>
          <p className={`form_label`}>State</p>
          <Form.Item
            rules={[{ required: true, message: 'State is required' }]} name="State">
            <Select
              value={state}
              onChange={onState}
              placeholder="State"
            >
              {state_data}
            </Select>
          </Form.Item>
          <p className={`form_label`}>City</p>
          <Form.Item
            rules={[{ required: true, message: 'City is required' }]} name="City">
            <Select
              value={city}
              onChange={onCity}
              placeholder="City"
            >
              {city_data}
            </Select>
          </Form.Item>
          <p className={`form_label`}>Address</p>
          <Form.Item
            rules={[{ required: true, message: 'Address is required' }]} name="Address">
            <Input.TextArea rows={4} value={address} onChange={(e) => {
              setaddress(e.target.value)
            }} />
          </Form.Item>
          <p className={`form_label`}>Phone</p>
          <Form.Item
            name="phone"
            rules={[{ required: true, message: 'Please input your phone number!' }]}
          >
            <Input value={phone} onChange={(e)=>{
              setphone(e.target.value)
            }} addonBefore={prefixSelector} style={{ width: '100%' }} />
          </Form.Item>
          <p className={`form_label`}>Contact person</p>
          <Form.Item
            rules={[{ required: true, message: 'contact_person is required' }]} name="contact_person">
            <Input value={contperson} onChange={(e) => {
              setcontperson(e.target.value)
            }} />
          </Form.Item>
          <p className={`form_label`}>Library</p>
          <Form.Item
            rules={[{ required: true, message: 'package is required' }]} name="library">
            <Select
              value={library}
              onChange={onlibrary}
              placeholder="Select Library"
            >
              {library_data}
            </Select>
          </Form.Item>
          <p className={`form_label`}>Assign pakage</p>
          <Form.Item
            rules={[{ required: true, message: 'package is required' }]} name="Assign_pakage">
            <Select
              value={packages}
              onChange={onpackages}
              placeholder="Assign packages"
            >
              {packages_data}
            </Select>
          </Form.Item>
          <p className={`form_label`}>No.of client admin</p>
          <Form.Item
            rules={[{ required: true, message: 'client is required' }]} name="clients">
            <Input value={client} onChange={(e) => {
              setclient(e.target.value)
            }} />
            </Form.Item>
          <p className={`form_label`}>No.of Updaters</p>
          <Form.Item
            rules={[{ required: true, message: 'updater is required' }]} name="updater">
            <Input value={updater} onChange={(e) => {
              setupdater(e.target.value)
            }} />
            </Form.Item>
          <p className={`form_label`}>No.of Viewers</p>
          <Form.Item
            rules={[{ required: true, message: 'viewer is required' }]} name="viewer">
            <Input value={viewer} onChange={(e) => {
              setviewer(e.target.value)
            }} />
            </Form.Item>
          <p className={`form_label`}>No.of survoyor</p>
          <Form.Item
            rules={[{ required: true, message: 'survoyor is required' }]} name="survoyor">
            <Input value={survoyor} onChange={(e) => {
              setsurvoyor(e.target.value)
            }} />
            </Form.Item>
          <p className={`form_label`}>Valid</p>
          <div style={{display : `flex`}}>
          <Form.Item
            rules={[{ required: true, message: 'date is required' }]} name="fromdate">
          <DatePicker   style={{marginLeft:'15px',marginRight : '15px'}} placeholder={`From`} onChange={onfromChange} />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: 'date is required' }]} name="todate">
          <DatePicker  style={{marginLeft:'15px',marginRight : '15px'}} placeholder={`To`} onChange={ontoChange} />
          </Form.Item>
          </div>
          <div className={`form_submit_button`}>
            <Button onClick={handleCancel} style={{ width: '150px' }} className="gx-mb-0"> Cancel </Button>
            <Button type="primary" style={{ width: '150px' }} className="gx-mb-0" htmlType="submit"> Add </Button>
          </div>
        </Form>
      </Modal>

    </div>
  )
}
export default Managecompanypop