'use client';
import { useState, useEffect, use } from 'react';
import { Sun } from 'lucide-react';
import { Moon } from 'lucide-react';

const ThemeToggle = () => {
	const [darkTheme, setDarkTheme] = useState(true);

	useEffect(() => {
		const theme = localStorage.getItem('theme');
		if (theme === 'dark') {
			setDarkTheme(true);
		} else {
			setDarkTheme(false);
		}
	}, []);

	useEffect(() => {
		if (darkTheme) {
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		}
	}, [darkTheme]);

	return (
		<div>
			{darkTheme ?
				(<Sun className='text-green-600' onClick={() => setDarkTheme(!darkTheme)} />)
				:
				<Moon onClick={() => setDarkTheme(!darkTheme)} />
			}
		</div>
	);
};

export default ThemeToggle;