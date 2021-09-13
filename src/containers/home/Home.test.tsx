import * as React from 'react';
import { IntlProvider } from 'react-intl';

import { render, screen } from '../../../test-utils/testUtil';
import { Home } from './Home';

const testInitalMessages = {
    'test.text': 'test text',
    'test.text.title': 'test title',
    'test.text.text': 'test text text',
    'test.tooltip': 'test tooltip',
    'test.dummy': 'test dummy',
    'test.key': 'test key'
};

describe(Home, () => {
    test('expected elements of Home', () => {
        render(
            <IntlProvider
                messages={testInitalMessages}
                locale="en"
                defaultLocale="en">
                <Home />
            </IntlProvider>
        );

        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        expect(screen.getAllByRole('heading')).toHaveLength(7);
    });
});