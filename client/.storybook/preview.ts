import type { Preview } from "@storybook/react"
import { Title, Subtitle,  Primary, ArgTypes, Stories } from '@storybook/blocks'


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
