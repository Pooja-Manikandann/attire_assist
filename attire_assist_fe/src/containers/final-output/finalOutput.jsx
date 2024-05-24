import styles from "./finalOutput.module.scss";
import getFitService from "../../service/fitImageService";
import Grid from "../../components/Grid/Grid";

const FinalOutput = (props) => {
  const { attire, fit, setPage } = props;
  const dressArray = getFitService(attire.toLowerCase(), fit?.toLowerCase());


  console.log('dressArray', attire, fit, dressArray)
  const dressCards = dressArray.map((data) => (
    <div>
      <Grid label={data.name} image={data.dress} />
      <div className={styles.buttonWrapper}>
          <a href={data.amazon} target="_blank" rel="noopener"><button className={styles.amazonButton}>Amazon</button></a>
          <button className={styles.flipkartButton}>Flipkart</button>
        </div>
    </div>
  ));

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.dressContainer}>{dressCards}</div>
        <button className={styles.button} onClick={() => {setPage(3)}}>Back</button>
      </div>
        <textarea cols={30} rows={3} placeholder="Add your feedback here"></textarea>
        
    </>
  );
};

export default FinalOutput;
