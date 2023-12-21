import React from 'react'
import "./Style.css"
import { BiEdit } from "react-icons/bi"
import { AiTwotoneDelete } from "react-icons/ai"
const Profile = ({ loginUser }) => {
    return (
        <div className='profile '>
            <div className='main-box m-5'>
                <div className='d-flex rounded-3 '>
                    <div className='box1 text-light '>
                        <img className='rounded-circle w-50 h-50 bg-dark mt-5' src={loginUser.img} alt='image' />
                        <div className='mt-5'>
                            <BiEdit className='m-3 h4' />
                            <AiTwotoneDelete className='m-3 h4' />
                        </div>
                    </div>
                    <div className='box2 bg-light '>
                        <p className='mx-5 my-3'>Information</p>
                        <hr className='w-75 ms-4' />
                        <div className='container m-3 mt-5 d-flex flex-row justify-content-between w-75'>
                            <div className='m-3'>
                                <h6>Name:</h6>
                                <p>{loginUser.username}</p>
                            </div>
                            <div className='m-3'>
                                <h6>Email:</h6>
                                <p>{loginUser.email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile