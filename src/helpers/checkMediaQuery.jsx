import { useMediaQuery } from '@mui/material';

function CheckMediaQuery(mobileOption, tabletOption, desktopOption) {
  const matchesMobile = useMediaQuery('(min-width:30em)');
  const matchesTablet = useMediaQuery('(min-width:48em)');
  const matchesDesktop = useMediaQuery('(min-width:80em)');

  if (matchesDesktop) {
    console.log('Desktop view');
    return desktopOption;
  }
  if (matchesTablet) {
    console.log('Tablet view');
    return tabletOption;
  }
  if (matchesMobile) {
    console.log('Mobile view');
    return mobileOption;
  }
}

export { CheckMediaQuery };
