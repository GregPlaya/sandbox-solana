import React, { useState } from 'react';

const LightBox = ({ children, src, alt, Wrapper = 'div', zIndex = 100 }) => {
	const [isOpen, setIsOpen] = useState(false);

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
					backgroundColor: 'rgba(0,0,0,0.9)',
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

export default LightBox;
