---
name: Technical Precision System
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#43474f'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#737780'
  outline-variant: '#c3c6d1'
  surface-tint: '#3a5f94'
  primary: '#001e40'
  on-primary: '#ffffff'
  primary-container: '#003366'
  on-primary-container: '#799dd6'
  inverse-primary: '#a7c8ff'
  secondary: '#a63500'
  on-secondary: '#ffffff'
  secondary-container: '#d04400'
  on-secondary-container: '#fffbff'
  tertiary: '#1c1e20'
  on-tertiary: '#ffffff'
  tertiary-container: '#313335'
  on-tertiary-container: '#9a9b9d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d5e3ff'
  primary-fixed-dim: '#a7c8ff'
  on-primary-fixed: '#001b3c'
  on-primary-fixed-variant: '#1f477b'
  secondary-fixed: '#ffdbcf'
  secondary-fixed-dim: '#ffb59c'
  on-secondary-fixed: '#390c00'
  on-secondary-fixed-variant: '#822700'
  tertiary-fixed: '#e2e2e4'
  tertiary-fixed-dim: '#c6c6c8'
  on-tertiary-fixed: '#1a1c1d'
  on-tertiary-fixed-variant: '#454749'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  button:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: '1'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The design system is engineered to project a sense of unwavering reliability and technical expertise. Targeting homeowners and businesses seeking professional repair solutions, the UI evokes an emotional response of security and competence.

The visual style is **Corporate / Modern** with a focus on high-clarity information architecture. It utilizes subtle tactile cues through soft shadows and generous whitespace to ensure the interface feels premium and trustworthy. By prioritizing structured layouts over decorative elements, the design system emphasizes the brand's role as a specialist service provider rather than a generic utility. All messaging must strictly adhere to the "Technical Service" or "Special Service" nomenclature to maintain transparency.

## Colors

The palette is anchored by **Deep Navy Blue**, representing stability and corporate authority. This is used for primary navigation, headers, and key grounding elements. **Vibrant Orange** serves as the high-visibility action color, reserved strictly for primary CTAs and critical status indicators to drive conversion.

The background system relies on a tiered light-gray and white structure to separate content blocks without the need for heavy lines. Use the neutral black (#1A1A1A) for body text to ensure maximum legibility and accessibility compliance.

## Typography

This design system utilizes **Inter** exclusively to leverage its systematic, utilitarian character. The typography scale is designed for rapid scanning, with a clear hierarchy that guides users from urgent headlines to technical specifications.

For desktop displays, the `headline-lg` uses tight letter-spacing to create a bold, "locked-in" appearance. On mobile devices, headline sizes scale down to maintain readability within narrower viewports. Label styles use a slight tracking increase and uppercase transform to differentiate metadata from body prose.

## Layout & Spacing

The design system employs a **Fluid Grid** model with a maximum container width of 1280px. A 12-column grid is used for desktop, transitioning to a 4-column grid for mobile devices.

Spacing follows an 8px base unit. Vertical rhythm is maintained through "Stack" variables, ensuring consistent breathing room between content sections. Mobile layouts must account for a 72px bottom safe area to accommodate the sticky CTA component without overlapping critical content.

## Elevation & Depth

Visual hierarchy is established through **Ambient Shadows** and tonal layering. Surfaces are elevated using soft, multi-layered shadows with a low-opacity navy tint (`rgba(0, 51, 102, 0.08)`) to maintain brand cohesion even in the shadows.

- **Level 0 (Background):** Flat White or Light Gray.
- **Level 1 (Cards/Inputs):** Subtle 1px stroke (#E5E5E7) with a very soft blur for resting states.
- **Level 2 (Hover/Active):** Increased blur and spread to simulate physical lift.
- **Level 3 (Modals/Dropdowns):** Deep, diffused shadows to clearly separate the element from the page flow.

## Shapes

The design system uses a **Rounded** shape language to soften the corporate aesthetic and make the brand feel more approachable. 

The standard radius is **12px** for primary components like buttons and input fields, while larger containers like service cards and blog featured images utilize a **16px (rounded-lg)** radius. This consistency in curvature ensures that even data-heavy technical information feels modern and accessible.

## Components

### Buttons & CTAs
- **Primary:** Solid Orange (#FF5500) background with White text. Bold, 12px rounded corners.
- **Secondary:** Deep Navy stroke (2px) with Navy text.
- **Sticky Mobile CTA:** A full-width fixed bar at the bottom of mobile screens, using the Primary style to ensure the "Book Service" action is always accessible.

### Cards (Services & Blog)
Cards use a Level 1 elevation. Service cards should include a 40px icon in Deep Navy. Blog cards feature a top-aligned image with a 16px top-radius and content padded by 24px.

### Navigation & Dropdowns
The header features a clean Deep Navy logo with a text-based menu. Dropdowns appear on hover/tap with a Level 3 elevation, utilizing a 1px border and 12px rounding.

### Forms
Input fields use a 12px radius and a light gray background (#F5F5F7). On focus, the border transitions to a 2px Deep Navy stroke. Labels are positioned above the field using the `label-md` typographic style.

### List Items
Technical specifications or service steps should use bulleted lists with Deep Navy checkmark icons to reinforce the "Expert" tone.