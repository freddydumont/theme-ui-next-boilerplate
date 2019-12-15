import { Styled } from 'theme-ui';
import {
  TypeScale,
  TypeStyle,
  ColorPalette,
  ColorSwatch,
} from '@theme-ui/style-guide';

export default () => (
  <>
    <Styled.h1>Style Guide</Styled.h1>
    <Styled.h2>Color Palette</Styled.h2>
    <ColorPalette />
    <Styled.h2>Color Swatch</Styled.h2>
    <ColorSwatch />
    <Styled.h2>Type Scale</Styled.h2>
    <TypeScale />
    <Styled.h2>Heading Style</Styled.h2>
    <TypeStyle fontFamily="heading" fontWeight="heading" lineHeight="heading">
      The quick brown fox jumps over the lazy dog.
    </TypeStyle>
    <Styled.h2>Body Style</Styled.h2>
    <TypeStyle fontFamily="body" fontWeight="body" lineHeight="body">
      The quick brown fox jumps over the lazy dog.
    </TypeStyle>
    <Styled.h2>Monospace Style</Styled.h2>
    <TypeStyle
      fontFamily="monospace"
      fontWeight="monospace"
      lineHeight="monospace"
    >
      The quick brown fox jumps over the lazy dog.
    </TypeStyle>
  </>
);
