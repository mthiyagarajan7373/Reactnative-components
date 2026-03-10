export interface ReachState {
    responseReach: any[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}
interface ReachReq {
    appkey: string;
    mid: string;
    actionType: string;
    requestType: string;
}
export declare const reachReq: import("@reduxjs/toolkit").AsyncThunk<any, ReachReq, {
    state?: unknown;
    dispatch?: import("redux-thunk").ThunkDispatch<unknown, unknown, import("redux").UnknownAction>;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const reachResponse: ((state: {
    reach: ReachState;
}) => any[]) & {
    clearCache: () => void;
    resultsCount: () => number;
    resetResultsCount: () => void;
} & {
    resultFunc: (resultFuncArgs_0: ReachState) => any[];
    memoizedResultFunc: ((resultFuncArgs_0: ReachState) => any[]) & {
        clearCache: () => void;
        resultsCount: () => number;
        resetResultsCount: () => void;
    };
    lastResult: () => any[];
    dependencies: [(state: {
        reach: ReachState;
    }) => ReachState];
    recomputations: () => number;
    resetRecomputations: () => void;
    dependencyRecomputations: () => number;
    resetDependencyRecomputations: () => void;
} & {
    argsMemoize: typeof import("@reduxjs/toolkit").weakMapMemoize;
    memoize: typeof import("@reduxjs/toolkit").weakMapMemoize;
};
export declare const reachStatus: ((state: {
    reach: ReachState;
}) => "succeeded" | "failed" | "loading" | "idle") & {
    clearCache: () => void;
    resultsCount: () => number;
    resetResultsCount: () => void;
} & {
    resultFunc: (resultFuncArgs_0: ReachState) => "succeeded" | "failed" | "loading" | "idle";
    memoizedResultFunc: ((resultFuncArgs_0: ReachState) => "succeeded" | "failed" | "loading" | "idle") & {
        clearCache: () => void;
        resultsCount: () => number;
        resetResultsCount: () => void;
    };
    lastResult: () => "succeeded" | "failed" | "loading" | "idle";
    dependencies: [(state: {
        reach: ReachState;
    }) => ReachState];
    recomputations: () => number;
    resetRecomputations: () => void;
    dependencyRecomputations: () => number;
    resetDependencyRecomputations: () => void;
} & {
    argsMemoize: typeof import("@reduxjs/toolkit").weakMapMemoize;
    memoize: typeof import("@reduxjs/toolkit").weakMapMemoize;
};
export declare const reachError: ((state: {
    reach: ReachState;
}) => string | null) & {
    clearCache: () => void;
    resultsCount: () => number;
    resetResultsCount: () => void;
} & {
    resultFunc: (resultFuncArgs_0: ReachState) => string | null;
    memoizedResultFunc: ((resultFuncArgs_0: ReachState) => string | null) & {
        clearCache: () => void;
        resultsCount: () => number;
        resetResultsCount: () => void;
    };
    lastResult: () => string | null;
    dependencies: [(state: {
        reach: ReachState;
    }) => ReachState];
    recomputations: () => number;
    resetRecomputations: () => void;
    dependencyRecomputations: () => number;
    resetDependencyRecomputations: () => void;
} & {
    argsMemoize: typeof import("@reduxjs/toolkit").weakMapMemoize;
    memoize: typeof import("@reduxjs/toolkit").weakMapMemoize;
};
declare const _default: import("redux").Reducer<ReachState>;
export default _default;
//# sourceMappingURL=ReachRedux.d.ts.map