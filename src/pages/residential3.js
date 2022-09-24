const ResPage = () => {
const LightBox = ({ children, src, alt, Wrapper = 'div', zIndex = 100 }) => {
 
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper onClick={toggleIsOpen}>
      {children}
      {isOpen ?
        <div onClick={toggleIsOpen} style={{
          position: 'fixed',
          top: '0',
          left: '0',
          height: '100vh',
          width: '100vw',
          backgroundColor: 'rgba(0,0,0,0.7)',
          cursor: 'pointer',
          zIndex
        }}>
          <img src={src}
            alt={alt}
            style={{
              height: '100%',
              width: 'auto'
            }}
          />
        </div>
        : null}
    </Wrapper>
  );
};

  return (
     <div>
      <h1>Lightbox App</h1>
    <h2>My Gallery</h2>
      <LightBox src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" alt="React Logo">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" width="100px" height="100px" alt="React Logo" />
      </LightBox>
    </div>      
  )
}

export default ResPage
