import { useState} from 'react';

export default function Statistics({ countCorrectAnswers }) {
    const [hours, setHours]= useState(0);
    const [min, setMin]= useState(0);
    const [sec, setSecond]= useState(0);


    setInterval(function time(){
        var d = new Date();
       var hours = 24 - d.getHours()-1;
       var min = 60 - d.getMinutes();
        if((min + '').length === 1){
          min = '0' + min;
        }
       var sec = 60 - d.getSeconds();
        if((sec + '').length === 1){
              sec = '0' + sec;
        }
        setHours(hours)
        setMin(min)
        setSecond(sec)
      }, 1000);
    return (
        <>
            <p>
                You got {countCorrectAnswers} correct!
            </p>
            <p>Thank you for playing!</p>


            <p> hours ={hours} minutes={min} second={sec}</p>

        </>
    );
}
