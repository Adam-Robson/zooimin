import localFont from "next/font/local";

const firaSansThinItalic = localFont({
  src: './Fira_Sans/FiraSans-ThinItalic.ttf',
  display: 'swap',
  weight: '100',
  style: 'italic'
})

const firaSansThin = localFont({
  src: './Fira_Sans/FiraSans-Thin.ttf',
  display: 'swap',
  weight: '100',
  style: 'normal'
})

const firaSansExtraLightItalic = localFont({
  src: './Fira_Sans/FiraSans-ExtraLightItalic.ttf',
  display: 'swap',
  weight: '200',
  style: 'italic'
})

const firaSansExtraLight = localFont({
  src: './Fira_Sans/FiraSans-ExtraLight.ttf',
  display: 'swap',
  weight: '200',
  style: 'normal'
})

const firaSansLightItalic = localFont({
  src: './Fira_Sans/FiraSans-LightItalic.ttf',
  display: 'swap',
  weight: '300',
  style: 'italic'
})

const firaSansLight = localFont({
  src: './Fira_Sans/FiraSans-Light.ttf',
  display: 'swap',
  weight: '300',
  style: 'normal'
})

const firaSansItalic = localFont({
  src: './Fira_Sans/FiraSans-Italic.ttf',
  display: 'swap',
  weight: '400',
  style: 'italic'
})

const firaSansRegular = localFont({
  src: './Fira_Sans/FiraSans-Regular.ttf',
  display: 'swap',
  weight: '400',
  style: 'normal'
})

const firaSansMediumItalic = localFont({
  src: './Fira_Sans/FiraSans-MediumItalic.ttf',
  display: 'swap',
  weight: '500',
  style: 'italic'
})

const firaSansMedium = localFont({
  src: './Fira_Sans/FiraSans-Medium.ttf',
  display: 'swap',
  weight: '500',
  style: 'normal'
})

const firaSansSemiBoldItalic = localFont({
  src: './Fira_Sans/FiraSans-SemiBoldItalic.ttf',
  display: 'swap',
  weight: '600',
  style: 'italic'
})

const firaSansSemiBold = localFont({
  src: './Fira_Sans/FiraSans-SemiBold.ttf',
  display: 'swap',
  weight: '600',
  style: 'normal'
})

const firaSansBoldItalic = localFont({
  src: './Fira_Sans/FiraSans-BoldItalic.ttf',
  display: 'swap',
  weight: '700',
  style: 'italic'
})

const firaSansBold = localFont({
  src: './Fira_Sans/FiraSans-Bold.ttf',
  display: 'swap',
  weight: '700',
  style: 'normal'
})

const firaSansExtraBoldItalic = localFont({
  src: './Fira_Sans/FiraSans-ExtraBoldItalic.ttf',
  display: 'swap',
  weight: '800',
  style: 'italic'
})

const firaSansExtraBold = localFont({
  src: './Fira_Sans/FiraSans-ExtraBold.ttf',
  display: 'swap',
  weight: '800',
  style: 'normal'
})


// Define local font
const customFont = localFont({
  src: [
    {
      path: './Fira_Code/FiraCode-VariableFont_wght.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './Fira_Code/FiraCode-VariableFont_wght.ttf',
      weight: '100',
      style: 'italic',
    },
    {
      path: './Fira_Code/FiraCode-VariableFont_wght.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './Fira_Code/FiraCode-VariableFont_wght.ttf',
      weight: '200',
      style: 'italic',
    },
    {
      path: './Fira_Code/FiraCode-VariableFont_wght.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './Fira_Code/FiraCode-VariableFont_wght.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: './Fira_Code/FiraCode-VariableFont_wght.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Fira_Code/FiraCode-VariableFont_wght.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './Fira_Code/FiraCode-VariableFont_wght.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Fira_Code/FiraCode-VariableFont_wght.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: './Fira_Code/FiraCode-VariableFont_wght.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './Fira_Code/FiraCode-VariableFont_wght.ttf',
      weight: '600',
      style: 'italic',
    },
    {
      path: './Fira_Code/FiraCode-VariableFont_wght.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Fira_Code/FiraCode-VariableFont_wght.ttf',
      weight: '700',
      style: 'italic',
    }
  ],
  variable: '--font-custom', // CSS variable for use in Tailwind
})

export default function Fonts({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${customFont.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}

export {
  firaSansBold, firaSansBoldItalic, firaSansExtraBold, firaSansExtraBoldItalic, firaSansExtraLight, firaSansExtraLightItalic, firaSansItalic, firaSansLight, firaSansLightItalic, firaSansMedium, firaSansMediumItalic, firaSansRegular, firaSansSemiBold, firaSansSemiBoldItalic, firaSansThin, firaSansThinItalic
};

