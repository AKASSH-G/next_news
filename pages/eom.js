import styles from '../styles/EOM.module.css';
import { Toolbar } from '@/components/toolbar';

export const EOM=({ employee })=>{
    return(
        <div className="page-container">
             <Toolbar />
            <div className={styles.main}>
                <h1>akassh, what news did you brought?</h1>
            </div>
             
            <div className={styles.main}>
            {
                employee.map(data => {
                    return <h3>{data.name} </h3>
                })
            }
            </div>
            
        </div>
    );
};

export const getServerSideProps=async pageContext=>{
    const apiResponse=await fetch(
        'https://jsonplaceholder.typicode.com/users'
    );
    const employee=await apiResponse.json();

    return{
        props:{
            employee
        }
    }
};

export default EOM;