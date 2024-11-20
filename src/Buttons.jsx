
import styles from './buttons.module.css';
export default function Buttons({onButtonClick}){

  const b=[
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return(
    <div className={styles.buttonsContainer}>
    
    {
      b.map(p=>(<button key={p} className={styles.button} onClick={()=>onButtonClick(p)}>{p}</button>))
    }

    </div>
  )
}