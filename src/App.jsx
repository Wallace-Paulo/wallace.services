import './App.css'
import img from './img/img-perfil.png'


function App() {

  return (
    <>
      <div className='conteudo'>
      <div>
        <img className='img' src={img} alt="Foto do Perfil." />
        <div className='info-text'>
          <h1>WALLACE PAULO</h1>
          <p>DESIGNER GRÁFICO | FRONT-END | UI/UX DESIGNER</p>
        </div>
      </div>
      <div className='card'>
        <a className='btn' rel='noreferrer' target="_blank" href="https://wa.me/5521974234181">ORÇAMENTO</a>
        <a className='btn' rel='noreferrer' target="_blank" href="https://www.instagram.com/wpdesigneer/">INSTAGRAM</a>
        <a className='btn' rel='noreferrer' target="_blank" href="https://www.linkedin.com/in/wallacepaulo/">LINKEDIN</a>
        <a className='btn' rel='noreferrer' target="_blank" href="https://www.behance.net/wallacepaulo">PORTFÓLIO</a>
      </div>
      <div className='rodape'>
        <p>© Wallace Paulo - Todos os direitos reservados.</p>
      </div>
      </div>
      <div className='blur'></div>
      <div className='blur2'></div>
    </>
  )
}

export default App
