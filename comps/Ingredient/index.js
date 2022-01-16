import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';


const IngredientCont =styled.div`
display:flex;
flex-direction:column;
// justify-content:center;
align-items: center;
width:280px;
height: 320px;
margin-bottom:40px;
border-radius:15px;
max-width:500px;
border: 1px solid black;
font-family: Athiti;
text-align: center;


.Header {
  width:200px;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content:center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;

}
.arrow {
  margin-top: 10px;
}

`;

const IngName = styled.span`
margin-left: 10px;
  
`;

const IconImage = styled.img`

width: 35px;
height: 35px;
object-fit: fit;
`;

const IngInfo = styled.p`
  text-align: center;
  width: 250px;
  font-size: 14px;
  margin-top: 0;
`;

const Arrow = styled.img`
    width: 20px;
    height:20px;
    object-fit: contain;
    padding: 5px;
    visibility: ${props=>props.visibility};
`;


const Ingredient = ({
  src="carrot.png",
  name="Carrot",
  text="You just saved average of $15 for this meal, alternative save about $100 per weeks. Keep going and be proud of being part of saving environment!",

  visibility="visible",

  onLeftArrowClick=()=>{},
  onRightArrowClick=()=>{}

}) => {
  const router = useRouter();

  return <IngredientCont>
  {/* <div>How to Store</div> */}
    <div className="Header">
      <IconImage src={src} />
      <IngName>{name}</IngName>
    </div>
    <div className="info">
      <IngInfo>{text}</IngInfo>
    </div>
    <div className="arrow"  >
      <Arrow src='/arrow-left.png' onClick={onLeftArrowClick}  visibility={visibility} />
      <Arrow src='/arrow-right.png' onClick={onRightArrowClick}  visibility={visibility} />
    </div>


  </IngredientCont>
 
}

export default Ingredient;