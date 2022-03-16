import React from "react";
import { Link } from "react-router-dom";
import error from '../assets/images/error.png';
import styles from './nonExistentPage.module.scss';

function NonExistentPage() {

    return (
        <div className={styles.wrapper}>
            <img src={error} alt="not found" />
            <Link to='/home'><button className={styles.homeBut}>HOME</button></Link>
        </div>
    )
}

export default NonExistentPage