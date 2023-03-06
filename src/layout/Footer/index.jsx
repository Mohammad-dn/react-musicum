import { Box } from '@mui/system';
import { Button } from 'components';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
    const navigate = useNavigate();
    const handelGoToHome = () => {
        const path = '/home';
        navigate(path);
    };
    const handelGoToLibrary = () => {
        const path = '/library';
        navigate(path);
    };
    const handelGoToExplore = () => {
        const path = '';
        navigate(path);
    };
    const styles = {
        button: {
            color: 'common.white',
            fontSize: '1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            marginLeft: '2rem',
            '&:hover': {
                svg: {
                    path: {
                        fill: '#00C2CB',
                    },
                },
                color: '#00C2CB;',
            },
        },
    };
    return (
        <Box sx={{ display: 'flex', gap: '7rem' }}>
            <Button sx={styles.button} onClick={handelGoToHome}>
                <svg
                    width="17"
                    height="15"
                    viewBox="0 0 17 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M16.0644 4.78563L8.93941 0.535626C8.80931 0.458002 8.65642 0.416595 8.50004 0.416626C8.34393 0.416734 8.19134 0.458136 8.06145 0.535626L0.936454 4.78563C0.795137 4.86994 0.687873 4.99268 0.630505 5.13572C0.573138 5.27876 0.56871 5.43452 0.617875 5.57999C0.66704 5.72546 0.76719 5.85292 0.903534 5.94355C1.03988 6.03418 1.20518 6.08317 1.37504 6.08329H2.1667V13.875C2.1667 14.0628 2.25011 14.243 2.39858 14.3758C2.54704 14.5087 2.74841 14.5833 2.95837 14.5833H14.0417C14.2517 14.5833 14.453 14.5087 14.6015 14.3758C14.75 14.243 14.8334 14.0628 14.8334 13.875V6.08329H15.625C15.795 6.08348 15.9606 6.0347 16.0972 5.94418C16.2338 5.85367 16.3342 5.72621 16.3836 5.58067C16.4329 5.43513 16.4286 5.27924 16.3713 5.13605C16.314 4.99287 16.2066 4.87 16.0652 4.78563H16.0644ZM13.25 13.1666H3.75004V4.80829L8.50004 1.97496L13.25 4.80829V13.1666Z"
                        fill="white"
                    />
                </svg>
                Home
            </Button>
            <Button sx={styles.button} onClick={handelGoToExplore}>
                <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M2.58335 11.0647C3.6374 12.2102 5.08922 12.948 6.66533 13.139C8.24143 13.33 9.83301 12.9611 11.1402 12.1018L15.1886 16.4952C15.3324 16.646 15.532 16.7367 15.7441 16.7479C15.9563 16.7591 16.1641 16.6899 16.3229 16.555C16.4816 16.4202 16.5786 16.2306 16.5929 16.0271C16.6072 15.8236 16.5377 15.6224 16.3993 15.4669L12.351 11.0736C13.4453 9.88166 14.0231 8.33135 13.9664 6.73884C13.9097 5.14633 13.2228 3.63158 12.0459 2.50349C10.8689 1.37541 9.29055 0.718975 7.63262 0.668061C5.97469 0.617146 4.36211 1.17559 3.12374 2.2295C2.48396 2.77256 1.96246 3.43192 1.58904 4.16991C1.21561 4.9079 0.997579 5.71005 0.947396 6.53054C0.897213 7.35102 1.01586 8.17377 1.29657 8.95176C1.57727 9.72976 2.01453 10.4478 2.58335 11.0647ZM4.20006 3.39919C5.04653 2.68032 6.12774 2.26686 7.25948 2.22925C8.39121 2.19163 9.50345 2.53219 10.4067 3.1929C11.3099 3.85361 11.9483 4.7936 12.213 5.8527C12.4777 6.9118 12.3524 8.0245 11.8585 9.00122C11.3645 9.97793 10.5324 10.7582 9.50399 11.2092C8.47556 11.6601 7.31442 11.7538 6.2184 11.4743C5.12238 11.1947 4.15929 10.5593 3.49321 9.67613C2.82714 8.79301 2.4993 7.71687 2.56554 6.63107C2.60105 6.01393 2.76384 5.41033 3.04444 4.85527C3.32504 4.30021 3.71788 3.80475 4.20015 3.39763L4.20006 3.39919Z"
                        fill="white"
                    />
                </svg>
                Explore
            </Button>
            <Button sx={styles.button} onClick={handelGoToLibrary}>
                <svg
                    width="17"
                    height="13"
                    viewBox="0 0 17 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M15.5833 2.75001H8.93775L7.72083 0.595634C7.66172 0.491262 7.57068 0.403572 7.45802 0.34249C7.34535 0.281408 7.21556 0.249372 7.08333 0.250009H1.41666C1.2288 0.250009 1.04863 0.315857 0.915794 0.433068C0.782956 0.550278 0.708328 0.709249 0.708328 0.875009V12.125C0.708328 12.2908 0.782956 12.4497 0.915794 12.567C1.04863 12.6842 1.2288 12.75 1.41666 12.75H15.5833C15.7712 12.75 15.9514 12.6842 16.0842 12.567C16.217 12.4497 16.2917 12.2908 16.2917 12.125V3.37501C16.2917 3.20925 16.217 3.05028 16.0842 2.93307C15.9514 2.81586 15.7712 2.75001 15.5833 2.75001ZM2.12499 1.50001H6.64558L7.35391 2.75001H2.12499V1.50001ZM14.875 11.5H2.12499V4.00001H14.875V11.5Z"
                        fill="white"
                    />
                </svg>
                Library
            </Button>
        </Box>
    );
}
