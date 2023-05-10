import { Story } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import React from 'react';
import ThemeProvider from 'app/providers/ThemeProvider/ui/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    </ThemeProvider>
);
