import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'
import { setLoading, unSetLoading } from '../../store/loadingSlice'
import LoadingSpinner from '../loadingSpinner'

function LogoutBtn() {
    const loading = useSelector((state) => state.loading.loading)
    const dispatch = useDispatch()
    const logoutHandler = () => {
      dispatch(setLoading()) //start loaing
        authService.logout().then(() => {
            dispatch(logout())
            dispatch(unSetLoading()) //end loading
           
        })
    }
  return (
    <button
    className='inline-bock px-6 py-2 duration-200 text-orange-200  rounded-full'
    onClick={logoutHandler}
    >{loading ? <LoadingSpinner /> : "Logout"}</button>
  )
}

export default LogoutBtn 