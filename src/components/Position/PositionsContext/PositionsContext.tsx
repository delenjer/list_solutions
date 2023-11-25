import {createContext, Dispatch} from 'react';
import {DataDto} from '@/models/models';
import {Action} from '@/components/Position/reducer';

export const PositionsContext = createContext<DataDto[]>([]);
export const PositionsDispatchContext = createContext<Dispatch<Action> | null>(null);
