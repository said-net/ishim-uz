import { Button, IconButton, Menu, MenuHandler, MenuItem, MenuList } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSuitcase, FaUsers } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux'
import { editLang } from "../managers/langManager";
import { setOpenSignin } from "../managers/signinManager";
function Navbar() {
    const nv = useNavigate();
    const dp = useDispatch();
    const [page, setPage] = useState('');
    const { lang } = useSelector(e => e.lang);
    useEffect(() => {
        const { pathname } = window.location;
        setPage(pathname.replace('/', ''));
        // eslint-disable-next-line
    }, [window.location.pathname]);
    return (
        <div className="flex items-center justify-center w-full h-[100px]">
            <nav className="w-full h-[100px] flex items-center justify-between fixed top-0 left-0 bg-white shadow-[0_10px_20px] shadow-[#0000000f] px-[2%] z-[9999]">
                <h1 className="font-bold text-[30px] text-blue-gray-500 cursor-pointer" onClick={() => nv('/')}>ISHIM.UZ</h1>
                <div className="flex items-center justify-between w-[550px] tablet:w-[180px]">
                    <Link to={'/vacancies'} className={`${page === 'vacancies' ? 'text-blue-gray-700' : 'text-blue-gray-400'} duration-500 flex items-center justify-center relative tablet:hidden uppercase`}>
                        {lang?.nav?.vacancies}
                        <span className={`h-[1px] ${page === 'vacancies' ? 'bg-blue-gray-700 w-[50%]' : 'bg-blue-gray-400 w-[10%]'} absolute bottom-0 right-0 rounded-md duration-500`} />
                    </Link>
                    <Link to={'/cv'} className={`${page === 'cv' ? 'text-blue-gray-700' : 'text-blue-gray-400'} duration-500 flex items-center justify-center relative tablet:hidden uppercase`}>
                        {lang?.nav?.cv}
                        <span className={`h-[1px] ${page === 'cv' ? 'bg-blue-gray-700 w-[50%]' : 'bg-blue-gray-400 w-[10%]'} absolute bottom-0 right-0 rounded-md duration-500`} />
                    </Link>
                    <Button color="indigo" className="w-[120px]" onClick={() => dp(setOpenSignin(true))}>
                        {lang?.nav?.sign}
                    </Button>
                    <Menu className={"w-[100px]"}>
                        <MenuHandler>
                            <IconButton color="blue-gray" className="rounded-full">
                                {lang?.title}
                            </IconButton>
                        </MenuHandler>
                        <MenuList className=" z-[9999999] min-w-0 flex items-center justify-center flex-col">
                            {lang?.title === 'uz' ?
                                <MenuItem onClick={() => dp(editLang({ 'lang': 'ru' }))} className="flex items-center justify-center uppercase">
                                    Русский
                                </MenuItem> :
                                <MenuItem onClick={() => dp(editLang({ 'lang': 'uz' }))} className="flex items-center justify-center uppercase">
                                    O'zbekcha
                                </MenuItem>
                            }
                        </MenuList>
                    </Menu>
                </div>
            </nav>
            <div className="items-center justify-around w-full h-[60px] hidden tablet:flex fixed bottom-0 left-0 bg-white shadow-[0_-10px_20px] shadow-[#0000000f] px-[2%] z-[9999]">
                <FaSuitcase onClick={() => nv('/vacancies')} className={`duration-500 text-[30px] ${page === 'vacancies' ? 'text-blue-gray-700 translate-y-[-10px]' : 'text-blue-gray-500'}`} />
                <FaUsers onClick={() => nv('/cv')} className={`duration-500 text-[30px] ${page === 'cv' ? 'text-blue-gray-700 translate-y-[-10px]' : 'text-blue-gray-500'}`} />
            </div>
        </div>
    );
}

export default Navbar;