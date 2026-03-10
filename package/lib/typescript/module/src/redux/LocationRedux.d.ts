export interface LocationState {
    responseLocation: any[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}
interface LocationResponseRequest {
    appkey: string;
    mid: string;
    lat: string;
    lon: string;
    accuracy: string;
}
export declare const locationRequest: import("@reduxjs/toolkit").AsyncThunk<any, LocationResponseRequest, {
    state?: unknown;
    dispatch?: import("redux-thunk").ThunkDispatch<unknown, unknown, import("redux").UnknownAction>;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const locationResponse: ((state: {
    location: LocationState;
}) => any[]) & {
    clearCache: () => void;
    resultsCount: () => number;
    resetResultsCount: () => void;
} & {
    resultFunc: (resultFuncArgs_0: LocationState) => any[];
    memoizedResultFunc: ((resultFuncArgs_0: LocationState) => any[]) & {
        clearCache: () => void;
        resultsCount: () => number;
        resetResultsCount: () => void;
    };
    lastResult: () => any[];
    dependencies: [(state: {
        location: LocationState;
    }) => LocationState];
    recomputations: () => number;
    resetRecomputations: () => void;
    dependencyRecomputations: () => number;
    resetDependencyRecomputations: () => void;
} & {
    argsMemoize: typeof import("@reduxjs/toolkit").weakMapMemoize;
    memoize: typeof import("@reduxjs/toolkit").weakMapMemoize;
};
export declare const locationStatus: ((state: {
    location: LocationState;
}) => "succeeded" | "failed" | "loading" | "idle") & {
    clearCache: () => void;
    resultsCount: () => number;
    resetResultsCount: () => void;
} & {
    resultFunc: (resultFuncArgs_0: LocationState) => "succeeded" | "failed" | "loading" | "idle";
    memoizedResultFunc: ((resultFuncArgs_0: LocationState) => "succeeded" | "failed" | "loading" | "idle") & {
        clearCache: () => void;
        resultsCount: () => number;
        resetResultsCount: () => void;
    };
    lastResult: () => "succeeded" | "failed" | "loading" | "idle";
    dependencies: [(state: {
        location: LocationState;
    }) => LocationState];
    recomputations: () => number;
    resetRecomputations: () => void;
    dependencyRecomputations: () => number;
    resetDependencyRecomputations: () => void;
} & {
    argsMemoize: typeof import("@reduxjs/toolkit").weakMapMemoize;
    memoize: typeof import("@reduxjs/toolkit").weakMapMemoize;
};
export declare const locationError: ((state: {
    location: LocationState;
}) => string | null) & {
    clearCache: () => void;
    resultsCount: () => number;
    resetResultsCount: () => void;
} & {
    resultFunc: (resultFuncArgs_0: LocationState) => string | null;
    memoizedResultFunc: ((resultFuncArgs_0: LocationState) => string | null) & {
        clearCache: () => void;
        resultsCount: () => number;
        resetResultsCount: () => void;
    };
    lastResult: () => string | null;
    dependencies: [(state: {
        location: LocationState;
    }) => LocationState];
    recomputations: () => number;
    resetRecomputations: () => void;
    dependencyRecomputations: () => number;
    resetDependencyRecomputations: () => void;
} & {
    argsMemoize: typeof import("@reduxjs/toolkit").weakMapMemoize;
    memoize: typeof import("@reduxjs/toolkit").weakMapMemoize;
};
declare const _default: import("redux").Reducer<LocationState>;
export default _default;
//# sourceMappingURL=LocationRedux.d.ts.map