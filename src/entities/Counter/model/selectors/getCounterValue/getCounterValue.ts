import { createSelector } from '@reduxjs/toolkit';
import { getCounter } from '../getCounter/getCounter';
import { CounterSchema } from '../../types/counterSchema';

/* используем библиотеку reselect (из коробки redux-toolkit)
для переиспользования, комбинирования и мемоизирования */
export const getCounterValue = createSelector(
    getCounter,
    (counter: CounterSchema) => counter.value,
);
