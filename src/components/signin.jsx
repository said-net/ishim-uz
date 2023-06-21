import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Input } from "@material-tailwind/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillLock, AiFillMail, AiOutlineQuestion } from 'react-icons/ai'
import { FaKey, FaUser } from "react-icons/fa";
import { setOpenSignin } from "../managers/signinManager";
import axios from 'axios';
import { API } from "../cfg";
import { toast } from "react-toastify";
import { setRefreshAuth } from "../managers/authManager";
function SignIn() {
    const { open } = useSelector(e => e.signin);
    const [type, setType] = useState('in');
    const [state, setState] = useState({ first_name: '', email: '', password: '', repassword: '', worker: true, captcha: '', check: '' });
    const [captcha, setCaptcha] = useState({ left: Math.floor(Math.random() * 10) + 1, right: Math.floor(Math.random() * 10) + 1 });
    const [disabled, setDisabled] = useState(false);
    const { sign } = useSelector(e => e.lang.lang);
    const dp = useDispatch();
    function editType(e) {
        setType(e);
        setState({ first_name: '', email: '', password: '', repassword: '', worker: true, captcha: '', check: '' });
        setCaptcha({ left: Math.floor(Math.random() * 10) + 1, right: Math.floor(Math.random() * 10) + 1 })
    }
    function SignUP() {
        setDisabled(true);
        const { first_name, email, password, repassword, worker } = state;
        axios(`${API}/user/signup`, { first_name, email, password, repassword, worker }).then(res => {
            const { code, token } = res.data;
            setDisabled(false);
            if (code === 1001) {
                toast.warning(sign?.invalid_name);
            } else if (code === 1002) {
                toast.warning(sign?.invalid_email);
            } else if (code === 1003) {
                toast.warning(sign?.invalid_password);
            } else if (code === 1004) {
                toast.warning(sign?.invalid_repassword);
            } else if (code === 1005) {
                toast.warning(sign?.email_worked);
            } else if (code === 1000) {
                toast.success(sign?.link_sended);
                localStorage.setItem('access', token);
                setTimeout(() => {
                    dp(setRefreshAuth());
                }, 2000)
            }
        }).catch(() => {
            toast.warning("Please refresh page!")
        })
    }
    return (
        <Dialog open={open} size="xxl" className="flex items-center justify-center bg-[#25258b91] backdrop-blur-[20px]">
            <div className="flex w-[490px] bg-white rounded-md items-center justify-start flex-col p-[5px] phone:w-[90%]">
                <DialogHeader className="w-full">
                    <Button className="mr-[10px]" variant={type === 'in' ? 'gradient' : 'text'} onClick={() => editType('in')}>{sign?.in}</Button>
                    <Button variant={type === 'up' ? 'gradient' : 'text'} onClick={() => editType('up')}>{sign?.up}</Button>
                </DialogHeader>
                <DialogBody className="w-full border-y">
                    {type === 'in' ?
                        <>
                            <div className="flex items-center justify-center w-full mb-[10px]">
                                <Input disabled={disabled} label={sign?.email} required onChange={e => setState({ ...state, email: e.target.value.toLowerCase().trim() })} value={state.email} icon={<AiFillMail />} />
                            </div>
                            <div className="flex items-center justify-center w-full mb-[10px]">
                                <Input disabled={disabled} label={sign?.password} required onChange={e => setState({ ...state, password: e.target.value.trim() })} value={state.password} icon={<AiFillLock />} />
                            </div>
                            <div className="flex items-center justify-center w-full mb-[10px]">
                                <p className="italic font-[cursive]">
                                    {captcha.left} + {captcha.right} = ?
                                </p>
                            </div>
                            <div className="flex items-center justify-center w-full mb-[10px]">
                                <Input disabled={disabled} type="number" label={sign?.quest} required onChange={e => setState({ ...state, captcha: e.target.value })} value={state.captcha} icon={<AiOutlineQuestion />} />
                            </div>
                        </> :
                        <>
                            <div className="flex items-center justify-center mb-[10px]">
                                <Button className="w-[150px] mx-[5px]" variant={state.worker ? 'gradient' : 'text'} onClick={() => { setState({ ...state, worker: true }) }} color="blue-gray">{sign?.worker}</Button>
                                <Button className="w-[150px] mx-[5px]" variant={!state.worker ? 'gradient' : 'text'} onClick={() => { setState({ ...state, worker: false }) }} color="blue-gray">{sign?.comp}</Button>
                            </div>
                            <div className="flex items-center justify-center w-full mb-[10px]">
                                <Input disabled={disabled} label={state.worker ? sign?.name : sign?.company} required onChange={e => setState({ ...state, first_name: e.target.value })} value={state.first_name} icon={<FaUser />} />
                            </div>
                            <div className="flex items-center justify-center w-full mb-[10px]">
                                <Input disabled={disabled} label={sign?.email} required onChange={e => setState({ ...state, email: e.target.value.toLowerCase().trim() })} value={state.email} icon={<AiFillMail />} />
                            </div>
                            <div className="flex items-center justify-center w-full mb-[10px]">
                                <Input disabled={disabled} label={sign?.password} required onChange={e => setState({ ...state, password: e.target.value.toLowerCase().trim() })} value={state.password} icon={<AiFillLock />} />
                            </div>
                            <div className="flex items-center justify-center w-full mb-[10px]">
                                <Input disabled={disabled} label={sign?.repassword} required onChange={e => setState({ ...state, repassword: e.target.value.toLowerCase().trim() })} value={state.repassword} icon={<FaKey />} />
                            </div>
                            <div className="flex items-center justify-center w-full mb-[10px]">
                                <p className="italic font-[cursive]">
                                    {captcha.left} + {captcha.right} = ?
                                </p>
                            </div>
                            <div className="flex items-center justify-center w-full mb-[10px]">
                                <Input disabled={disabled} type="number" label={sign?.quest} required onChange={e => setState({ ...state, captcha: e.target.value })} value={state.captcha} icon={<AiOutlineQuestion />} />
                            </div>
                        </>
                    }
                </DialogBody>
                <DialogFooter className="w-full">
                    <Button onClick={() => { setType('in'); dp(setOpenSignin()) }} color="orange" variant="text" disabled={disabled}>{sign?.back}</Button>
                    {
                        type === 'in' ?
                            <Button color="green" className="ml-[10px]" disabled={disabled}>{sign?.in}</Button> :
                            <Button color="green" onClick={SignUP} className="ml-[10px]" disabled={disabled || captcha.left + captcha.right !== +state.captcha}>{sign?.up}</Button>
                    }
                </DialogFooter>
            </div>
        </Dialog>
    );
}

export default SignIn;