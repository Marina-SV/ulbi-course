import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CommentList } from './CommentList';

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    comments: [
        {
            id: '1',
            text: 'hello world',
            user: {
                id: '1',
                username: 'Masha',
                avatar: 'https://oir.mobi/uploads/posts/2021-04/1618600893_42-oir_mobi-p-polevie-tsveti-sinego-tsveta-tsveti-krasiv-48.jpg',
            },
        },
        {
            id: '2',
            text: 'comment 2',
            user: {
                id: '1',
                username: 'Masha',
                avatar: 'https://oir.mobi/uploads/posts/2021-04/1618600893_42-oir_mobi-p-polevie-tsveti-sinego-tsveta-tsveti-krasiv-48.jpg',
            },
        },
        {
            id: '2',
            text: 'comment 3',
            user: {
                id: '1',
                username: 'Masha',
                avatar: 'https://oir.mobi/uploads/posts/2021-04/1618600893_42-oir_mobi-p-polevie-tsveti-sinego-tsveta-tsveti-krasiv-48.jpg',
            },

        },
    ],
};

export const Loading = Template.bind({});
Loading.args = {
    comments: [],
    isLoading: true,
};
