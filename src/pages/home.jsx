import { Button } from '@material-tailwind/react';
import BgPic from '../assets/img/bg.png'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Lottie from '../components/lottie';
function Home() {
    const { home_top, title, home_center } = useSelector(e => e.lang.lang);
    return (
        <>
            <img src={BgPic} alt="BG" className='fixed w-full bottom-0 right-0 z-[-1] opacity-10 phone:bottom-[70px]' />
            <img src={BgPic} alt="BG" className='fixed w-full top-0 right-0 z-[-1] opacity-10 phone:top-[70px] hidden phone:inline' />
            {/* TOP */}
            <div className="flex items-center justify-between w-full min-h-[50vh] px-[10px] laptop4:flex-col laptop4:min-h-[50vh] laptop4:items-center laptop4:justify-center">
                <div className="flex items-center justify-center w-[50%] phone:w-[100%]">
                    <Lottie data={'https://assets5.lottiefiles.com/packages/lf20_cmplb1cd.json'} style={{ width: "100%" }} />
                </div>
                <div className="flex items-start justify-start flex-col w-[45%] laptop4:w-full laptop4:items-center laptop4:justify-center">
                    <h1 className='text-blue-gray-900 text-[40px] text-center uppercase phone:text-[30px]'>{home_top?.text1}</h1>
                    <h1 className='text-blue-gray-900 text-[35px] laptop4:text-center uppercase phone:text-[25px]'>{title === 'uz' ? <b className='text-blue-gray-600 underline'>ISHIM.UZ</b> : null} {home_top?.text2} {title === 'ru' ? <b className='text-blue-gray-600 underline'>ISHIM.UZ</b> : null}</h1>
                    <p className='text-gray-700 my-[10px] phone:text-[13px]'><b className='text-blue-gray-600 underline'>ISHIM.UZ</b> {home_top?.text3}</p>
                    <div className="flex items-center justify-between w-[300px]">
                        <Button color='blue-gray' className='w-[120px]'>{home_top?.sign}</Button>
                        <Link to='/vacancies'>
                            <Button color='green'>{home_top?.vacancies}</Button>
                        </Link>
                    </div>
                </div>
            </div>
            {/* TOP 2 */}
            <div className="flex items-center justify-start flex-col w-full h-[500px] bg-white rounded-[10px] p-[10px]">
                <h1 className='text-[22px] w-full text-blue-gray-700 capitalize'>Loyiha orqali <b className='text-green-700'>291</b> ta bo'sh ish o'rinlarini topishingiz mumkin!</h1>
            </div>
            {/*  */}
            <div className="w-full h-[1px] bg-blue-gray-100 laptop4:my-[30px] hidden laptop4:inline"></div>
            {/* CENTER */}
            <div className="flex items-center justify-between w-full min-h-[50vh] px-[10px] laptop4:flex-col laptop4:min-h-[50vh] laptop4:items-center laptop4:justify-center">
                <div className="flex items-start justify-start flex-col w-[45%] laptop4:w-full laptop4:items-center laptop4:justify-center">
                    <h1 className='text-blue-gray-900 text-[40px] laptop4:text-center uppercase phone:text-[30px]'>{home_center?.text1}</h1>
                    <h1 className='text-blue-gray-900 text-[35px] laptop4:text-center uppercase phone:text-[25px]'>{home_center?.text2}</h1>
                    <p className='text-gray-700 my-[10px] phone:text-[13px]'>{home_center?.text3}</p>
                    <div className="flex items-center justify-between w-[300px]">
                        <Button color='green'>{home_center?.btn1}</Button>
                    </div>
                </div>
                <div className="flex items-center justify-center w-[50%] phone:w-[100%]">
                    <Lottie data={'https://assets7.lottiefiles.com/packages/lf20_3jmvq04g.json'} style={{ width: "100%" }} />
                </div>
            </div>
        </>
    );
}

export default Home;