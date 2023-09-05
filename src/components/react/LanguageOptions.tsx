import { style } from '../../constants/style';

type Props = {
    borderless?: boolean;
};

const LanguageOptions = ({ borderless }: Props) => {
    const languages = [
        { code: 'en', name: 'English' },
        { code: 'es', name: 'Español' },
        { code: 'bg', name: 'Български' },
        // Add more languages as needed
    ];

    const handleChangeLanguage = (event: any) => {
        const selectedLanguage = event.target.value;
        // Implement your language change logic here
        console.log(`Changed language to ${selectedLanguage}`);
    };

    return (
        <select
            className={`${style.textSecondary} ${
                !borderless ? 'rounded-md border border-gray-300' : ''
            } cursor-pointer bg-transparent px-2 py-1 outline-none`}
            onChange={handleChangeLanguage}
        >
            {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                    {lang.name}
                </option>
            ))}
        </select>
    );
};

export default LanguageOptions;
