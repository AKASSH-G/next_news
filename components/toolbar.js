import { useRouter } from "next/router";
import styles from '../styles/Toolbar.module.scss';
import variables from '../styles/variables.module.scss'

export const Toolbar=()=>{
    const router=useRouter();
    return(
        <div className={styles.main}>
            <div onClick={()=>router.push('/')}>Home</div>
            <div onClick={()=>router.push('/feed/1')}>Feed</div>
            <div onClick={()=>router.push('/eom')}>Headlines</div>
            <div onClick={()=>window.location.href='https://medium.com/@akasshkrishnan1811'}>Medium</div>
            <div className={variables.title} onClick={()=>window.location.href='https://www.linkedin.com/in/akassh-g-4888231bb/'}>linkedin</div>
        </div>
    );
};