import React from 'react';
import './home.css'; // 
// Optional: If you separate styles into a CSS file\
import EditorImg from '../assets/editorAman.png';

const Home =()=>{
    return(
        
        <div className='Home-class ' id='Home'>
            <div>
                <div className='editor-pic-box'> 
                <img src={EditorImg} className="main-editor-img"alt="" />
            </div>
            
            <div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />

            <ul className='social-handles'>
                <li><a href="#" target="_blank">
                <i class="fab fa-whatsapp"></i> WhatsApp</a></li>
                <li><a href="https://instagram.com/your-username" target="_blank">
                <i class="fab fa-instagram"></i> Instagram</a></li>
            </ul>
            </div>
            
            </div>
            <div className='editor-info-box'>
                <h1 className='editor-name'>I am Aman Tekam</h1><br>
                </br><nav className='info'>
                     A passionate video
                editor skilled in <br></br>[capcut vn , lillte bit about
                primier pro ]. <br>
                </br>I create engaging and smooth
                edits for <br></br>YouTube INSTAGRAM and social media. <br></br> Excited
                to bring your ideas to life with creativity and
                quality!"
                </nav>
            </div>
        </div>
    );
};

export default Home;
