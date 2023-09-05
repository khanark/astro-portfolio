// !FIX: Delete this component and use the astro component instead

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import layout, { style } from '../../constants/style';
import { pageContent } from '../../constants/constants';
import type { SocialLink } from '../../constants/constants';
import ProgrammingAnimation from '../assets/programming-animate.svg';
import Typography from './Typography';

const Hero = () => {
    return (
        <div
            className={`${layout.maxWidth} relative flex flex-col justify-between gap-12 py-12  sm:flex-row md:pb-28 md:pt-16`}
        >
            <div className="flex flex-col items-center justify-between sm:items-start">
                <Typography variant="h1">
                    Borislav <br /> Godumov.
                </Typography>
                <div className="flex gap-4">
                    {pageContent.socialLinks.map(
                        (link: SocialLink, index: number) => (
                            <a href={link.link} target="_blank">
                                <FontAwesomeIcon
                                    key={index}
                                    icon={link.icon}
                                    className="cursor-pointer text-2xl  text-gray-800 transition duration-300 hover:-translate-y-1 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-500"
                                />
                            </a>
                        )
                    )}
                </div>
            </div>
            <div className="absolute left-1/3 top-[75%] -z-[1] hidden w-2/3 -translate-x-1/3 -translate-y-1/2 opacity-60 md:block">
                <img src={ProgrammingAnimation} alt="programmer" />
            </div>
            <a
                href="https://storyset.com/web"
                target="_blank"
                className={`${style.textSecondary} absolute bottom-0 left-0 hidden items-center gap-1 p-2 text-xs transition-all duration-300 hover:gap-2 md:flex`}
            >
                <span>Web illustrations by Storyset</span>
                <FontAwesomeIcon icon={pageContent.arrowRight} />
            </a>
            <div className="relative z-[1] flex w-full flex-col sm:max-w-[350px]">
                <div
                    className="absolute -left-1/2 -top-[50px] -z-[1] h-[300px] w-[300px] rounded-full opacity-30"
                    style={{
                        background:
                            'radial-gradient(circle, #0e7490, transparent)',
                        filter: 'blur(20px)',
                    }}
                />
                <Typography variant="span">- Introduction</Typography>
                <div className="flex flex-1 flex-col items-center justify-between sm:items-start">
                    <Typography variant="h2">
                        Software Developer based in Sofia, Bulgaria.
                    </Typography>
                    <Typography>
                        Driven by the ever-evolving nature of technology, I
                        embrace the challenge of staying current with the latest
                        trends and techniques.
                    </Typography>
                    <a
                        href="path/to/your/file.ext"
                        download="filename.ext"
                        className="inline-flex mt-4 w-max items-center gap-3 rounded-md bg-gradient-to-br from-cyan-600 to-cyan-900 px-6 py-3 text-white shadow-2xl shadow-cyan-800 transition-transform duration-300 hover:scale-105"
                    >
                        <FontAwesomeIcon
                            icon={pageContent.utilityIcons.download}
                        />
                        <span>Take a look at my CV</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
