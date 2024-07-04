import headerStyles from '@/styles/Header.module.css'

const Header = () => {
    return (
        <div>
            <h1 className={headerStyles.title}>
                <span>Premier League</span> News
            </h1>
            <p className={headerStyles.description}>
                keep up to date with the latest PL news.
            </p>
        </div>
    )
};

export default Header;