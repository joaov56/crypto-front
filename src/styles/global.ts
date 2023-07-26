import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

    html{
        font-family: 'Roboto', serif
    }

    :root{
        --primary: #FBAB34;
        --primary-100: #FFF6E8;
        --primary-200: #FFE1B5;
        --primary-300: #FFCD82;
        --primary-400: #FFB94F;
        --primary-500: #fBAB34;
        --primary-600: #FBAB34;
        --primary-700: #AD721A;
        --primary-800: #7A4E0C;


        --secondary: #8C8A97;
        --secondary-100: #F6F6F6;
        --secondary-200: #F4F3F8;
        --secondary-300: #E0DEEA;
        --secondary-400: #acabb7;
        --secondary-500: #8C8A97;
        --secondary-600: #716F7A;
        --secondary-700: #5F5C6B;
        --secondary-800: #4E4B59;
        --secondary-900: #33303E;

        --tertiary: #1BD171;
        --tertiary-100: #E8FAF1;
        --tertiary-200: #D1F6E3;
        --tertiary-300: #A4EDC6;
        --tertiary-400: #8DE8B8;
        --tertiary-500: #1BD171;
        --tertiary-600: #18B863;
        --tertiary-700: #149E55;
        --tertiary-800: #0E6B3A;
        --tertiary-900: #07381E;

        --quartenary: #EC3237;
        --quartenary-100: #FFF2F3;
        --quartenary-200: #FFCFD0;
        --quartenary-300: #FF9497;
        --quartenary-400: #FA7D80;
        --quartenary-500: #EC3237;
        --quartenary-600: #D42D31;
        --quartenary-700: #A12226;
        --quartenary-800: #6E171A;
        --quartenary-900: #3B0C0E;

    }
`;
