import React, {useState} from 'react'

const Header = () => {

	const [backgroundColor, setBgColor] = useState("white");
	const colors = ['#ffcad0', '#baf2f9', '#b8f3bb', '#cdbaff', "palevioletred", "papayawhip"]

	const randColor = () => {
		let rand = Math.floor(Math.random() * colors.length);
		setBgColor(colors[rand])
	}

	return (
		<div   style={{
			backgroundColor: backgroundColor
		}}>
		<button onClick={randColor}>Pasteurize</button>
		</div>
	)
}

export default Header
