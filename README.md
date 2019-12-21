# Next.js Front End starter pack

Featuring:

- TypeScript
- Next
- ThemeUI
- NProgress
- Jest
- react-testing-library

## Testing

Jest is configured and ready to use with `react-testing-library`.

There is a custom rendering setup similar to what is found in [the documentation](https://testing-library.com/docs/react-testing-library/setup#custom-render). It wraps all tested components with ThemeUI's `ThemeProvider`.

The custom test renderer, and all `react-testing-library` exports are available without using relative imports:

```javascript
import { render, fireEvent } from 'test-utils';
```

Make sure you import from `'test-utils'` or your tests may crash if the theme is expected.

### Emotion snapshots

Because ThemeUI uses emotion under the hood, `jest-emotion`'s [snapshot serializer](https://emotion.sh/docs/jest-emotion#snapshot-serializer) is included.

Refer to the emotion's [testing documentation](https://emotion.sh/docs/testing) for more info.
