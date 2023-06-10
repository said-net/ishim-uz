function Lottie({ data, style={width: '50%'} }) {
    return (
        <lottie-player src={data} background="transparent" style={style} speed="1" loop autoplay></lottie-player>
    );
}

export default Lottie;