export const sectionPadding = 'px-4 sm:px-8 md:px-[8%]';
export const pageHeaderStyle = 'w-fit text-4xl font-medium';
export const sectionPseudoStyle =
  'before:absolute before:content before:-top-8 before:w-full before:left-0 before:bg-[#F4F4F4] before:w-full before:h-14 before:rounded-t-[32px]';
export const blurPseudoStyle =
  'flex flex-col font-bold text-xl md:text-4xl w-[64px] h-[68px] md:w-[100px] md:h-[100px] items-center justify-center bg-white bg-opacity-20 backdrop-blur-4xl border border-[#FBF9F4]/60 rounded-xl';
export const menuBlurPseudoStyle =
  'px-5 py-2 md:px-7 text-sm text-white bg-white bg-opacity-20 backdrop-blur-4xl border border-[#FBF9F4] rounded-lg';
export const testimonyIconButtonStyle =
  'bg-primary rounded-[10px] cursor-pointer p-3 hover:bg-[#D1CCC2]';
export const navLinkStyle = (active: boolean, allowClick?: boolean) =>
  `px-3 py-1 rounded-3xl text-dark-grey font-normal hover:text-primary ${
    active ? 'text-primary pointer-events-none' : ''
  } ${allowClick ? 'pointer-events-auto hover:text-primary' : ''}`;

export const date =
  'h-fit py-[2px] px-4 placeholder:text-sm font-semibold overflow-hidden text-base !rounded-[10px] w-full bg-white border border-primary outline-none sm:text-sm placeholder:text-mcNif-light-gray-3';
export const counterBtn = 'rounded-[5px] bg-primary h-8 w-10 text-white ';
export const termsContentWrapper = 'flex flex-col gap-2 md:gap-3';
export const termsContentTitle =
  'text-primary text-base md:text-lg font-semibold';
export const termsContentText = 'text-mcNif-gray-3 text-sm md:text-base';
export const filterToggle=
'cursor-pointer rounded-full  px-6 py-1 font-semibold text-sm grid place-items-center whitespace-nowrap transition-all duration-300 ease-in-out'
