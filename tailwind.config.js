
const plugin = require("@tailwindcss/postcss7-compat");
module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: theme => ({
                "section-auth": "url('/src/image/sectionAuth.jpg')",
                "footer": "url('/src/image/footerBg.jpg')",
                "first-ban": "url('/src/image/firstBanner.jpg')",
                "icon-fb": "url('/src/image/icon/logo_transparent.png')",
                "icon-i": "url('/src/image/icon/logo_transparent.png')",
                "icon-li": "url('/src/image/icon/logo_transparent.png')",
                "icon-twit": "url('/src/image/icon/logo_transparent.png')",
                "section-about": "url('/src/image/pageAbout.jpg')",
                "photographer": "url('/src/image/photographer.jpg')",
                "bgBlockReview": "url('/src/image/bgBlockReview.jpg')",
                "pageServices": "url('/src/image/pageServices.jpg')",
            }),
            height: {
                xs: "250px",
                sm: "350px",
                mm: "450px",
                md: "500px",
                lg: "550px",
                xl: "650px",
                calc: "calc(100% - 1.5rem)",
            },
            width: {
                sm: "300px",
                md: "550px",
                xl: "700px",
                xxl: "900px",
                calc: "calc(100% - 1.5rem)",
                wa: "calc(100% - 8px)",
            },
            minWidth: {
                md: "500px",
                sm: "400px",
                xs: "245px",
            },
            maxWidth: {
                cc: "1140px",
                sl: "90%",
                ab: "960px",
                md: "calc(20% - .5rem)"
            },
            minHeight: {
                lg: "350px",
                xs: "200px"
            },
            maxHeight: {
                md: "450px",
            },
            padding: {
                "sm":"70px",
            },
            inset:{
              "top": "4px",
              "right": "0px",
              "bottom": "0px",
              "left": "4px",
            },
            fill: {
                current: 'currentColor',
            },
            container: {
                center: true,
            },
             fontFamily:{
                "oswaldLight": ["Oswald Light", "san-serif"],
                "oswaldRegular": ["Oswald Regular", "san-serif"],
             },
            screens:{
                "xs": "320px",
            }
        },
    },
    variants: {
        extend: {
            fill: ["hover", "focus"],
            textColor: ["before", "after"],
        },
    },
    customPseudoElements: ["line"],
    plugins: [
        require("tailwindcss-pseudo-elements"),
    ],
}
