import Image from "next/image";
import styles from "./main.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.background_image}> </div>
      <div className={styles.side_bar}>
        <div className={styles.project_info}>
          <Image src="/cougars.png" width={500} height={300}/>
          <h4>Cougar Helper</h4>
          <small>A personalized university of houston chat bot.</small>
        </div>
        <div className={styles.button_group}>
          <button className={styles.button}> Pre-admission chat </button>
          <button className={styles.button}> Disability chat </button>
          <button className={styles.button}> College Major chat </button>
          <button className={styles.button}> Another chat </button>
        </div>
      </div>
      <div className={styles.main_content}>
        <div className={styles.example_prompts}>
          <button className={styles.prompt_button}>
            <label>Popular Question</label>
            <p>How many generations will my family have to spend in the coal mines to pay off my student debt?</p>
          </button>
          <button className={styles.prompt_button}>
            <label>Popular Question</label>
            <p>How many generations will my family have to spend in the coal mines to pay off my student debt?</p>
          </button>
          <button className={styles.prompt_button}>
            <label>Popular Question</label>
            <p>How many generations will my family have to spend in the coal mines to pay off my student debt?</p>
          </button>
          <button className={styles.prompt_button}>
            <label>Popular Question</label>
            <p>How many generations will my family have to spend in the coal mines to pay off my student debt?</p>
          </button>
        </div>
        <div className={styles.input_combo}>
          <input type="text" className={styles.input_text} placeholder="How much is tuition at the university of houston"/>
          <input type="button" className={styles.input_button}  value="Send"/>
        </div>
      </div>
    </div>
  );
}
