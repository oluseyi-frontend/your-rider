import  Head from 'next/head';
import MyFooter from './Footer';
import Navbar from './Navbar';

const Layout = ({children}) => {
    return (
        <>
             <Head>
                <title>
                    your-rider
                </title>
            </Head>   
            <Navbar />
            {children}
            <MyFooter/>
            </>
     );
}
 
export default Layout;