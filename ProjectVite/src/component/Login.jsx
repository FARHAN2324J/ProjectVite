import Footer from "./Footer";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../App.css';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Login() {
    const [showImage, setShowImage] = useState(false); // State for controlling modal visibility

    const formik = useFormik({
        initialValues: {
          firstName: '',
          lastName:'',
          email: '',
        },
        onSubmit: values => {
          if (formik.isValid && formik.dirty) {
            setShowImage(true); // Show the modal on form submission if valid
          }
        },
        validationSchema: Yup.object({
          firstName: Yup.string().max(15, 'must be 15 c').required('required'),
          lastName: Yup.string().max(10, 'must be 15 c').required('required'),
          email: Yup.string().email('invalid email').required('required'),
        })
      });

    const handleCloseModal = () => {
        setShowImage(false); // Close the modal
    };

    return(
        <>
            <Navbar/>
            <div className='flex px-10 py-5 gap-5'><Link to="/"><span className='text-gray-700'>Home</span></Link> <span className='text-gray-700'>/</span> <Link><span className='text-gray-950'>Login</span></Link></div>
            <div className="flex my-10 mx-20">
                <div>
                    <img src="/src/img/login.jpg" className="w-[50%]" alt="" />
                </div>
                <div className="w-[30%] flex justify-center flex-col">
                    <h1 className="text-center font-bold m-3 text-3xl">Create Account</h1>
                    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-2">      
                        <input type="text" id='firstName' placeholder="First Name" 
                               className={`border p-1 w-full ${formik.touched.firstName && formik.errors.firstName ? 'border-red-500' : 'border-[#606060]'}`} 
                               {...formik.getFieldProps('firstName')} />
                        {formik.touched.firstName && formik.errors.firstName ? (<div>{formik.errors.firstName}</div>) : null }
                        
                        <input type="text" id='lastName' placeholder="Last Name" 
                               className={`border p-1 ${formik.touched.lastName && formik.errors.lastName ? 'border-red-500' : 'border-[#606060]'}`} 
                               {...formik.getFieldProps('lastName')} />
                        {formik.touched.lastName && formik.errors.lastName ? (<div>{formik.errors.lastName}</div>) : null }
                        
                        <input type="email" id='email' placeholder="Email" 
                               className={`border p-1 ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-[#606060]'}`} 
                               {...formik.getFieldProps('email')} />
                        {formik.touched.email && formik.errors.email ? (<div>{formik.errors.email}</div>) : null }
                        
                        <button type='submit' className="bg-[#5A6D57] text-[#FFFFFF] p-1 cursor-pointer hover:bg-[#5A6D67]">Register Now</button>
                    </form>
                </div>
            </div>

            {/* Modal for showing the image */}
            {showImage && (
                <motion.div 
                    className="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50"
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ duration: 0.5 }}
                >
                    <motion.div 
                        className="relative bg-white p-5 rounded-md"
                        initial={{ scale: 0 }} 
                        animate={{ scale: 1 }} 
                        transition={{ duration: 0.5 }}
                    >
                        <button onClick={handleCloseModal} className="absolute top-2 right-2 text-xl cursor-pointer">✖️</button>
                        <img src="/src/img/messagelogin.jpg" alt="Message" className="w-full h-auto"/>
                    </motion.div>
                </motion.div>
            )}

            <Footer/>
        </>
    )
}
