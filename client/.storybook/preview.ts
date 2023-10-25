import { Preview, Renderer } from "@storybook/react"
import { withThemeFromJSXProvider } from "@storybook/addon-themes"
import { ThemeProvider } from "@emotion/react"
import defaultTheme from '../src/components/theme/defaultTheme'
import { Title, Subtitle, Primary, ArgTypes, Stories } from "@storybook/blocks"

const darkTheme = {
  color: {
    primary: "darkgreen",
  },
}

export const decorators = [
  withThemeFromJSXProvider<Renderer>({
    themes: {
      default: defaultTheme,
      dark: darkTheme
    },
    defaultTheme: 'default',
    Provider: ThemeProvider
  })
]

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      toc: {
        title: "Contents",
        disabled: false,
        headingSelector: "h2, h3",
      },
      canvas: {
        sourceState: "shown",
      },
      /**
       * TODO: Need to find out why this is not working.
       */
      // page: () => (
      //   <>
      //     <Title />
      //     <Subtitle />
      //     <Primary />
      //     <ArgTypes />
      //     <Stories />
      //   </>
      // ),
    },
  },
}

export default preview
