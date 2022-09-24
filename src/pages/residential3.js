import * as React from "react"
import { Link } from "gatsby"

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

/* Step 3: Export your component so it
can be used by other parts of your app. */
export default LightBox

ReactDOM.render(<LightboxApp />, document.querySelector("#app"))
