import type { TypedUseSelectorHook } from "react-redux"
import { useDispatch, useSelector } from "react-redux"

import { type AppDispatch, type RootState } from "./store"

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
