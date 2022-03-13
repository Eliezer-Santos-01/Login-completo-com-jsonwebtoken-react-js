import React, { useState, useEffect, useContext } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import styles from "../styles/Register.module.css";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { AuthContext } from '../Auth/Auth';




const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(4).max(15).required(),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

const Register = () => {
    
    const {Register}  = useContext(AuthContext);
    const { register, handleSubmit, formState:{ errors }, reset } = useForm({
        resolver: yupResolver(schema)
    })
    const onSubmit = (data) => {
        Register(data.email, data.password)
    };
    
    return ( 
        <div  >
            
            <form  onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.superContainer}>
                    <div className={styles.formContainer}>
                        <div className={styles.h2Form}>
                            <h2 className={styles.h2txt}>Register</h2>
                        </div>
                        <div className={styles.inputContainer}>
                            <input className={styles.inputForm} type="email" placeholder="Email" {...register("email")} required/>
                            <MdEmail className={styles.iconForm}/>
                        <div>   
                            <p>{errors.email?.message}</p>
                        </div>
                        </div>
                        <div className={styles.inputContainer}>
                            <input className={styles.inputForm} type="password" placeholder="Password" {...register("password")} required/>
                            <RiLockPasswordFill className={styles.iconForm}/>
                        <div>   
                            <p>{errors.password?.message}</p>
                        </div>
                        </div>
                        <div className={styles.inputContainer}>
                            <input className={styles.inputForm} type="password" placeholder="confirm password" {...register("confirmPassword")} required/>
                            <RiLockPasswordFill className={styles.iconForm}/>
                        <div>
                            <p>{errors.confirmPassword?.message}</p>
                        </div>
                        </div> 
                        <div className={styles.buttonForm}>                 
                            <button type="submit">Register</button>
                        </div>
                        
                    </div>
                </div>
            </form>
        </div>
    )
}
 
export default Register;