export default function TitlesFlip({word, classes, styles}){
    return(
       <div className={`animated_title ${styles} ${classes}`}>
          {word.split("").map((el, index)=>{
             return <span key={index} style={{"--i": index+1}}>{el}</span>
          })}
       </div>
    )
 }