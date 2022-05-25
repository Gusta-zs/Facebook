import {FaFacebook} from "react-icons/fa"
import { AiOutlineSearch } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { AiOutlineShop } from "react-icons/ai";
import { RiGroupLine } from "react-icons/ri";
import {CgGames} from "react-icons/cg"
import {BsFillPeopleFill} from "react-icons/bs"
import {FaUserFriends} from "react-icons/fa"
import {GiThreeFriends} from "react-icons/gi"
import {BiStore} from "react-icons/bi"
import {GiBackwardTime} from "react-icons/gi"
import {IoIosArrowDown} from "react-icons/io"
import {GiDoubleDragon} from "react-icons/gi"
import {GiEightBall} from "react-icons/gi"
import {FaEarlybirds} from "react-icons/fa"
import api from "./api.js"
import React, {useEffect, useState} from "react"

export default function App () {

    /*------------API das Fotos--------*/
   const [apiPhotos, setapiPhotos] = useState()
    const photos=[]
    useEffect(()=> {
        async function mostrar () {
            const URL = "photos"
            await api
            .get(`${URL}`)
            .then((response)=> setapiPhotos(response.data))
        }
        mostrar();
    }, []
     ) 


     /*--------- URL (api-photos)---------*/

     function URL (props) {
         const Urlitens= apiPhotos.map((url, i)=> 
         <img className="imagens" src={url.thumbnailUrl}/> 
         )
         return (
             <div>{Urlitens}</div>
         )
     }

    
    return (
        
           <div className="container"> {/*---------Inicio da Página--------- */}
           <header id="header">
            {/* ----------ICONS / Menu initial --------- */}
            <div className="menu">
              <a className="tittle" href="app.js"><FaFacebook/></a>
               
            </div>
            <div>
                <form>
                    <input id="buscar" type="text" value="Pesquise Aqui" name="nome" ></input>
                    <label for="busca"><AiOutlineSearch className="lupa"/></label>
                </form>
            </div>
            <div>
                <form class="pai">
             <label for=""><AiFillHome className="casa" /></label>
             <label for=""><AiOutlineFundProjectionScreen className="watch" /></label>
             <label for=""><AiOutlineShop className="shop"/></label>
             <label for=""><RiGroupLine className="group"/></label>
             <label for=""><CgGames className="games"/></label> 
                </form>             
            </div>

            <div>
                <form>
                    <label for=""><BsFillPeopleFill className="eu"/>Gustavo</label>
                </form>
            </div>  
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Poppins:wght@400;500;700&display=swap"
      rel="stylesheet"
    />
    </header>

    <div className="lateral" id="lateral">
        <ul>
            <li><a href="app.js"/><BsFillPeopleFill className="pessoa-1"/> Gustavo Santos</li>
            <li><a href="app.js"/><FaUserFriends className="amigos"/> Amigos</li>
            <li><a href="app.js"/><GiThreeFriends className="friends"/> Comunidade</li>
            <li><a href="app.js"/><BiStore className="market"/> Marketplace</li>
            <li><a href="app.js"/><GiBackwardTime className="memories"/> Lembranças</li>
            <li><a href="app.js"/><IoIosArrowDown className="seta"/> Ver Mais</li>
        </ul>
                <span>
                    <h4 className="lateral-2">Seus atalhos</h4>
                    <ul>
                        <li><a href="app.js"/> <GiDoubleDragon className="dragon" /> Dragon Citty</li>
                        <li><a href="app.js"/> <GiEightBall className="ball"/> 8 Ball Pool</li>
                        <li><a href="app.js"/> <FaEarlybirds className="bird"/> Angry Birds</li>
                        <li><a href="app.js"/><IoIosArrowDown className="seta"/> Ver Mais</li>
                    </ul>   
                </span>
    </div>
       

         {apiPhotos ? <div>
         <URL itens="url"/>
         </div> : false   }   
    </div>
    
 );
/*<Body itens={"body"}/> */
/*{apiData ?  <div>
    <List itens={"title"}/> 
    </div> : false}*/
}