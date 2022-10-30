import img from './1051377.png';

export default function Credits(props) {
    return (<div className='flex gap-12'>
        <div className='flex items-center'>
            <div className='text-lg text-left'>
                made by emoral435
            </div>
        </div>
        <a href='https://github.com/emoral435' rel='noreferrer' target='_blank'>
            <img src={img} alt='github logo' className='w-12 h-12 transition ease-in-out duration-700 hover:rotate-[360deg]' />
        </a>
    </div>
    );
};