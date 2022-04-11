import React from 'react'
interface Props {
    name: String,
}
const Icon = (props: Props) => {
    const { name } = props;
    switch (name) {
        case 'a': {
            return <></>
        }
        case 'plus2': {
            return <><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.75 5.25V0H5.25V5.25H0V6.75H5.25V12H6.75V6.75H12V5.25H6.75Z" fill="#59bad8" />
            </svg>
            </>
        }
        case 'chevbtmwht': {
            return <><svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L9 9L17 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            </>
        }
        case 'tick': {
            return <><svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.33301 6L6.33301 11L14.6663 1" stroke="#A5A5A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            </>
        }
        case 'menu-1': {
            return <><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.10938 21.1406H16.2656C17.4291 21.1406 18.375 20.1942 18.375 19.0312C18.375 17.8678 17.4291 16.9219 16.2656 16.9219H2.10938C0.946405 16.9219 0 17.8678 0 19.0312C0 20.1942 0.946405 21.1406 2.10938 21.1406Z" fill="#59bad8" />
                <path d="M2.10938 14.1094H16.2656C17.4291 14.1094 18.375 13.163 18.375 12C18.375 10.8366 17.4291 9.89062 16.2656 9.89062H2.10938C0.946405 9.89062 0 10.8366 0 12C0 13.163 0.946405 14.1094 2.10938 14.1094Z" fill="#59bad8" />
                <path d="M2.10938 7.07812H16.2656C17.4291 7.07812 18.375 6.13172 18.375 4.96875C18.375 3.80531 17.4291 2.85938 16.2656 2.85938H2.10938C0.946405 2.85938 0 3.80531 0 4.96875C0 6.13172 0.946405 7.07812 2.10938 7.07812Z" fill="#59bad8" />
                <path d="M21.8906 21.1406C23.0541 21.1406 24 20.1942 24 19.0312C24 17.8678 23.0541 16.9219 21.8906 16.9219C20.7277 16.9219 19.7812 17.8678 19.7812 19.0312C19.7812 20.1942 20.7277 21.1406 21.8906 21.1406Z" fill="#59bad8" />
                <path d="M21.8906 14.1094C23.0541 14.1094 24 13.163 24 12C24 10.8366 23.0541 9.89062 21.8906 9.89062C20.7277 9.89062 19.7812 10.8366 19.7812 12C19.7812 13.163 20.7277 14.1094 21.8906 14.1094Z" fill="#59bad8" />
                <path d="M21.8906 7.07812C23.0541 7.07812 24 6.13172 24 4.96875C24 3.80531 23.0541 2.85938 21.8906 2.85938C20.7277 2.85938 19.7812 3.80531 19.7812 4.96875C19.7812 6.13172 20.7277 7.07812 21.8906 7.07812Z" fill="#59bad8" />
            </svg>
            </>
        }
        case 'plus1': {
            return <>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.75 5.25V0H5.25V5.25H0V6.75H5.25V12H6.75V6.75H12V5.25H6.75Z" fill="#2E53DA" />
                </svg>
            </>
        }
        case 'chevbtm': {
            return <>
                <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L9 9L17 1" stroke="#59bad8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

            </>
        }
        case 'plus': {
            return <>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.75 5.25V0H5.25V5.25H0V6.75H5.25V12H6.75V6.75H12V5.25H6.75Z" fill="white" />
                </svg>
            </>
        }
        case 'menu': {
            return <svg width="5" height="24" viewBox="0 0 5 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="2.4" cy="2.4" r="2.4" fill="#59bad8" />
                <circle cx="2.4" cy="12" r="2.4" fill="#59bad8" />
                <circle cx="2.4" cy="21.6" r="2.4" fill="#59bad8" />
            </svg>

        }
        case 'bin': {
            return <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0.3125C7.6226 0.312459 8.22162 0.550666 8.67417 0.978254C9.12673 1.40584 9.3985 1.9904 9.43375 2.612L9.4375 2.75H13.375C13.5175 2.75004 13.6547 2.80418 13.7588 2.90148C13.863 2.99878 13.9263 3.13197 13.936 3.27416C13.9457 3.41635 13.9011 3.55692 13.8112 3.66747C13.7212 3.77803 13.5927 3.85032 13.4515 3.86975L13.375 3.875H12.778L11.818 13.64C11.7699 14.1268 11.5503 14.5807 11.1985 14.9206C10.8466 15.2605 10.3854 15.4642 9.89725 15.4955L9.76525 15.5H4.23475C3.74535 15.5 3.27189 15.3259 2.899 15.009C2.52611 14.692 2.27809 14.2528 2.19925 13.7698L2.182 13.6392L1.22125 3.875H0.625C0.489072 3.87499 0.357743 3.82577 0.255302 3.73642C0.152861 3.64708 0.0862362 3.52367 0.06775 3.389L0.0625 3.3125C0.0625057 3.17657 0.111732 3.04524 0.201075 2.9428C0.290419 2.84036 0.413835 2.77374 0.5485 2.75525L0.625 2.75H4.5625C4.5625 2.10353 4.81931 1.48355 5.27643 1.02643C5.73355 0.569307 6.35353 0.3125 7 0.3125ZM11.6478 3.875H2.3515L3.30175 13.529C3.32279 13.7444 3.41772 13.9459 3.57042 14.0993C3.72312 14.2527 3.92419 14.3485 4.1395 14.3705L4.23475 14.375H9.76525C10.2153 14.375 10.597 14.0562 10.684 13.6235L10.699 13.529L11.647 3.875H11.6478ZM8.3125 5.9375C8.44843 5.93751 8.57976 5.98673 8.6822 6.07608C8.78464 6.16542 8.85126 6.28883 8.86975 6.4235L8.875 6.5V11.75C8.87496 11.8925 8.82082 12.0297 8.72352 12.1338C8.62622 12.238 8.49303 12.3013 8.35084 12.311C8.20865 12.3207 8.06808 12.2761 7.95753 12.1862C7.84697 12.0962 7.77468 11.9677 7.75525 11.8265L7.75 11.75V6.5C7.75 6.35082 7.80926 6.20774 7.91475 6.10225C8.02024 5.99676 8.16332 5.9375 8.3125 5.9375ZM5.6875 5.9375C5.82343 5.93751 5.95476 5.98673 6.0572 6.07608C6.15964 6.16542 6.22626 6.28883 6.24475 6.4235L6.25 6.5V11.75C6.24996 11.8925 6.19582 12.0297 6.09852 12.1338C6.00122 12.238 5.86803 12.3013 5.72584 12.311C5.58365 12.3207 5.44308 12.2761 5.33253 12.1862C5.22197 12.0962 5.14968 11.9677 5.13025 11.8265L5.125 11.75V6.5C5.125 6.35082 5.18426 6.20774 5.28975 6.10225C5.39524 5.99676 5.53832 5.9375 5.6875 5.9375ZM7 1.4375C6.67061 1.43751 6.35326 1.56138 6.11096 1.78451C5.86865 2.00764 5.7191 2.31372 5.692 2.642L5.6875 2.75H8.3125C8.3125 2.4019 8.17422 2.06806 7.92808 1.82192C7.68194 1.57578 7.3481 1.4375 7 1.4375Z" fill="#59bad8" />
            </svg>




        }
        case 'edit': {
            return <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.3555 3.05599L11.944 4.64374L10.3555 3.05599ZM11.377 1.65724L7.08175 5.95249C6.85982 6.17412 6.70846 6.45648 6.64675 6.76399L6.25 8.74999L8.236 8.35249C8.5435 8.29099 8.8255 8.14024 9.0475 7.91824L13.3428 3.62299C13.4718 3.49392 13.5742 3.34069 13.6441 3.17205C13.7139 3.0034 13.7499 2.82265 13.7499 2.64012C13.7499 2.45758 13.7139 2.27683 13.6441 2.10819C13.5742 1.93955 13.4718 1.78632 13.3428 1.65724C13.2137 1.52817 13.0604 1.42578 12.8918 1.35593C12.7232 1.28608 12.5424 1.25012 12.3599 1.25012C12.1773 1.25012 11.9966 1.28608 11.8279 1.35593C11.6593 1.42578 11.5061 1.52817 11.377 1.65724V1.65724Z" stroke="#59bad8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12.25 10.2499V12.4999C12.25 12.8978 12.092 13.2793 11.8107 13.5606C11.5294 13.8419 11.1478 13.9999 10.75 13.9999H2.5C2.10218 13.9999 1.72064 13.8419 1.43934 13.5606C1.15804 13.2793 1 12.8978 1 12.4999V4.24994C1 3.85211 1.15804 3.47058 1.43934 3.18928C1.72064 2.90797 2.10218 2.74994 2.5 2.74994H4.75" stroke="#59bad8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>



        }
        case 'home': {
            return <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.55 0.533014C7.95577 0.191036 8.46935 0.003479 9 0.003479C9.53065 0.003479 10.0442 0.191036 10.45 0.533014L17.2 6.22801C17.708 6.65501 18 7.28401 18 7.94801V17.75C18 18.2141 17.8156 18.6593 17.4874 18.9874C17.1592 19.3156 16.7141 19.5 16.25 19.5H13.25C12.7859 19.5 12.3408 19.3156 12.0126 18.9874C11.6844 18.6593 11.5 18.2141 11.5 17.75V12.75C11.5 12.5511 11.421 12.3603 11.2803 12.2197C11.1397 12.079 10.9489 12 10.75 12H7.25C7.05109 12 6.86032 12.079 6.71967 12.2197C6.57902 12.3603 6.5 12.5511 6.5 12.75V17.75C6.5 18.2141 6.31563 18.6593 5.98744 18.9874C5.65925 19.3156 5.21413 19.5 4.75 19.5H1.75C1.52019 19.5 1.29262 19.4547 1.0803 19.3668C0.867984 19.2789 0.675066 19.15 0.512563 18.9874C0.350061 18.8249 0.221157 18.632 0.133211 18.4197C0.0452652 18.2074 0 17.9798 0 17.75V7.94701C0 7.28401 0.292 6.65501 0.8 6.22701L7.55 0.533014Z" fill="white" />
            </svg>


        }
        case 'kon': {
            return <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.80002 5.04999C9.06529 5.04999 9.3197 4.94462 9.50727 4.75704C9.69484 4.56947 9.80022 4.31506 9.80022 4.04979C9.80022 3.78452 9.69484 3.53012 9.50727 3.34255C9.3197 3.15497 9.06529 3.04959 8.80002 3.04959C8.53475 3.04959 8.28035 3.15497 8.09277 3.34255C7.9052 3.53012 7.79982 3.78452 7.79982 4.04979C7.79982 4.31506 7.9052 4.56947 8.09277 4.75704C8.28035 4.94462 8.53475 5.04999 8.80002 5.04999ZM1.00002 18.4H8.80002V17.2H1.60002V16.2004C1.60002 15.4264 2.22762 14.8 3.00042 14.8H8.80002V14.2C8.80002 13.5244 9.02322 12.9004 9.40002 12.4V7.59999H11.2V11.26L11.2504 11.2504C11.3882 10.5113 11.7985 9.85096 12.4 9.39999V7.59999H14.8V8.79999H16V7.59999H16.1116C17.1832 7.59999 17.6236 6.22359 16.7476 5.60319L9.72762 0.620794C9.45709 0.428794 9.13356 0.325653 8.80182 0.325653C8.47008 0.325653 8.14655 0.428794 7.87602 0.620794L0.852421 5.60319C-0.019979 6.22359 0.416821 7.59999 1.48842 7.59999H1.60002V14.008C0.878821 14.4712 0.400021 15.28 0.400021 16.2004V17.8C0.400021 17.9591 0.463235 18.1117 0.575757 18.2243C0.688279 18.3368 0.840891 18.4 1.00002 18.4ZM8.56962 1.59999C8.63715 1.55215 8.71786 1.52646 8.80062 1.52646C8.88338 1.52646 8.96409 1.55215 9.03162 1.59999L15.7984 6.39999H1.80282L8.56962 1.59999ZM2.80002 13.6072V7.59999H5.20002V13.6H3.00042C2.93355 13.5998 2.86671 13.6022 2.80002 13.6072ZM8.20002 13.6H6.40002V7.59999H8.20002V13.6ZM12.4 12.4V11.8C12.4 11.3226 12.5897 10.8648 12.9272 10.5272C13.2648 10.1896 13.7226 9.99999 14.2 9.99999H16.6C17.0774 9.99999 17.5352 10.1896 17.8728 10.5272C18.2104 10.8648 18.4 11.3226 18.4 11.8V12.4H19C19.4774 12.4 19.9352 12.5896 20.2728 12.9272C20.6104 13.2648 20.8 13.7226 20.8 14.2V16H18.4V15.4C18.4 15.2409 18.3368 15.0883 18.2243 14.9757C18.1118 14.8632 17.9592 14.8 17.8 14.8C17.6409 14.8 17.4883 14.8632 17.3758 14.9757C17.2632 15.0883 17.2 15.2409 17.2 15.4V16H13.6V15.4C13.6 15.2409 13.5368 15.0883 13.4243 14.9757C13.3118 14.8632 13.1592 14.8 13 14.8C12.8409 14.8 12.6883 14.8632 12.5758 14.9757C12.4632 15.0883 12.4 15.2409 12.4 15.4V16H10V14.2C10 13.7226 10.1897 13.2648 10.5272 12.9272C10.8648 12.5896 11.3226 12.4 11.8 12.4H12.4ZM13.6 11.8V12.4H17.2V11.8C17.2 11.6409 17.1368 11.4883 17.0243 11.3757C16.9118 11.2632 16.7592 11.2 16.6 11.2H14.2C14.0409 11.2 13.8883 11.2632 13.7758 11.3757C13.6632 11.4883 13.6 11.6409 13.6 11.8ZM18.4 17.2H20.8V19C20.8 19.4774 20.6104 19.9352 20.2728 20.2728C19.9352 20.6104 19.4774 20.8 19 20.8H11.8C11.3226 20.8 10.8648 20.6104 10.5272 20.2728C10.1897 19.9352 10 19.4774 10 19V17.2H12.4V17.8C12.4 17.9591 12.4632 18.1117 12.5758 18.2243C12.6883 18.3368 12.8409 18.4 13 18.4C13.1592 18.4 13.3118 18.3368 13.4243 18.2243C13.5368 18.1117 13.6 17.9591 13.6 17.8V17.2H17.2V17.8C17.2 17.9591 17.2632 18.1117 17.3758 18.2243C17.4883 18.3368 17.6409 18.4 17.8 18.4C17.9592 18.4 18.1118 18.3368 18.2243 18.2243C18.3368 18.1117 18.4 17.9591 18.4 17.8V17.2Z" fill="white" fillOpacity="0.8" />
            </svg>

        }

        case 'lon': {
            return <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.9953 19.1049L0 12.1701V22H22V12.3468L10.9953 19.1049Z" fill="white" fillOpacity="0.8" />
                <path d="M2.79297 0V12.2414L11.0056 17.4208L19.207 12.384V0L2.79297 0ZM10.9875 7.86328C12.445 7.86328 13.6301 8.93836 13.6301 10.2596C13.6301 11.3794 12.7789 12.3217 11.6321 12.5834V13.5781H10.343V12.5834C9.1966 12.3217 8.34496 11.3794 8.34496 10.2596H9.63402C9.63402 10.8698 10.2416 11.3665 10.9875 11.3665C11.7339 11.3665 12.3411 10.8698 12.3411 10.2596C12.3411 9.64906 11.7339 9.15234 10.9875 9.15234C9.53047 9.15234 8.34496 8.07727 8.34496 6.75598C8.34496 5.63621 9.1966 4.69391 10.343 4.43223V3.4375H11.6321V4.43223C12.7789 4.69391 13.6301 5.63621 13.6301 6.75598H12.3411C12.3411 6.14582 11.7339 5.6491 10.9875 5.6491C10.2416 5.6491 9.63402 6.14582 9.63402 6.75598C9.63402 7.36656 10.2416 7.86328 10.9875 7.86328Z" fill="white" fillOpacity="0.8" />
                <path d="M1.50391 7.63518L0 8.79202V10.4796L1.50391 11.4281V7.63518Z" fill="white" fillOpacity="0.8" />
                <path d="M20.4961 7.63518V11.5925L22 10.669V8.79203L20.4961 7.63518Z" fill="white" fillOpacity="0.8" />
            </svg>

        }

        case 'for': {
            return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0)">
                    <path d="M12 0.749977C10.0616 0.749977 8.48438 2.37413 8.48438 4.31248C8.48438 6.25084 10.0616 7.82811 12 7.82811C13.9384 7.82811 15.5156 6.25084 15.5156 4.31248C15.5156 2.37413 13.9384 0.749977 12 0.749977Z" fill="white" fillOpacity="0.8" />
                    <path d="M16.9219 13.4531C18.473 13.4531 19.7344 12.1917 19.7344 10.6406C19.7344 9.08951 18.473 7.82809 16.9219 7.82809C15.3708 7.82809 14.1094 9.08951 14.1094 10.6406C14.1094 12.1917 15.3708 13.4531 16.9219 13.4531Z" fill="white" fillOpacity="0.8" />
                    <path d="M0.703126 21.8906H1.40625C2.18299 21.8906 2.8125 21.2609 2.8125 20.4843V12.0468C2.8125 11.2701 2.18299 10.6406 1.40625 10.6406H0.703126C0.314759 10.6406 0 10.9553 0 11.3437V21.1875C0 21.5758 0.314759 21.8906 0.703126 21.8906Z" fill="white" fillOpacity="0.8" />
                    <path d="M4.21875 12.0469V20.4844C4.21875 20.6261 4.19714 20.762 4.177 20.898L8.27967 22.9261C8.76508 23.1685 9.30909 23.2969 9.85145 23.2969C10.0671 23.2969 16.2028 23.2969 16.2028 23.2969C16.7254 23.2969 17.2363 23.1521 17.6812 22.8774L23.4383 18.8073C24.0583 18.3404 24.1846 17.4573 23.7191 16.8373C23.2969 16.2744 22.4786 16.0305 21.7504 16.5566L17.4225 18.9978C17.3216 19.0507 17.2097 19.0781 17.0957 19.0781C16.8422 19.0781 8.74494 19.0781 9.04688 19.0781C8.65815 19.0781 8.34376 18.7638 8.34376 18.375C8.34376 17.9865 8.65815 17.6719 9.04688 17.6719H15.5156C16.2924 17.6719 16.9219 17.0422 16.9219 16.2656C16.9219 15.4889 16.2924 14.8594 15.5156 14.8594H12.2128L8.87989 12.6374C8.30109 12.2509 7.62671 12.0469 6.92981 12.0469H4.21875Z" fill="white" fillOpacity="0.8" />
                </g>
                <defs>
                    <clipPath id="clip0">
                        <rect width="24" height="24" fill="white" />
                    </clipPath>
                </defs>
            </svg>

        }
        case 'opp': {
            return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0)">
                    <path d="M17.6016 12.8438C14.5258 12.8438 12.0234 15.3461 12.0234 18.4219C12.0234 21.4977 14.5258 24 17.6016 24C20.7032 24 23.2266 21.4977 23.2266 18.4219C23.2266 15.3461 20.7032 12.8438 17.6016 12.8438ZM19.3136 17.747L17.4386 19.997C17.3041 20.1583 17.1057 20.25 16.8985 20.25C16.8715 20.25 16.8445 20.2485 16.8173 20.2453C16.5817 20.2179 16.3756 20.0736 16.2695 19.8613L15.5195 18.3613C15.3458 18.014 15.4867 17.5916 15.834 17.418C16.1812 17.2442 16.6036 17.3851 16.7773 17.7324L17.0465 18.2708L18.2333 16.8467C18.4819 16.5485 18.9253 16.5082 19.2235 16.7567C19.5219 17.0053 19.5622 17.4487 19.3136 17.747Z" fill="white" fillOpacity="0.8" />
                    <path d="M17.2985 4.00561L14.4456 1.05534C14.4443 1.05394 14.4428 1.05248 14.4415 1.05108C13.7846 0.383109 12.8706 0 11.9339 0H2.88281C1.7197 0 0.773438 0.946266 0.773438 2.10938V20.3438C0.773438 21.5069 1.7197 22.4531 2.88281 22.4531H11.9011C11.0928 21.3135 10.6172 19.9223 10.6172 18.4219C10.6172 14.5707 13.7504 11.4375 17.6016 11.4375C17.8388 11.4375 18.0734 11.4494 18.3047 11.4723V6.46781C18.3047 5.54114 17.9474 4.66688 17.2985 4.00561ZM8.22656 15.7031H4.47656C4.08825 15.7031 3.77344 15.3883 3.77344 15C3.77344 14.6117 4.08825 14.2969 4.47656 14.2969H8.22656C8.61487 14.2969 8.92969 14.6117 8.92969 15C8.92969 15.3883 8.61487 15.7031 8.22656 15.7031ZM8.22656 11.9531H4.47656C4.08825 11.9531 3.77344 11.6383 3.77344 11.25C3.77344 10.8617 4.08825 10.5469 4.47656 10.5469H8.22656C8.61487 10.5469 8.92969 10.8617 8.92969 11.25C8.92969 11.6383 8.61487 11.9531 8.22656 11.9531ZM8.22656 8.20312H4.47656C4.08825 8.20312 3.77344 7.88831 3.77344 7.5C3.77344 7.11169 4.08825 6.79688 4.47656 6.79688H8.22656C8.61487 6.79688 8.92969 7.11169 8.92969 7.5C8.92969 7.88831 8.61487 8.20312 8.22656 8.20312ZM12.7266 11.9531H11.9766C11.5883 11.9531 11.2734 11.6383 11.2734 11.25C11.2734 10.8617 11.5883 10.5469 11.9766 10.5469H12.7266C13.1149 10.5469 13.4297 10.8617 13.4297 11.25C13.4297 11.6383 13.1149 11.9531 12.7266 11.9531ZM12.7266 8.20312H11.9766C11.5883 8.20312 11.2734 7.88831 11.2734 7.5C11.2734 7.11169 11.5883 6.79688 11.9766 6.79688H12.7266C13.1149 6.79688 13.4297 7.11169 13.4297 7.5C13.4297 7.88831 13.1149 8.20312 12.7266 8.20312Z" fill="white" fillOpacity="0.8" />
                </g>
                <defs>
                    <clipPath id="clip0">
                        <rect width="24" height="24" fill="white" />
                    </clipPath>
                </defs>
            </svg>

        }
        case 'mes': {
            return <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 3C24 2.20435 23.6839 1.44129 23.1213 0.87868C22.5587 0.316071 21.7956 0 21 0L3 0C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3L0 15C0 15.7957 0.316071 16.5587 0.87868 17.1213C1.44129 17.6839 2.20435 18 3 18H17.379C17.7768 18.0001 18.1583 18.1582 18.4395 18.4395L22.719 22.719C22.8238 22.8241 22.9574 22.8957 23.1029 22.9248C23.2485 22.9539 23.3994 22.9392 23.5365 22.8825C23.6737 22.8258 23.7909 22.7297 23.8734 22.6063C23.9559 22.483 24 22.3379 24 22.1895V3ZM5.25 4.5H18.75C18.9489 4.5 19.1397 4.57902 19.2803 4.71967C19.421 4.86032 19.5 5.05109 19.5 5.25C19.5 5.44891 19.421 5.63968 19.2803 5.78033C19.1397 5.92098 18.9489 6 18.75 6H5.25C5.05109 6 4.86032 5.92098 4.71967 5.78033C4.57902 5.63968 4.5 5.44891 4.5 5.25C4.5 5.05109 4.57902 4.86032 4.71967 4.71967C4.86032 4.57902 5.05109 4.5 5.25 4.5ZM5.25 8.25H18.75C18.9489 8.25 19.1397 8.32902 19.2803 8.46967C19.421 8.61032 19.5 8.80109 19.5 9C19.5 9.19891 19.421 9.38968 19.2803 9.53033C19.1397 9.67098 18.9489 9.75 18.75 9.75H5.25C5.05109 9.75 4.86032 9.67098 4.71967 9.53033C4.57902 9.38968 4.5 9.19891 4.5 9C4.5 8.80109 4.57902 8.61032 4.71967 8.46967C4.86032 8.32902 5.05109 8.25 5.25 8.25ZM5.25 12H12.75C12.9489 12 13.1397 12.079 13.2803 12.2197C13.421 12.3603 13.5 12.5511 13.5 12.75C13.5 12.9489 13.421 13.1397 13.2803 13.2803C13.1397 13.421 12.9489 13.5 12.75 13.5H5.25C5.05109 13.5 4.86032 13.421 4.71967 13.2803C4.57902 13.1397 4.5 12.9489 4.5 12.75C4.5 12.5511 4.57902 12.3603 4.71967 12.2197C4.86032 12.079 5.05109 12 5.25 12Z" fill="white" fillOpacity="0.8" />
            </svg>

        }
        case 'search': {
            return <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 20L15.514 15.506L20 20ZM18 9.5C18 11.7543 17.1045 13.9163 15.5104 15.5104C13.9163 17.1045 11.7543 18 9.5 18C7.24566 18 5.08365 17.1045 3.48959 15.5104C1.89553 13.9163 1 11.7543 1 9.5C1 7.24566 1.89553 5.08365 3.48959 3.48959C5.08365 1.89553 7.24566 1 9.5 1C11.7543 1 13.9163 1.89553 15.5104 3.48959C17.1045 5.08365 18 7.24566 18 9.5V9.5Z" stroke="#A5A5A5" strokeWidth="2" strokeLinecap="round" />
            </svg>


        }

        case 'english': {
            return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-11 0H35.352V24H-11V0Z" fill="#012169" />
                <path d="M-11 0V2.68125L30.1691 24H35.352V21.3187L-5.81708 0H-11ZM35.352 0V2.68125L-5.81708 24H-11V21.3187L30.1691 0H35.352Z" fill="white" />
                <path d="M8.31485 0V24H16.0372V0H8.31485ZM-11 8.00156V15.9984H35.352V8.00156H-11Z" fill="white" />
                <path d="M-11 9.6V14.4H35.352V9.6H-11ZM9.85841 0V24H14.4936V0H9.85841ZM-11 24L4.44916 15.9984H7.90746L-7.54623 24H-11ZM-11 0L4.44916 8.00156H0.995394L-11 1.79063V0ZM16.4491 8.00156L31.8982 0H35.352L19.9029 8.00156H16.4491ZM35.352 24L19.9029 15.9984H23.3566L35.352 22.2094V24Z" fill="#C8102E" />
            </svg>

        }
        case 'bell': {
            return <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.72111 1.00299L8.25511 0.999987C4.91111 0.991987 2.00811 3.70899 1.98511 6.99999V12.79C1.98511 13.58 1.88511 14.351 1.45411 15.008L1.16711 15.446C0.73011 16.11 1.20011 17 1.98511 17H16.0151C16.8001 17 17.2691 16.11 16.8331 15.446L16.5461 15.008C16.1161 14.351 16.0151 13.579 16.0151 12.789V7.00099C15.9751 3.70899 13.0651 1.01099 9.72111 1.00299V1.00299Z" stroke="#59bad8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 17C12 17.7956 11.6839 18.5587 11.1213 19.1213C10.5587 19.6839 9.79565 20 9 20C8.20435 20 7.44129 19.6839 6.87868 19.1213C6.31607 18.5587 6 17.7956 6 17" stroke="#59bad8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

        }

        case 'setting': {
            return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.4915 7.875C10.6756 7.875 9.87808 8.11693 9.19973 8.57019C8.52138 9.02345 7.99267 9.66769 7.68045 10.4214C7.36824 11.1752 7.28655 12.0046 7.44572 12.8047C7.60488 13.6049 7.99775 14.3399 8.57464 14.9168C9.15153 15.4937 9.88654 15.8866 10.6867 16.0457C11.4869 16.2049 12.3163 16.1232 13.07 15.811C13.8238 15.4988 14.468 14.9701 14.9213 14.2917C15.3745 13.6134 15.6165 12.8158 15.6165 12C15.6152 10.9064 15.1802 9.85787 14.4069 9.08455C13.6336 8.31124 12.5851 7.87624 11.4915 7.875ZM11.4915 14.625C10.9723 14.625 10.4648 14.471 10.0331 14.1826C9.60141 13.8942 9.26495 13.4842 9.06627 13.0045C8.86759 12.5249 8.81561 11.9971 8.9169 11.4879C9.01818 10.9787 9.26819 10.511 9.6353 10.1438C10.0024 9.77673 10.4701 9.52672 10.9793 9.42544C11.4885 9.32415 12.0163 9.37614 12.496 9.57482C12.9757 9.7735 13.3856 10.1099 13.6741 10.5416C13.9625 10.9733 14.1165 11.4808 14.1165 12C14.1157 12.696 13.8389 13.3632 13.3467 13.8553C12.8546 14.3474 12.1874 14.6242 11.4915 14.625Z" fill="#59bad8" />
                <path d="M21.7827 15.1087L20.2935 13.8828C20.5575 12.6415 20.5575 11.3585 20.2935 10.1172L21.7827 8.8913C21.9545 8.75057 22.0705 8.5533 22.1101 8.3348C22.1497 8.11631 22.1102 7.89086 21.9986 7.69885L20.47 5.05121C20.3594 4.85856 20.1839 4.71157 19.9749 4.63659C19.7658 4.5616 19.5369 4.56351 19.3292 4.64199L17.5216 5.31919C16.58 4.46845 15.4691 3.8264 14.2619 3.43519L13.9448 1.53343C13.9089 1.31425 13.7961 1.11503 13.6266 0.971473C13.4572 0.827913 13.2421 0.749399 13.02 0.750003H9.96274C9.74066 0.749407 9.52562 0.827918 9.35616 0.971467C9.18671 1.11502 9.07391 1.31422 9.03799 1.53338L8.72102 3.43519C7.5138 3.82639 6.40294 4.46844 5.46133 5.31919L3.6536 4.64189C3.44585 4.56347 3.21696 4.56159 3.00794 4.63658C2.79893 4.71158 2.62345 4.85855 2.51294 5.05116L0.984302 7.69899C0.872815 7.89102 0.833334 8.11647 0.872929 8.33496C0.912525 8.55344 1.02861 8.7507 1.2004 8.89139L2.68947 10.1172C2.42547 11.3585 2.42547 12.6415 2.68947 13.8828L1.20025 15.1087C1.0285 15.2494 0.912443 15.4467 0.872874 15.6652C0.833305 15.8837 0.872805 16.1091 0.984302 16.3012L2.51299 18.9488C2.62351 19.1414 2.79901 19.2884 3.00806 19.3634C3.2171 19.4384 3.44602 19.4365 3.65379 19.358L5.46138 18.6808C6.40299 19.5316 7.51385 20.1736 8.72107 20.5648L9.03804 22.4666C9.07395 22.6857 9.18673 22.8849 9.35618 23.0285C9.52563 23.1721 9.74066 23.2506 9.96274 23.25H13.02C13.2421 23.2506 13.4571 23.1721 13.6266 23.0286C13.7961 22.885 13.9089 22.6858 13.9448 22.4666L14.2618 20.5648C15.469 20.1736 16.5799 19.5316 17.5215 18.6808L19.3292 19.3581C19.5369 19.4365 19.7658 19.4384 19.9748 19.3634C20.1838 19.2884 20.3593 19.1415 20.4698 18.9488L21.9984 16.301C22.1099 16.1091 22.1494 15.8837 22.1099 15.6652C22.0704 15.4467 21.9544 15.2495 21.7827 15.1087ZM19.4092 17.7862L17.1541 16.9413L16.8126 17.2851C15.873 18.2321 14.6979 18.9113 13.4083 19.2526L12.9395 19.3762L12.5437 21.75H10.4395L10.0437 19.3762L9.57499 19.2526C8.28541 18.9113 7.11023 18.2321 6.17069 17.2851L5.82921 16.9413L3.57372 17.7862L2.5218 15.9638L4.37941 14.4346L4.25285 13.9671C3.90479 12.6788 3.90479 11.3212 4.25285 10.0329L4.37941 9.56546L2.5218 8.03621L3.57396 6.2138L5.82907 7.05868L6.17055 6.71489C7.11009 5.76791 8.28526 5.08872 9.57485 4.74741L10.0436 4.62385L10.4393 2.25H12.5437L12.9394 4.62385L13.4081 4.74741C14.6977 5.08872 15.8729 5.76791 16.8124 6.71489L17.1539 7.05868L19.409 6.2138L20.4612 8.03616L18.6036 9.56546L18.7302 10.0329C19.0782 11.3212 19.0782 12.6788 18.7302 13.9671L18.6036 14.4346L20.4612 15.9638L19.4092 17.7862Z" fill="#59bad8" />
            </svg>


        }

        case 'user': {
            return <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.1212 15.8969C16.679 14.8496 16.0374 13.8984 15.2321 13.0961C14.4292 12.2915 13.4781 11.65 12.4313 11.207C12.4219 11.2023 12.4126 11.2 12.4032 11.1953C13.8633 10.1406 14.8126 8.42266 14.8126 6.48438C14.8126 3.27344 12.211 0.671875 9.00006 0.671875C5.78912 0.671875 3.18756 3.27344 3.18756 6.48438C3.18756 8.42266 4.13678 10.1406 5.59693 11.1977C5.58756 11.2023 5.57818 11.2047 5.56881 11.2094C4.51881 11.6523 3.57662 12.2875 2.76803 13.0984C1.96344 13.9013 1.32194 14.8524 0.878965 15.8992C0.443782 16.924 0.209079 18.0228 0.187559 19.1359C0.186933 19.161 0.191321 19.1858 0.200463 19.2091C0.209605 19.2324 0.223317 19.2537 0.240791 19.2716C0.258264 19.2895 0.279146 19.3037 0.302206 19.3134C0.325265 19.3231 0.350036 19.3281 0.375059 19.3281H1.78131C1.88443 19.3281 1.96646 19.2461 1.96881 19.1453C2.01568 17.3359 2.74225 15.6414 4.02662 14.357C5.35553 13.0281 7.12037 12.2969 9.00006 12.2969C10.8797 12.2969 12.6446 13.0281 13.9735 14.357C15.2579 15.6414 15.9844 17.3359 16.0313 19.1453C16.0337 19.2484 16.1157 19.3281 16.2188 19.3281H17.6251C17.6501 19.3281 17.6749 19.3231 17.6979 19.3134C17.721 19.3037 17.7419 19.2895 17.7593 19.2716C17.7768 19.2537 17.7905 19.2324 17.7997 19.2091C17.8088 19.1858 17.8132 19.161 17.8126 19.1359C17.7891 18.0156 17.5571 16.9258 17.1212 15.8969ZM9.00006 10.5156C7.92428 10.5156 6.91178 10.0961 6.15006 9.33438C5.38834 8.57266 4.96881 7.56016 4.96881 6.48438C4.96881 5.40859 5.38834 4.39609 6.15006 3.63437C6.91178 2.87266 7.92428 2.45312 9.00006 2.45312C10.0758 2.45312 11.0883 2.87266 11.8501 3.63437C12.6118 4.39609 13.0313 5.40859 13.0313 6.48438C13.0313 7.56016 12.6118 8.57266 11.8501 9.33438C11.0883 10.0961 10.0758 10.5156 9.00006 10.5156Z" fill="#59bad8" />
            </svg>

        }
        case 'drpchev': {
            return <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 17L9 9L0.999999 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>


        }
        case 'drpchevdown': {
            return <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L9 9L17 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>



        }
        default: {
            return null;
        }
    }
}
export default Icon;