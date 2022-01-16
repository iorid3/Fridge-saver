import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';


const FooterCont  = styled.div`
display:flex;
flex-direction:row;
width:100%;
padding-top: 20px;
font-size: 14px;
text-align: center;
position: fixed;
bottom: 0;


 
.IconCont{
  display:flex;
  align-items:center;
  justify-content:center;
  width:80px;
  height:80%;  
  margin:10px;
}  

.Icons {
  display:flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
}

.IconImg {
  width: 30px;
  height: 30px;
  padding: 0px 10px 0px 10px;
}

`

const Iconbox = styled.div`
 display:flex;
 align-items:center;
 justify-content:center;
 width: 100%;
 height: 50%;
 background-color: #9FCDA4;   
`

const IconImage = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`
const  Footer = ({
    
}) => {
    return( 
    
    <FooterCont>
        <Iconbox>
              <div className = "IconCont">
                <Link href = "/saved">
                  <div className = "Icons">
                    <div className = "IconImg">
                      {/* <IconImage src = "/recipe-book-footer.png"/> */}
                      <IconImage src = "/recipe-book-color.png"/>
                    </div>
                    <div>RECIPES</div>
                  </div>
                </Link>
              </div> 

              <div className = "IconCont">
                <Link href = "/">  
                <div className = "Icons">
                  <div className = "IconImg">
                    {/* <IconImage src = "/home.png"/> */}
                    <IconImage src = "/home-color.png"/>
                  </div>
                  <div>HOME</div>
                </div>
                </Link>
              </div>

          <div className = "IconCont">
            <Link href = "/facts/topic1">  
            <div className = "Icons">
              <div className = "IconImg">
                {/* <IconImage src ="/leaf.png"/> */}
                <IconImage src ="/leaf-color.png"/>
              </div>
              <div>FACTS</div>
            </div>
            </Link>  
          </div>
        </Iconbox> 
   
    </FooterCont>

    )
}

export default Footer;
