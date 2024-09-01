import './footer.css';

export default function Footer(props) {
  return (
    <>
      <footer id='footer' style={props.bg}>
        <img src={props.img} alt="" />
        <img className='imagem2' src={props.img2} style={props.display} width={props.width} alt=""/>
      </footer>
    </>
    )
}