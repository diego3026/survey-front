import Button from '@mui/material/Button';
import ImageHero from '../../assets/img/hero_image3.png'
import './Hero.css'

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero__image">
                <img className='hero__image-img' src={ImageHero} alt="" />   
                <div className="hero__texto">
                    <div className="hero__texto-titulo">
                         <h2 className='titulo-primero'> ¿QUIERES QUE TÚ</h2>
                         <h2 className='titulo-segundo'> OPINIÓN CUENTE? </h2>
                         <h2 className='titulo-tercero'> Participa en nuestras encuestas y</h2>
                         <h2 className='titulo-cuarto'> ayúdanos a mejorar productos y servicios.</h2>
                         <h2 className='titulo-quinto'> ¡Fácil y rápido!</h2>
                    </div>
                    <div className="hero__texto-button">
                        <Button variant="contained" style={{backgroundColor:"#00B8B0",textTransform:"capitalize"}}> Únete gratis</Button>
                    </div>
                    <div className="hero_texto_final_wrapper"> 
                        <div className="hero_texto_final">
                           <h2 className='titulo-sexto'> +40M </h2>
                           <h2 className = 'titulo-septimo'> Personas se </h2>
                           <h2 className = 'titulo-obtavo'>  han unido </h2>
                        </div>
                        <div className="hero_texto_final2">
                            <h2 className='titulo-noveno'> +600M </h2>
                            <h2 className = 'titulo-decimo'>    De encuestas </h2>
                            <h2 className = 'titulo-once'>     respondidas </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Hero;