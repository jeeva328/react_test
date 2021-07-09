import React, {useEffect , useState} from 'react'
import './Bill.css'
import axios from 'axios';

function Bill(props) {

//   API Import
var xyz; 
var dummy = {name:'guna' , rate : 200000000000};

const [itemgetArray, setitemgetArray] = useState([])

const [loading, setloading] = useState(true)

    useEffect( async () =>   {
        var items = await axios
           .get(
             'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
           );
        
           console.log(items)
         setitemgetArray(items.data);
         setloading(false);
       
       }, []);

       var itemArray = [];
       itemgetArray.map((items) => itemArray.push({
           name:items.name,
           rate:items.current_price,
       }) )
      
       var a1 =  Math.ceil(loading ? dummy.name : itemArray[0].rate * props.btcP * 75)
       var a2 = Math.ceil( loading ? dummy.name : itemArray[1].rate * props.ethP * 75)
       var a3 = Math.ceil(loading ? dummy.name : itemArray[2].rate  * props.usdtP * 75)
       var a4 = Math.ceil(loading ? dummy.name : itemArray[3].rate * props.bnbP * 75)
       var a5 = Math.ceil(loading ? dummy.name : itemArray[4].rate * props.adaP * 75)
       var a6 = Math.ceil(loading ? dummy.name : itemArray[5].rate * props.dogeP * 75)
       var a7 = Math.ceil(loading ? dummy.name : itemArray[6].rate * props.xrpP * 75)
       var a8 = Math.ceil(loading ? dummy.name : itemArray[7].rate * props.dotP * 75)
       var a9 = Math.ceil(loading ? dummy.name : itemArray[8].rate * props.usdcP * 75)
       var a10 = Math.ceil(loading ? dummy.name : itemArray[9].rate * props.icpP * 75)

       
var tot_inr = a1+a2+a3+a4+a5+a6+a7+a8+a9+a10;
    

    const validateBuy = () => {
    
        if (props.btcP===0 && props.ethP===0 && props.usdtP===0&& props.bnbP===0&& props.adaP===0
            && props.dogeP===0&& props.xrpP===0&& props.dotP===0&& props.usdcP===0&& props.icpP===0 ) {
         alert('Unable to process');
        }
      };

      const validateavai = () =>{
          xyz = (props.bal) - (tot_inr) ;
          if(xyz >= 0)
          {
        alert('Order Placed . Check Sell window for more info.')
          }
          else{
              alert('Insufficient Balance')
          }
      }


   
const initval = {
coin1:{c1 : '' , q1 : '', amt1 :'' },
coin2:{c2 : '' , q2 : '', amt2 :'' },
coin3:{c3 : '' , q3 : '', amt3 :'' },
coin4:{c4 : '' , q4 : '', amt4 :'' },
coin5:{c5 : '' , q5 : '', amt5 :'' },
coin6:{c6 : '' , q6 : '', amt6 :'' },
coin7:{c7 : '' , q7 : '', amt7 :'' },
coin8:{c8 : '' , q8 : '', amt8 :'' },
coin9:{c9 : '' , q9 : '', amt9 :'' },
coin10:{c10 : '' , q10 : '', amt10 :'' },
};
   

const getValueBuy = () =>{
initval.coin1.c1 = itemArray[0].name;
initval.coin1.q1 = props.btcP;
initval.coin1.amt1 = Math.ceil(itemArray[0].rate * 75) ;

initval.coin2.c2 = itemArray[1].name;
initval.coin2.q2 = props.ethP;
initval.coin2.amt2 = Math.ceil(itemArray[1].rate * 75);

initval.coin3.c3 = itemArray[2].name;
initval.coin3.q3 = props.usdtP;
initval.coin3.amt3 = Math.ceil(itemArray[2].rate * 75);

initval.coin4.c4 = itemArray[3].name;
initval.coin4.q4 = props.bnbP;
initval.coin4.amt4 = Math.ceil(itemArray[3].rate * 75);

initval.coin5.c5 = itemArray[4].name;
initval.coin5.q5 = props.adaP;
initval.coin5.amt5 = Math.ceil(itemArray[4].rate * 75);

initval.coin6.c6 = itemArray[5].name;
initval.coin6.q6 = props.dogeP;
initval.coin6.amt6 = Math.ceil(itemArray[5].rate * 75);

initval.coin7.c7 = itemArray[6].name;
initval.coin7.q7 = props.xrpP;
initval.coin7.amt7 = Math.ceil(itemArray[6].rate * 75);

initval.coin8.c8 = itemArray[7].name;
initval.coin8.q8 = props.dotP;
initval.coin8.amt8 = Math.ceil(itemArray[7].rate * 75);

initval.coin9.c9 = itemArray[8].name;
initval.coin9.q9 = props.usdcP;
initval.coin9.amt9 = Math.ceil(itemArray[8].rate * 75);

initval.coin10.c10 = itemArray[9].name;
initval.coin10.q10 = props.icpP;
initval.coin10.amt10 = Math.ceil(itemArray[9].rate * 75);
       }

      
    
      const Call = async () =>{
          await validateBuy();
          if(tot_inr>0){
          await validateavai();
          }
          if(tot_inr>0 && xyz>=0 ){
          await getValueBuy();
          }
          console.log(initval);
      }



    return (
        <div className='bill-container'>
            <div className='con-bill'>
                Confirmation Bill
            </div>

            <div id='line-row'></div>

            <div className='cba'>
                &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                <h3 >Coin</h3> &nbsp;&nbsp; &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;    &nbsp;&nbsp;
                <h3>Quantity</h3>   &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;
                <h3>Amount(inr)</h3>
            </div>

            <div id='line-row2'></div>
            <div id ='verti'></div>
            <div id ='verti2'></div> <div id ='verti3'></div>

            <div className='tot-amt'>
                Total Amout to be Paid (inr):
                <br></br>
                 {tot_inr}
            </div>

            <div className='avai-bal'>
                Availabe Balance :
                <br></br> {props.bal}
            </div>
          
          <div className='list-list'>
         {loading ? dummy.name : itemArray[0].name}  
            <br></br>
            <br></br>
            {loading ? dummy.name : itemArray[1].name}
            <br></br>
            <br></br>
            {loading ? dummy.name : itemArray[2].name}
            <br></br>
            <br></br>
            {loading ? dummy.name : itemArray[3].name}            
            <br></br>
            <br></br>
            {loading ? dummy.name : itemArray[4].name}
            <br></br>
            <br></br>
            {loading ? dummy.name : itemArray[5].name}
            <br></br>
            <br></br>
            {loading ? dummy.name : itemArray[6].name}
            <br></br>
            <br></br>
            {loading ? dummy.name : itemArray[7].name}
            <br></br>
            <br></br>
            {loading ? dummy.name : itemArray[8].name}
            <br></br>
            <br></br>
            {loading ? dummy.name : itemArray[9].name}
          </div>

<div>
    <button className='con-buy' type='submit' onClick={Call}>
        BUY
        </button>
    </div>

          <div className='bill-quant' >
          {props.btcP}
          <br></br>
          <br></br>
          {props.ethP}
          <br></br>
          <br></br>
          {props.usdtP} <br></br>
          <br></br>
          {props.bnbP}
          <br></br>
          <br></br> 
          {props.adaP}
          <br></br>
          <br></br>
          {props.dogeP} <br></br>
          <br></br>
          {props.xrpP} <br></br>
          <br></br> 
          {props.dotP}
           <br></br>
          <br></br>  
          {props.usdcP} <br></br>
          <br></br> 
          {props.icpP}
          </div>

          <div className='amt-bill'>
            {a1}
            <br></br><br></br>
            {a2}
            <br></br><br></br>
            {a3}
            <br></br><br></br>
            {a4}
            <br></br><br></br>
            {a5}
            <br></br><br></br>
            {a6}
            <br></br><br></br>
            {a7}
            <br></br><br></br>
            {a8}
            <br></br><br></br>
            {a9}
            <br></br><br></br>
            {a10}
           
          </div>
       



</div>
    );
}

export default Bill