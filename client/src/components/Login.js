import React, { useState, useEffect, useContext } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "../styles/Login.module.css"
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { AuthContext } from '../Auth/Auth';
import { useNavigate } from 'react-router-dom';



const axios = require('axios');



const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
  

});

const Loginn = () => {
  const navigate = useNavigate()
  const {Login, button} = useContext(AuthContext);
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmitHandler = async (data) => {
    
    Login(data.email, data.password)
    reset()
  };
  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <div className={styles.superContainer}>
        <div className={styles.formContainer}>
          <div>
            <h2 className={styles.h2Login}>Lets sign you in.</h2>
            <br />
          </div>
          <div className={styles.inputContainer}>
            <input className={styles.inputForm} {...register("email")} color="white" placeholder="Email" type="email" required/>
            <MdEmail className={styles.iconForm}/>
            <br />
          <div>
            <p>{errors.email?.message}</p>
          </div>
          </div>
          <div className={styles.inputContainer}>
            <input className={styles.inputForm} {...register("password")} placeholder="Password" type="password" required />
            <RiLockPasswordFill className={styles.iconForm}/>
            <br />
          </div>
          <div>
            <p>{errors.password?.message}</p>
          </div>
          <div className={styles.buttonForm}>
            <button type="submit" >Sign in</button>
            <div>{button&&(
              <button onClick={()=> navigate("/register")} >Registrar ?</button>
            )}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Loginn;