# Font Assets for i18n Support

## Required Fonts

### Noto Sans Arabic (for Arabic - AR)
- **License**: SIL Open Font License 1.1
- **Source**: Google Fonts - https://fonts.google.com/noto/specimen/Noto+Sans+Arabic
- **Required files**:
  - `noto-sans-arabic/NotoSansArabic-Regular.woff2` (Regular 400)
  - `noto-sans-arabic/NotoSansArabic-Bold.woff2` (Bold 700)

### Noto Sans SC (for Simplified Chinese - ZH)
- **License**: SIL Open Font License 1.1
- **Source**: Google Fonts - https://fonts.google.com/noto/specimen/Noto+Sans+SC
- **Required files**:
  - `noto-sans-sc/NotoSansSC-Regular.woff2` (Regular 400)
  - `noto-sans-sc/NotoSansSC-Bold.woff2` (Bold 700)

## Installation Instructions

1. Download font families from Google Fonts
2. Extract the .woff2 files for Regular (400) and Bold (700) weights
3. Place Arabic fonts in `/assets/fonts/noto-sans-arabic/`
4. Place Chinese fonts in `/assets/fonts/noto-sans-sc/`
5. Copy the SIL OFL 1.1 license to `/assets/fonts/OFL.txt`

## License Compliance

The SIL Open Font License 1.1 allows:
- ✅ Redistribution
- ✅ Modification
- ✅ Commercial use
- ✅ Private use
- Required: Include OFL.txt license file

## Fallback Behavior

If fonts are not loaded, the system will fall back to:
- **Arabic**: 'Traditional Arabic', 'Arabic Typesetting', Arial
- **Chinese**: 'Microsoft YaHei', 'PingFang SC', SimHei

Note: Fallback fonts provide basic support but may not meet institutional quality standards.
