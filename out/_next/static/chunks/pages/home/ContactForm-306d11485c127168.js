(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[198],{1946:(e,a,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/home/ContactForm",function(){return r(3059)}])},6309:(e,a,r)=>{"use strict";r.r(a),r.d(a,{default:()=>t});var n=r(4848),l=r(3058),s=r(2413);r(6540);let t=function(){return(0,n.jsxs)(l.A,{className:"mainLeftContainer",children:[(0,n.jsx)(l.A,{children:(0,n.jsx)(s.A,{variant:"h1",className:"heading",children:"Get in touch"})}),(0,n.jsx)(l.A,{className:"subHeading",mt:"85px",children:(0,n.jsx)(s.A,{variant:"h5",color:"#fff",children:"For general enquiries"})}),(0,n.jsxs)(l.A,{className:"contactInfoBox",children:[(0,n.jsxs)(l.A,{children:[(0,n.jsx)(s.A,{variant:"h6",color:"#fff",children:"Address :"}),(0,n.jsx)(s.A,{variant:"h6",color:"#fff",fontWeight:400,mt:1,children:"110, 16th Road, Chembur, Mumbai - 400071"})]}),(0,n.jsxs)(l.A,{children:[(0,n.jsx)(s.A,{variant:"h6",color:"#fff",children:"Phone :"}),(0,n.jsx)(s.A,{variant:"h6",color:"#fff",fontWeight:400,mt:1,children:"+91 22 25208822"})]}),(0,n.jsxs)(l.A,{children:[(0,n.jsx)(s.A,{variant:"h6",color:"#fff",children:"Email :"}),(0,n.jsx)(s.A,{variant:"h6",color:"#fff",fontWeight:400,mt:1,children:"info@supremegroup.co.in"})]})]})]})}},3059:(e,a,r)=>{"use strict";r.r(a),r.d(a,{default:()=>j});var n=r(4848),l=r(4597),s=r(2058),t=r(3058),i=r(9532),o=r(3559),d=r(1917),c=r(3149),m=r(6540),u=r(2664),h=r(5505);r(2821);var x=r(6358),f=r(2636),p=r(6715),g=r(6309);let A=(0,h.A)("Box")(e=>{let{theme:a}=e;return{marginTop:"20px",background:"#006abc","& .react-tel-input .form-control":{background:"#0000000D",color:"#626262",height:"52px",width:"100%",border:"1px solid #0000000D !important",borderRadius:"8px"},"& .heading":{color:"#fff",fontSize:"48px",fontWeight:"bold"},"& .react-tel-input .selected-flag":{borderRadius:"0px"},"& .react-tel-input .flag-dropdown.open .selected-flag":{background:"#FFFFFF0D"},"& .react-tel-input .special-label":{display:"none"},"& .react-tel-input .form-control:focus ":{boxShadow:"none"},"& .react-tel-input .country-list .country-name ":{color:"#000"},"& .btnCenter":{display:"flex",justifyContent:"flex-start",alignItems:"flex-start",[a.breakpoints.down("md")]:{width:"100%",margin:"10px 0px"},"& .MuiButton-root":{},"& .fieldBox1":{"& .input-MuiOutlinedInput-input":{padding:"0px"}}},"& .phone-input-blur-error .form-control":{border:"1px solid #f44336 !important"}}}),j=()=>{let e=(0,p.useRouter)(),[a,r]=(0,m.useState)(!1),[h,j]=(0,m.useState)(!1),[b,v]=(0,m.useState)(!1),y=u.Ik().shape({name:u.Yj().trim().min(3,"Please enter atleast 3 characters.").max(30,"You can enter only 30 characters.").required("Name is required.").matches(/^[a-zA-Z]+(([',. -][a-zA-Z])?[a-zA-Z]*)*$/g,"Please enter your name."),email:u.Yj().trim().email("Please enter valid email.").required("Email is required.").max(80,"Should not exceeds 80 characters.").matches("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"),phoneNumber:u.Yj().required("Phone number is required.").max(13,"Enter a valid phone number.").min(7,"Must be only 7 digits.").test("notAllRepeatedDigits","Phone number cannot have all repeated digits.",e=>{let a=null==e?void 0:e.replace(/[^0-9]/g,"");return!/(\d)\1{6,}/.test(a)}),message:u.Yj().trim().required("Message is required.").min(3,"Please enter atleast 3 characters.").max(600,"You can enter only 600 characters.")}),N=async(a,n)=>{var l,s,t;if(!b){f.Ay.error("Please solve the CAPTCHA.");return}try{r(!0);let s={name:a.name,email:a.email.toLowerCase(),mobileNumber:"+"+a.phoneNumber,message:a.message},t=await (0,x.xF)({endPoint:"addContactUs",dataToSend:s});(null==t?void 0:t.status)===200?(f.Ay.success(null==t?void 0:null===(l=t.data)||void 0===l?void 0:l.responseMessage),n(),e.push("/")):f.Ay.error(t.data.responseMessage),r(!1)}catch(e){r(!1),console.log("error",e),f.Ay.error(null==e?void 0:null===(t=e.response)||void 0===t?void 0:null===(s=t.data)||void 0===s?void 0:s.message)}};return(0,n.jsx)(A,{children:(0,n.jsx)(l.A,{children:(0,n.jsxs)(s.Ay,{container:!0,spacing:2,children:[(0,n.jsx)(s.Ay,{item:!0,lg:6,md:6,sm:12,xs:12,children:(0,n.jsx)(g.default,{})}),(0,n.jsx)(s.Ay,{item:!0,lg:6,md:6,sm:12,xs:12,children:(0,n.jsx)(t.A,{className:"formRightBox",children:(0,n.jsx)(c.l1,{initialValues:{name:"",email:"",phoneNumber:"",message:""},validationSchema:y,onSubmit:(e,a)=>{let{resetForm:r}=a;return N(e,r)},children:e=>{let{errors:r,handleBlur:l,handleChange:s,touched:m,values:u,setFieldValue:h}=e;return(0,n.jsxs)(c.lV,{children:[(0,n.jsxs)(t.A,{className:"fieldBox",mb:4,children:[(0,n.jsx)(i.A,{fullWidth:!0,variant:"standard",placeholder:"Full Name",name:"name",value:u.name,error:!!(m.name&&r.name),onBlur:l,onChange:s,disabled:a}),(0,n.jsx)(o.A,{error:!0,children:m.name&&r.name})]}),(0,n.jsxs)(t.A,{className:"fieldBox",mb:4,children:[(0,n.jsx)(i.A,{fullWidth:!0,variant:"standard",placeholder:"Email",name:"email",value:u.email,error:!!(m.email&&r.email),onBlur:l,onChange:s,disabled:a}),(0,n.jsx)(o.A,{error:!0,children:m.email&&r.email})]}),(0,n.jsx)(t.A,{className:"fieldBox",mb:4,children:(0,n.jsx)(i.A,{fullWidth:!0,variant:"standard",placeholder:"Company",name:"company"})}),(0,n.jsxs)(t.A,{className:"fieldBox1",mb:4,children:[(0,n.jsx)(i.A,{fullWidth:!0,variant:"standard",placeholder:"Message",name:"message",multiline:!0,rows:3,value:u.message,error:!!(m.message&&r.message),onBlur:l,onChange:s,disabled:a}),(0,n.jsx)(o.A,{error:!0,children:m.message&&r.message})]}),(0,n.jsx)(t.A,{children:(0,n.jsx)(d.A,{variant:"outlined",size:"large",color:"primary",type:"submit",children:"Send"})})]})}})})})]})})})}}},e=>{var a=a=>e(e.s=a);e.O(0,[989,917,395,135,997,636,593,792],()=>a(1946)),_N_E=e.O()}]);