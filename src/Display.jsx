
import styles from "./Display.module.css"
export default function Display({value}){
return(
  <>

<input className={styles.display}
       type="text" 
       readOnly
       value={value} //it is used to set the initial value in display box
/>
  
  </>
)


}