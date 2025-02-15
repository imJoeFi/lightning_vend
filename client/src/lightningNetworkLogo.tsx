import * as React from 'react';

interface LightningNetworkLogoProps {
  size: number
}

const backgroundPath = 'M 7 140.5 C 7 66.769 66.769 7 140.5 7 C 214.231 7 274 66.769 274 140.5 ' +
                       'C 274 214.231 214.231 274 140.5 274 C 66.769 274 7 214.231 7 140.5 Z';
const logoPath = 'M 161.1943 51.5 C 153.2349 72.1607 145.2756 94.4107 135.7244 116.6607 C ' +
                 '135.7244 116.6607 135.7244 119.8393 138.9081 119.8393 L 204.1747 119.8393 C ' +
                 '204.1747 119.8393 204.1747 121.4286 205.7667 123.0179 L 110.2545 229.5 C ' +
                 '108.6626 227.9107 108.6626 226.3214 108.6626 224.7321 L 142.0919 153.2143 L ' +
                 '142.0919 146.8571 L 75.2333 146.8571 L 75.2333 140.5 L 156.4187 51.5 L ' +
                 '161.1943 51.5 Z';

export const LightningNetworkLogo = (props: LightningNetworkLogoProps) => (
  <svg
    viewBox='0 0 280 280'
    style={{backgroundColor: '#ffffff00'}}
    x='0px'
    y='0px'
    width={`${props.size}px`}
    height={`${props.size}px`}
  >
    <path
      d={backgroundPath}
      fill='#f7931a'
    />
    <path
      d={logoPath}
      fill='#ffffff'
    />
  </svg>
);